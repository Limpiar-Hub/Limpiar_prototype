import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import PersonalInfoForm from "./StepForms/PersonalInfoForm"
import CompanyInfoForm from "./StepForms/CompanyInfoForm"
import PropertyDetailsForm from "./StepForms/PropertyDetailsForm"
import OtpVerification from "./OtpVerification"

export default function StepForm() {
  const { currentStep, showOtpVerification } = useSelector((state: RootState) => state.onboarding)

  // If OTP verification is showing, render that instead of the current step
  if (showOtpVerification) {
    return <OtpVerification />
  }

  // Otherwise, render the appropriate form based on the current step
  return renderFormByStep(currentStep)
}

function renderFormByStep(step: number) {
  if (step === 1) {
    return <PersonalInfoForm />
  } else if (step === 2) {
    return <CompanyInfoForm />
  } else if (step === 3) {
    return <PropertyDetailsForm />
  }

  // Default to first step if something goes wrong
  return <PersonalInfoForm />
}

