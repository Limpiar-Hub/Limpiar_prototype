import { Check } from "lucide-react"
import { useAppSelector } from "@/hooks/useReduxHooks"

interface StepperProps {
  currentStep: number
}

export function Stepper({ currentStep }: StepperProps) {
  const { otpVerified } = useAppSelector((state) => state.auth)

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        {currentStep > 1 && otpVerified ? (
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-white">
            <Check className="w-5 h-5" />
          </div>
        ) : (
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 1 ? "bg-[#2e7eea] text-white" : "bg-white text-[#2e7eea] border border-[#2e7eea]"}`}
          >
            1
          </div>
        )}
        <span className="text-white">Personal Information</span>
      </div>

      <div className="flex items-center gap-2">
        {currentStep > 2 ? (
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-white">
            <Check className="w-5 h-5" />
          </div>
        ) : (
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 2 ? "bg-[#2e7eea] text-white" : "bg-white text-[#2e7eea] border border-[#2e7eea]"}`}
          >
            2
          </div>
        )}
        <span className="text-white">Company Information</span>
      </div>

      <div className="flex items-center gap-2">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 3 ? "bg-[#2e7eea] text-white" : "bg-white text-[#2e7eea] border border-[#2e7eea]"}`}
        >
          3
        </div>
        <span className="text-white">Property Details</span>
      </div>
    </div>
  )
}

