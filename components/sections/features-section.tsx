
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FeaturesSection() {
  const features = [
    {
      badge: "Transparency",
      title: "Empower Transparency with Our Accountability Dashboard",
      description:
        "Track progress, monitor performance, and ensure every job meets your standards. Our accountability dashboard gives you full transparency, so you always know who's on-site and what's getting done.",
      image: "/bookings.png",
      imageAlt: "Dashboard interface showing bookings and performance metrics",
      imagePosition: "right",
    },
    {
      badge: "Efficiency",
      title: "Smart Scheduling Assistant",
      description:
        "Effortlessly create, adjust, and manage requests with our intuitive scheduling assistant. Select dates, times, and services in just a few clicks, ensuring every request is timely and tailored to your needs.",
      image: "/four-image.png",
      imageAlt: "Scheduling interface showing calendar and booking options",
      imagePosition: "right",
    },
    {
      badge: "Analytics",
      title: "Data-Driven Insights Dashboard",
      description:
        "Make informed decisions with comprehensive analytics. Our powerful reporting tools provide detailed insights into service performance, customer satisfaction, and operational efficiency.",
      image: "/cleaning-card.png",
      imageAlt: "Analytics dashboard showing charts and metrics",
      imagePosition: "left",
    },
    {
      badge: "Communication",
      title: "Real-Time Communication Hub",
      description:
        "Stay connected with your team and clients through our integrated communication platform. Instant updates, automated notifications, and seamless message threading keep everyone in sync.",
      image: "/property.png",
      imageAlt: "Communication interface showing message threads",
      imagePosition: "right",
    },
    {
      badge: "Integration",
      title: "Seamless System Integration",
      description:
        "Connect your existing tools and workflows with our flexible integration capabilities. From property management systems to accounting software, we ensure smooth data flow across your tech stack.",
      image: "/four-image.png",
      imageAlt: "Integration dashboard showing connected systems",
      imagePosition: "left",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      {features.map((feature, index) => (
        <div key={index} className="max-w-7xl mx-auto px-4 md:px-6 mb-20 md:mb-32 last:mb-0">
          <div
            className={`grid gap-12 lg:gap-16 items-center ${
              feature.imagePosition === "right" ? "lg:grid-cols-2" : "lg:grid-cols-2 lg:flex-row-reverse"
            }`}
          >
            <div className={`max-w-xl ${feature.imagePosition === "right" ? "lg:pr-8" : "lg:pl-8"}`}>
              <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100 mb-6">
                {feature.badge}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">{feature.title}</h2>
              <p className="text-gray-600 text-lg mb-8">{feature.description}</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>
            <div className="lg:w-[640px]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}