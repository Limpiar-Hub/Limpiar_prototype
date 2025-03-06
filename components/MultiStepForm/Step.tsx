import { Check } from "lucide-react"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"

interface StepProps {
  step: {
    number: number
    title: string
  }
}

export default function Step({ step }: StepProps) {
  const { number, title } = step
  const { currentStep, otpVerified } = useSelector((state: RootState) => state.onboarding)

  // Determine step status
  const isCompleted = currentStep > number
  const isActive = currentStep === number

  return (
    <div className="flex items-center gap-2">
      {isCompleted ? (
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-white">
          <Check className="w-5 h-5" />
        </div>
      ) : (
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isActive ? "bg-[#2e7eea] text-white" : "bg-white text-[#2e7eea] border border-[#2e7eea]"
          }`}
        >
          {number}
        </div>
      )}
      <span className="text-white">{title}</span>
    </div>
  )
}

