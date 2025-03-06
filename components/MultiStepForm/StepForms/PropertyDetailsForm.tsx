"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { setPropertyDetails } from "@/redux/features/onboarding/onboardingSlice";

const propertyDetailsSchema = z.object({
  propertyType: z.string(),
  commercialPropertyType: z.string().optional(),
  totalUnits: z.string().optional(),
  cleaningNeeds: z.string().optional(),
  cleaningFrequency: z.string().optional(),
});

type PropertyDetailsFormData = z.infer<typeof propertyDetailsSchema>;

export default function PropertyDetailsForm() {
  const dispatch = useDispatch();
  const [selectedPropertyType, setSelectedPropertyType] =
    useState("commercial");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PropertyDetailsFormData>({
    resolver: zodResolver(propertyDetailsSchema),
    defaultValues: {
      propertyType: "commercial",
      commercialPropertyType: "",
      totalUnits: "",
      cleaningNeeds: "",
      cleaningFrequency: "",
    },
  });

  const onSubmit = async (data: PropertyDetailsFormData) => {
    // Save to Redux store
    dispatch(
      setPropertyDetails({
        propertyType: data.propertyType,
        commercialPropertyType: data.commercialPropertyType,
        totalUnits: data.totalUnits,
        cleaningNeeds: data.cleaningNeeds,
        cleaningFrequency: data.cleaningFrequency,
      })
    );

    // Navigate to dashboard or success page
    alert("Setup complete! Redirecting to dashboard...");
  };

  const handlePropertyTypeChange = (type: string) => {
    setSelectedPropertyType(type);
  };

  return (
    <div className=" mx-auto w-full  xl:pr-28 xl:-ml-20 ">
      <h1 className="text-2xl font-bold mb-1">Property Details</h1>
      <p className="text-gray-500 mb-6">(Optional)</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Property Type Selection */}
        <div className="space-y-4">
          <div className="border border-blue-100 rounded-lg p-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="commercial"
                {...register("propertyType")}
                checked={selectedPropertyType === "commercial"}
                onChange={() => handlePropertyTypeChange("commercial")}
                className="h-4 w-4 text-[#2e7eea]"
              />
              <span>Commercial Property</span>
            </label>

            {selectedPropertyType === "commercial" && (
              <div className="mt-4 space-y-4">
                {/* Commercial Property Type */}
                <div className="space-y-1">
                  <label
                    htmlFor="commercialPropertyType"
                    className="block text-sm font-medium"
                  >
                    Type of Commercial Property
                  </label>
                  <select
                    id="commercialPropertyType"
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7eea] focus:border-transparent appearance-none bg-white"
                    {...register("commercialPropertyType")}
                  >
                    <option value="" disabled selected>
                      Select Commercial Property
                    </option>
                    <option value="office">Office Building</option>
                    <option value="retail">Retail Space</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="hotel">Hotel</option>
                    <option value="medical">Medical Facility</option>
                  </select>
                </div>

                {/* Total Units/Spaces */}
                <div className="space-y-1">
                  <label
                    htmlFor="totalUnits"
                    className="block text-sm font-medium"
                  >
                    Total Units/Spaces<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="totalUnits"
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7eea] focus:border-transparent appearance-none bg-white"
                    {...register("totalUnits")}
                  >
                    <option value="" disabled selected>
                      input units/spaces
                    </option>
                    <option value="1-5">1-5 units</option>
                    <option value="6-10">6-10 units</option>
                    <option value="11-20">11-20 units</option>
                    <option value="21+">21+ units</option>
                  </select>
                </div>

                {/* Cleaning Needs */}
                <div className="space-y-1">
                  <label
                    htmlFor="cleaningNeeds"
                    className="block text-sm font-medium"
                  >
                    Cleaning Needs<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="cleaningNeeds"
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7eea] focus:border-transparent appearance-none bg-white"
                    {...register("cleaningNeeds")}
                  >
                    <option value="" disabled selected>
                      Select Cleaning Needs
                    </option>
                    <option value="basic">Basic Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="specialized">Specialized Cleaning</option>
                    <option value="maintenance">Regular Maintenance</option>
                  </select>
                </div>

                {/* Frequency of Cleaning */}
                <div className="space-y-1">
                  <label
                    htmlFor="cleaningFrequency"
                    className="block text-sm font-medium"
                  >
                    Frequency of Cleaning<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="cleaningFrequency"
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7eea] focus:border-transparent appearance-none bg-white"
                    {...register("cleaningFrequency")}
                  >
                    <option value="" disabled selected>
                      Select Frequency
                    </option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="industrial"
                {...register("propertyType")}
                checked={selectedPropertyType === "industrial"}
                onChange={() => handlePropertyTypeChange("industrial")}
                className="h-4 w-4 text-[#2e7eea]"
              />
              <span>Industrial Property</span>
            </label>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="public"
                {...register("propertyType")}
                checked={selectedPropertyType === "public"}
                onChange={() => handlePropertyTypeChange("public")}
                className="h-4 w-4 text-[#2e7eea]"
              />
              <span>Public & Industrial Property</span>
            </label>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="specialized"
                {...register("propertyType")}
                checked={selectedPropertyType === "specialized"}
                onChange={() => handlePropertyTypeChange("specialized")}
                className="h-4 w-4 text-[#2e7eea]"
              />
              <span>Specialized Property</span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="w-full bg-[#2e7eea] text-white py-3 px-4 rounded-md hover:bg-[#2569d0] transition-colors font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Save & Complete"}
          </button>

          <button
            type="button"
            className="w-full py-3 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={() => alert("Skipped! Redirecting to dashboard...")}
          >
            Skip
          </button>
        </div>
      </form>
    </div>
  );
}
