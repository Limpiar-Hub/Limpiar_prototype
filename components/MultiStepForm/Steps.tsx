import Step from "./Step";

interface StepsProps {
  currentStep: number;
}

const steps = [
  { number: 1, title: "Personal Information" },
  { number: 2, title: "Company Information" },
  { number: 3, title: "Property Details" },
];

export default function Steps({ currentStep }: StepsProps) {
  return (
    <div className="space-y-4">
      {steps.map((step) => (
        <Step key={step.number} step={step} isActive={step.number === currentStep} />
      ))}
    </div>
  );
}
