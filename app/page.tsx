"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoContainer from "@/components/sections/brands";
import ServicesSection from "@/components/sections/services-section";
import Footer from "@/components/sections/footer";
import LimpiarAdvantage from "@/components/sections/limpiar-advantage";
import GettingStarted from "@/components/sections/getting-started";
import FeaturesSection from "@/components/sections/features-section";
import IndustriesSection from "@/components/sections/industries-section";
import TestimonialSection from "@/components/sections/testimonial-section";
import StatsSection from "@/components/sections/stats-section";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ReviewSection from "@/components/sections/review-section";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative">
        <Header />
        <Hero />
      </div>

      <LogoContainer />

      <div className="min-h-screen bg-white">
        <IndustriesSection />
      </div>

      <StatsSection />

      <div className="min-h-screen bg-white">
        <FeaturesSection />
      </div>

      <LimpiarAdvantage />

      <div className="min-h-screen bg-white">
        <ServicesSection />
      </div>
      <ReviewSection />
      {/* 
      <TestimonialSection /> */}

      <GettingStarted />

      <Footer />
    </>
  );
}
