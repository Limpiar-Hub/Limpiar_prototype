


'use client';
import Image from "next/image";
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          {/* <Image src="/limpiar.png"
           alt="Limpiar Logo" 
           className="object-cover" 
           fill
           /> */}
          <p className="mt-4 text-gray-400">
            Professional services that care for your space and the environment.
          </p>
        </div>
        
        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-4 flex items-center text-gray-400"><Phone size={16} className="mr-2" /> (833) 546-7427</p>
          <p className="mt-2 flex items-center text-gray-400"><Mail size={16} className="mr-2" /> hello@limpiar.online</p>
          
          {/* Subscription Form */}
          <h3 className="mt-6 text-lg font-semibold">Get Monthly Updates</h3>
          <div className="mt-4 flex items-center">
            <input 
              type="email" 
              placeholder="Enter your business email" 
              className="w-full bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-500 p-2 rounded-r-md">
              ➝
            </button>
          </div>
          <div className="flex items-center mt-2">
            <input type="checkbox" id="marketing" className="mr-2" />
            <label htmlFor="marketing" className="text-gray-400">I agree to receive marketing emails</label>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-gray-400 text-sm flex justify-between flex-col md:flex-row">
        <p>© 2025 Limpiar. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
