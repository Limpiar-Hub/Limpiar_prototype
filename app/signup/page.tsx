"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { Sidebar } from "@/components/sidebar-stepper";
import StepForm from "@/components/MultiStepForm/StepForm";
import Image from "next/image";

export default function Home() {
  const { currentStep, showOtpVerification } = useSelector(
    (state: RootState) => state.onboarding
  );

  // If showing OTP verification, render a centered layout
  if (showOtpVerification) {
    return <StepForm />;
  }

  // Otherwise, render the standard layout with sidebar
  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Logo */}
      <div className="md:hidden pt-6 pb-2">
        <Image src="/authLogo.png" alt="logo" width={100} height={100} />
      </div>

      {/* Desktop Logo */}
      <div className="hidden md:block    mx-auto ">
        <Image src="/authLogo.png" alt="logo" width={250} height={130} />
      </div>

      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden md:block md:w-[400px] lg:w-[550px] ml-10">
          <Sidebar currentStep={currentStep} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 md:p-10 flex flex-col">
          <StepForm />
        </div>
      </div>
    </div>
  );
}
