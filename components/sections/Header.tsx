"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="relative z-10 pt-6 px-4 xl:px-[10rem]">
        <nav className="max-w-[1400px] mx-auto bg-white rounded-[16px] px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-32">
                <Image
                  src="/limpiar.png"
                  alt="Limpiar"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/common-spaces" className="text-gray-600 hover:text-gray-900 text-sm">Common Spaces</Link>
            <Link href="/limpiador" className="text-gray-600 hover:text-gray-900 text-sm">Limpiador</Link>
            <Link href="/waste-management" className="text-gray-600 hover:text-gray-900 text-sm">Waste Management</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About Us</Link>
            <Link href="/social-impact" className="text-gray-600 hover:text-gray-900 text-sm">Social Impact</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm">Blog</Link>
            <Link href='/signup'>            <Button className="bg-[#0082ED] hover:bg-blue-600 text-white rounded-[8px] px-6">Get Started</Button></Link>

          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" className="text-gray-600" onClick={toggleMenu}>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white rounded-[16px] mt-2 p-4 space-y-4">
            <Link href="/common-spaces" className="block text-gray-600 hover:text-gray-900 text-sm">Common Spaces</Link>
            <Link href="/limpiador" className="block text-gray-600 hover:text-gray-900 text-sm">Limpiador</Link>
            <Link href="/waste-management" className="block text-gray-600 hover:text-gray-900 text-sm">Waste Management</Link>
            <Link href="/about" className="block text-gray-600 hover:text-gray-900 text-sm">About Us</Link>
            <Link href="/social-impact" className="block text-gray-600 hover:text-gray-900 text-sm">Social Impact</Link>
            <Link href="/blog" className="block text-gray-600 hover:text-gray-900 text-sm">Blog</Link>
            <Button className="bg-[#0082ED] hover:bg-blue-600 text-white rounded-[8px] px-6 w-full">Get Started</Button>
          </div>
        )}
      </div>
    </div>
  );
}
