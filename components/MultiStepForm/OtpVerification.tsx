"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { verifyOtp } from "@/redux/features/onboarding/onboardingSlice"
import type { RootState } from "@/redux/store"
import  Logo  from "@/public/logo.svg"
import Image from 'next/image'

export default function OtpVerification() {
  const dispatch = useDispatch()
  const { personalInfo } = useSelector((state: RootState) => state.onboarding)
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [countdown, setCountdown] = useState(30)

  // Mask phone number
  const maskedPhone = personalInfo.phoneNumber.replace(/^(\+\d{1,2})(\d{3})(\d{3})(\d{4})$/, "$1-••-•••-$4")

  useEffect(() => {
    // Start countdown for resend
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Simulate OTP verification
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, let's say "1234" is the correct OTP
      if (otp === "1234") {
        dispatch(verifyOtp(true))
      } else {
        setError("Wrong OTP")
      }
    } catch (error) {
      setError("Failed to verify OTP. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResendCode = async () => {
    setCountdown(30)
    // Simulate resending OTP
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // Show success message or notification
  }

  return (
    <div className=" flex flex-col items-center justify-center p-4">
      <div className="mb-8">
        <Image src='/authLogo.png' alt="logo" width={250} height={130}  />
        {/* <Image src='/authLogo.png' alt="logo" /> */}
      </div>

      <div className="w-full max-w-md mt-20">
        <h1 className="text-2xl font-bold text-center mb-2">Enter OTP Code</h1>
        <p className="text-center text-gray-600 mb-8">
          Enter the one-time code sent to {maskedPhone} to confirm your account and start with Limpiar
        </p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="p-2 bg-gray-100 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
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
  )
}

