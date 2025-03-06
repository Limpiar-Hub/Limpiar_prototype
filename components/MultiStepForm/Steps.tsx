import Step from "./Step"

const steps = [
  { number: 1, title: "Personal Information" },
  { number: 2, title: "Company Information" },
  { number: 3, title: "Property Details" },
]

export default function Steps() {
  return (
    <div className="space-y-4">
      {steps.map((step, i) => (
        <Step key={i} step={step} />
      ))}
    </div>
  )
}

