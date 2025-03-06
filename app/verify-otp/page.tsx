"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "@/redux/features/onboarding/onboardingSlice";
import type { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OtpVerification() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { personalInfo } = useSelector((state: RootState) => state.onboarding);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(30);

  // Retrieve phoneNumber from localStorage
  const phoneNumber =
    localStorage.getItem("phoneNumber") || personalInfo.phoneNumber;

  // Mask phone number
  const maskedPhone = phoneNumber.replace(
    /^(\+\d{1,2})(\d{3})(\d{3})(\d{4})$/,
    "$1-••-•••-$4"
  );

  useEffect(() => {
    // Start countdown for resend
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
      // Validate OTP
      if (!otp || otp.length !== 6) {
        throw new Error("Please enter a valid 6-digit OTP.");
      }

      // Send OTP verification request to the backend
      const response = await fetch(
        "https://limpiar-backend.onrender.com/api/auth/verify-register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            phoneNumber: phoneNumber, // From localStorage
            code: otp, // User-entered OTP
          }),
        }
      );

      // Parse the JSON response
      const responseData = await response.json();

      // Check if the response was successful
      if (!response.ok) {
        throw new Error(
          responseData.message || "Failed to verify OTP. Please try again."
        );
      }

      // Dispatch Redux action to mark OTP as verified
      dispatch(verifyOtp(true));

      // Redirect to the dashboard or next page
      //   router.push("/dashboard");
    } catch (error) {
      console.error("OTP verification error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to verify OTP. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendCode = async () => {
    setCountdown(30);
    try {
      // Simulate resending OTP
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("OTP resent successfully.");
    } catch (error) {
      console.error("Failed to resend OTP:", error);
      alert("Failed to resend OTP. Please try again.");
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
          Enter the one-time code sent to {maskedPhone} to confirm your account
          and start with Limpiar
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-4 mb-6"
        >
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
          {error && (
            <p className="text-red-500 text-sm mt-1 text-center">{error}</p>
          )}
        </form>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-[#2e7eea] text-white py-3 px-4 rounded-md hover:bg-[#2569d0] transition-colors font-medium mb-4"
          disabled={isSubmitting || otp.length !== 6}
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
