"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { setPersonalInfo } from "@/redux/features/onboarding/onboardingSlice";
import { PasswordInput } from "@/components/password-input";
import { Check, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import React from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import axios from "axios";

const personalInfoSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string(), // Removed validation
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least 1 special character")
    .regex(/\d/, "Password must contain at least 1 number"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

export default function PersonalInfoForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  // Password validation states
  const [passwordLength, setPasswordLength] = useState(false);
  const [passwordSpecial, setPasswordSpecial] = useState(false);
  const [passwordNumber, setPasswordNumber] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,  
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",  
      password: "",
      confirmPassword: "",
    },
  });
  

  // Watch the password field to update validation states
  const passwordValue = watch("password");

  React.useEffect(() => {
    if (passwordValue) {
      setPasswordLength(passwordValue.length >= 8);
      setPasswordSpecial(/[!@#$%^&*(),.?":{}|<>]/.test(passwordValue));
      setPasswordNumber(/\d/.test(passwordValue));
    }
  }, [passwordValue]);




    // 🔍 Log raw response for debugging
 
  

const onSubmit = async (data: PersonalInfoFormData) => {
  try {
    setIsLoading(true);
    setServerError("");

    const { fullName, email, phoneNumber, password, confirmPassword } = data;

    if (!phoneNumber?.trim()) {
      throw new Error("Phone number is required.");
    }

    const formData = {
      fullName,
      email,
      phoneNumber: phoneNumber.trim(),
      password,
      confirmPassword,
      role: "property_manager",
    };

    console.log("📤 Submitting Registration:", formData);

    // ✅ Use the Axios instance for cleaner API calls
    const { data: response } = await api.post("/register", formData);

    console.log("⬇️ API Response:", response);

    if (response.message?.includes("Verification code sent")) {
      // Store session data for OTP verification
      localStorage.setItem("phoneNumber", phoneNumber.trim());
      localStorage.setItem("sessionData", JSON.stringify(formData));

      // ✅ Redirect to OTP verification
      router.push("/verify-otp");
      return;
    }

    throw new Error(`Unexpected response: ${JSON.stringify(response)}`);
  } catch (error) {
    console.error("❌ Registration Error:", error);
    setServerError(axios.isAxiosError(error) ? error.response?.data?.message : "An unexpected error occurred.");
  } finally {
    setIsLoading(false);
  }
};

  
  
  
  
  return (
    <div className="max-w-md mx-auto w-full xl:ml-20">
      <h1 className="text-2xl font-bold mb-6">Personal Information</h1>

      {serverError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div className="space-y-1">
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="John Doe"
            className={`w-full p-3 border ${
              errors.fullName ? "border-red-500" : "border-gray-200"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7eea] focus:border-transparent`}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="hello@example.com"
            className={`w-full p-3 border ${
              errors.email ? "border-red-500" : "border-gray-200"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7eea] focus:border-transparent`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number with PhoneInput */}
        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <PhoneInput
  country={"us"}
  value={phoneNumber}
  onChange={(phone) => {
    setPhoneNumber(phone); 
    setValue("phoneNumber", phone, { shouldValidate: true }); // ✅ Updates form state
  }}
  inputClass="w-full !h-10 !pl-12 !border-gray-300 rounded-md"
  containerClass="w-full"
/>

        </div>

        {/* Password */}
        <PasswordInput
          id="password"
          label="Password"
          register={register("password")}
          error={errors.password}
        />

        {/* Password Requirements */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            {passwordLength ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <X size={16} className="text-red-500" />
            )}
            <span className={passwordLength ? "text-green-600" : "text-gray-600"}>
              Min 8 characters
            </span>
          </div>
          <div className="flex items-center gap-1">
            {passwordSpecial ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <X size={16} className="text-red-500" />
            )}
            <span className={passwordSpecial ? "text-green-600" : "text-gray-600"}>
              1 special character
            </span>
          </div>
          <div className="flex items-center gap-1">
            {passwordNumber ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <X size={16} className="text-red-500" />
            )}
            <span className={passwordNumber ? "text-green-600" : "text-gray-600"}>
              1 number
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <PasswordInput
          id="confirmPassword"
          label="Confirm Password"
          register={register("confirmPassword")}
          error={errors.confirmPassword}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#2e7eea] text-white py-3 px-4 rounded-md hover:bg-[#2569d0] transition-colors font-medium"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Next"}
        </button>
      </form>
    </div>
  );
}
