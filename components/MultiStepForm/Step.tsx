import { Check } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

interface StepProps {
  step: {
    number: number;
    title: string;
  };
  isActive: boolean;
}

export default function Step({ step, isActive }: StepProps) {
  const { number, title } = step;

  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isActive
            ? "bg-[#2e7eea] text-white"
            : "bg-white text-[#2e7eea] border border-[#2e7eea]"
        }`}
      >
        {number}
      </div>
      <span className="text-white">{title}</span>
    </div>
  );
}