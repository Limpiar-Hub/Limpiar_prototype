"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "@/redux/features/onboarding/onboardingSlice";
import type { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const API_URL = "https://limpiar-backend.onrender.com/api/auth";

export default function OtpVerification() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { personalInfo } = useSelector((state: RootState) => state.onboarding);

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const queryPhone = searchParams.get("phoneNumber");
    const storedPhone = localStorage.getItem("phoneNumber") || queryPhone || personalInfo?.phoneNumber || "";

    if (storedPhone) {
      setPhoneNumber(storedPhone);
    } else {
      alert("Session expired. Please register again.");
      router.replace("/register");
    }
  }, [searchParams.toString(), personalInfo, router]); // ✅ FIXED

  const maskedPhone = phoneNumber
    ? phoneNumber.replace(/^(\+\d{1,2})(\d{3})(\d{3})(\d{4})$/, "$1-••-•••-$4")
    : "your number";

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const fetchWithAuth = async (endpoint: string, options: RequestInit = {}) => {
    try {
      const url = `${API_URL.replace(/\/$/, "")}${endpoint}`;
      const token = localStorage.getItem("token");

      if (!token) {
        console.warn("⚠️ No token found. Redirecting to login...");
        throw new Error("Session expired. Please log in again.");
      }

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...((options.headers as Record<string, string>) || {}), // Ensure headers is a Record<string, string>
      };
      

      console.log("🚀 API Request:", url, { headers, ...options });

      const response = await fetch(url, {
        ...options,
        headers,
      });

      const responseText = await response.text();
      console.log("⬇️ Raw API Response:", response.status, responseText);

      if (!response.ok) {
        console.error("❌ API Error:", response.status, responseText);
        throw new Error(`HTTP ${response.status}: ${responseText}`);
      }

      return JSON.parse(responseText);
    } catch (error) {
      console.error("⚠️ Fetch Error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
  
    setIsSubmitting(true);
    setError("");
  
    try {
      if (!otp || otp.length !== 6) throw new Error("Enter a valid 6-digit code.");
  
      // Retrieve phoneNumber from localStorage if not in state
      const storedPhone = phoneNumber || localStorage.getItem("phoneNumber");
      if (!storedPhone) throw new Error("Session expired. Please register again.");
  
      console.log("📞 Stored Phone:", storedPhone);
      console.log("📩 OTP Code:", otp);
  
      const response = await fetch("https://limpiar-backend.onrender.com/api/auth/verify-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: storedPhone.trim(), // Ensure phone is sent properly
          code: otp.trim(), // Trim spaces from OTP
        }),
      });
  
      const data = await response.json();
      console.log("⬇️ API Response:", response.status, data);
  
      if (!response.ok) throw new Error(data.message || "Verification failed.");
      if (!data.token) throw new Error("Token missing in response. Please try again.");
  
      // Store authentication token
      localStorage.setItem("token", data.token);
      if (data.user?.userId) localStorage.setItem("userId", data.user.userId);
  
      dispatch(verifyOtp(true));
      router.push("/dashboard");
    } catch (error) {
      console.error("❌ Verification Error:", error);
      setError(error instanceof Error ? error.message : "Failed to verify code.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  
  
  
  
  

  const handleResendCode = async () => {
    setCountdown(30);
    try {
      await fetchWithAuth("/resend-otp", {
        method: "POST",
        body: JSON.stringify({ phoneNumber: phoneNumber || localStorage.getItem("phoneNumber") }), // ✅ FIXED
      });
      alert("OTP resent successfully.");
    } catch (error) {
      setError("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="mb-8">
        <Image src="/authLogo.png" alt="logo" width={250} height={130} />
      </div>

      <div className="w-full max-w-md mt-20">
        <h1 className="text-2xl font-bold text-center mb-2">Enter OTP Code</h1>
        <p className="text-center text-gray-600 mb-8">
          Enter the one-time code sent to {maskedPhone} to confirm your account.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 mb-6">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className={`w-full p-3 border ${
              error ? "border-red-500" : "border-gray-200"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7eea] focus:border-transparent text-center text-lg`}
            maxLength={6}
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#2e7eea] text-white py-3 px-4 rounded-md hover:bg-[#2569d0] transition-colors font-medium"
            disabled={isSubmitting || otp.length !== 6}
          >
            {isSubmitting ? "Verifying..." : "Confirm"}
          </button>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={handleResendCode}
            disabled={countdown > 0}
            className="text-[#2e7eea] text-sm hover:underline disabled:text-gray-400"
          >
            {countdown > 0 ? `Resend code (${countdown}s)` : "Resend code"}
          </button>
        </div>
      </div>
    </div>
  );
}
