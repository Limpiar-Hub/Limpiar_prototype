"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { setCompanyInfo } from "@/redux/features/onboarding/onboardingSlice";

const companyInfoSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  role: z.string().min(1, "Please select a role"),
  propertiesManaged: z.string().min(1, "Please select number of properties"),
});

type CompanyInfoFormData = z.infer<typeof companyInfoSchema>;

export default function CompanyInfoForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CompanyInfoFormData>({
    resolver: zodResolver(companyInfoSchema),
    defaultValues: {
      companyName: "",
      role: "",
      propertiesManaged: "",
    },
  });

  const onSubmit = async (data: CompanyInfoFormData) => {
    // Save to Redux store
    dispatch(
      setCompanyInfo({
        companyName: data.companyName,
        role: data.role,
        propertiesManaged: data.propertiesManaged,
      })
    );
  };

  return (
    <div className="max-w-md mx-auto w-full lg:w-[25rem] lg:ml-20">
      <h1 className="text-2xl font-bold mb-6">Company Information</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Company Name */}
        <div className="space-y-1">
          <label htmlFor="companyName" className="block text-sm font-medium">
            Company Name<span className="text-red-500">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            placeholder="Marvellous Amusan"
            className={`w-full p-3 border ${
              errors.companyName ? "border-red-500" : "border-gray-200"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7eea] focus:border-transparent`}
            {...register("companyName")}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div className="space-y-1">
          <label htmlFor="role" className="block text-sm font-medium">
            Role<span className="text-red-500">*</span>
          </label>
          <select
            id="role"
            className={`w-full p-3 border ${
              errors.role ? "border-red-500" : "border-gray-200"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7eea] focus:border-transparent appearance-none bg-white`}
            {...register("role")}
            defaultValue=""
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="owner">Owner</option>
            <option value="manager">Manager</option>
            <option value="administrator">Administrator</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Properties Managed */}
        <div className="space-y-1">
          <label
            htmlFor="propertiesManaged"
            className="block text-sm font-medium"
          >
            Number of Properties Managed<span className="text-red-500">*</span>
          </label>
          <select
            id="propertiesManaged"
            className={`w-full p-3 border ${
              errors.propertiesManaged ? "border-red-500" : "border-gray-200"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7eea] focus:border-transparent appearance-none bg-white`}
            {...register("propertiesManaged")}
            defaultValue=""
          >
            <option value="" disabled>
              Select Number of Properties
            </option>
            <option value="1-5">1-5 properties</option>
            <option value="6-10">6-10 properties</option>
            <option value="11-20">11-20 properties</option>
            <option value="21+">21+ properties</option>
          </select>
          {errors.propertiesManaged && (
            <p className="text-red-500 text-sm mt-1">
              {errors.propertiesManaged.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#2e7eea] text-white py-3 px-4 rounded-md hover:bg-[#2569d0] transition-colors font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Next"}
        </button>
      </form>
    </div>
  );
}
