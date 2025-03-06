"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import type { FieldError } from "react-hook-form"

interface PasswordInputProps {
  id: string
  label: string
  register: any
  error?: FieldError
  placeholder?: string
}

export function PasswordInput({ id, label, register, error, placeholder = "••••••••" }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`w-full p-3 border ${error ? "border-red-500" : "border-gray-200"} rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7eea] focus:border-transparent pr-10`}
          {...register}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  )
}

