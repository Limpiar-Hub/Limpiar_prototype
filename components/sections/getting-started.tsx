import { Check } from "lucide-react";
import Image from "next/image";

const GettingStarted = () => {


  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/lady-cleaner.png"
            alt="Cleaning team at work"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Get started with Limpiar in three easy steps</h2>
          <div className="mt-6 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 font-bold">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Book a Call</h3>
                <p className="text-gray-600">Schedule a consultation to discuss your property’s unique needs.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 font-bold">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Service Selection</h3>
                <p className="text-gray-600">Choose the services that best suit your property and budget.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 font-bold">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Account Setup & Team Onboarding</h3>
                <p className="text-gray-600">Set up your account and introduce our vetted team to your property.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 text-white text-center p-[6rem] mt-16 rounded-lg max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold">Join the Movement to Seamless Property Care with Limpiar.</h3>
        <p className="text-lg mt-2">The shift to smart, always-on property care is here and it’s happening with Limpiar. Join property managers everywhere who are redefining cleanliness and efficiency.</p>
        <button className="mt-4 px-6 py-3 bg-white text-blue-600 rounded-md font-semibold">Get Started</button>
      </div>
    </section>
  );
};

export default GettingStarted;
