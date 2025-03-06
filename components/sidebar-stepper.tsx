import Link from "next/link";
import Steps from "./MultiStepForm/Steps";

interface SidebarProps {
  currentStep: number;
}

export function Sidebar({ currentStep }: SidebarProps) {
  return (
    <div className="bg-[#2e7eea] text-white p-8 flex flex-col xl:m-20 xl:ml-25 rounded-[8px]">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          Let's setup Your Operating Dashboard
        </h2>
        <p className="text-sm opacity-90">
          All-in-one solution to for your business in the state. Form a new
          company from scratch or onboard your existing US company.
        </p>
      </div>

      <div className="mt-8">
        <Steps />
      </div>

      <div className="text-sm mt-12">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Sign In
        </Link>
      </div>
    </div>
  );
}
