"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-center bg-cover bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/09fae11e99a64dfdeffb44dfd091dd38bede69a2')]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#055FAA] opacity-60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/80 via-white/40 to-transparent opacity-70"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-10 md:px-20 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-[68px] font-bold text-[#002A4C] tracking-wider md:leading-tight mb-4">
            Sustainable
            <br />
            Solutions
            <br />
            for the modern
            <br />
            business
          </h1>
          <p className="text-lg md:text-xl text-[#454953] mb-8 tracking-wider">
            Professional services that care for your space and the <br /> environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <input
              type="email"
              placeholder="Enter your business email"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-[#0082ED] hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-[8px] transition-colors whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
