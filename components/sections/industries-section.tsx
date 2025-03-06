"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const industries = [
  {
    id: "healthcare",
    label: "Healthcare",
    title: "Sterile Healthcare Environments for Patient Safety",
    description:
      "Maintain the highest standards of cleanliness in healthcare facilities to ensure patient safety and compliance with regulations. Our specialized cleaning protocols and trained staff deliver consistent, hospital-grade sanitization.",
    image: "/Craig.png",
  },
  {
    id: "retail",
    label: "Retail",
    title: "Spotless Retail Spaces for Enhanced Shopper Experience",
    description:
      "Keep your retail spaces spotless to elevate the shopper experience and boost retention. Ensure consistent standards across multiple locations with streamlined operations, maintaining high-traffic areas and preserving your store's visual appeal.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "hospitality",
    label: "Hospitality",
    title: "Immaculate Hospitality Venues for Guest Satisfaction",
    description:
      "Create exceptional guest experiences with meticulously maintained hospitality spaces. From lobbies to guest rooms, our comprehensive cleaning services ensure every area meets the highest standards of cleanliness.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "government",
    label: "Government",
    title: "Secure Government Facility Maintenance",
    description:
      "Maintain government facilities with security-cleared cleaning teams and specialized protocols. Our services ensure compliance with federal standards while maintaining the professional appearance of public spaces.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "industrial",
    label: "Industrial",
    title: "Professional Industrial Facility Cleaning",
    description:
      "Keep industrial spaces clean and safe with specialized cleaning services designed for manufacturing and warehouse environments. Our teams maintain cleanliness while adhering to safety protocols.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "hoa",
    label: "HOA",
    title: "Comprehensive HOA Property Maintenance",
    description:
      "Maintain the value and appearance of HOA properties with professional cleaning services. From common areas to amenities, we ensure your community spaces remain pristine.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "education",
    label: "Education",
    title: "Clean and Safe Educational Environments",
    description:
      "Create optimal learning environments with thorough cleaning services for educational facilities. Our teams maintain classrooms, common areas, and athletic facilities to support student health and success.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState("healthcare")

  const activeIndustry = industries.find((industry) => industry.id === activeTab)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 ">
        <div className="grid md:grid-cols-[280px,1fr] md:gap-4  lg:gap-6 lg:grid-cols-2 ">
          {/* Tabs */}
          <div className="flex lg:flex-col lg:ml-32 overflow-x-auto md:overflow-x-visible scrollbar-hide">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={cn(
                  "px-4 py-3 text-left whitespace-nowrap md:whitespace-normal text-lg transition-colors",
                  activeTab === industry.id ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900",
                )}
              >
                {industry.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{activeIndustry?.title}</h2>
              <p className="text-gray-600 text-lg mb-6">{activeIndustry?.description}</p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn More
              </Link>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <Image
                src={activeIndustry?.image || "/placeholder.svg"}
                alt={activeIndustry?.title || ""}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

