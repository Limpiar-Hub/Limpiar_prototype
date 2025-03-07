"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { verifyOtp } from "@/redux/features/onboarding/onboardingSlice";
import type { RootState } from "@/redux/store";
import Image from "next/image";

export default function OtpVerification() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { personalInfo } = useSelector((state: RootState) => state.onboarding);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [phoneNumber, setPhoneNumber] = useState("");

  // Ensure phone number is available
  useEffect(() => {
    const storedPhone = personalInfo?.phoneNumber || localStorage.getItem("phoneNumber");

    if (!storedPhone) {
      router.replace("/register");
    } else {
      setPhoneNumber(storedPhone);
    }
  }, [personalInfo, router]);

  // Mask phone number
  const maskedPhone = phoneNumber
    ? phoneNumber.replace(/^(\+\d{1,2})(\d{3})(\d{3})(\d{4})$/, "$1-••-•••-$4")
    : "";

  // Countdown for resend
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Call your API endpoint to verify the OTP
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp, phoneNumber }), // Include phoneNumber if needed
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(verifyOtp(true));
        // Redirect or perform other actions after successful verification
      } else {
        setError(data.message || "Failed to verify OTP.");
      }
    } catch (error) {
      setError("Failed to verify OTP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendCode = async () => {
    setCountdown(30);
    // Call your API endpoint to resend the OTP
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating delay for resend
  };

  if (!phoneNumber) return null; // Prevents rendering until phone number is available

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

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="p-2 bg-gray-100 rounded-md">
            {/* SVG Icon */}
          </div>
          <span className="text-2xl">→</span>
          <form onSubmit={handleSubmit} className="flex-1">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className={`w-full p-3 border ${error ? "border-red-500" : "border-gray-200"} rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7eea] focus:border-transparent text-center text-lg`}
              maxLength={4}
            />
            {error && <p className="text-red-500 text-sm mt-1 text-center">{error}</p>}
          </form>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-[#2e7eea] text-white py-3 px-4 rounded-md hover:bg-[#2569d0] transition-colors font-medium mb-4"
          disabled={isSubmitting || otp.length !== 4}
        >
          {isSubmitting ? "Verifying..." : "Confirm"}
        </button>

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
