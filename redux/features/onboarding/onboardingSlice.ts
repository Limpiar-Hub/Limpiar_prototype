import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface PersonalInfo {
  fullName: string
  email: string
  phoneNumber: string
  password: string
  role: string
}

export interface CompanyInfo {
  companyName: string
  role: string
  propertiesManaged: string
}

export interface PropertyDetails {
  propertyType: string
  commercialPropertyType?: string
  totalUnits?: string
  cleaningNeeds?: string
  cleaningFrequency?: string
}

interface OnboardingState {
  currentStep: number
  showOtpVerification: boolean
  otpVerified: boolean
  personalInfo: PersonalInfo
  companyInfo: CompanyInfo
  propertyDetails: PropertyDetails
}

const initialState: OnboardingState = {
  currentStep: 1,
  showOtpVerification: false,
  otpVerified: false,
  personalInfo: {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
  },
  companyInfo: {
    companyName: "",
    role: "",
    propertiesManaged: "",
  },
  propertyDetails: {
    propertyType: "commercial",
    commercialPropertyType: "",
    totalUnits: "",
    cleaningNeeds: "",
    cleaningFrequency: "",
  },
}

export const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = action.payload
      state.showOtpVerification = true
    },
    verifyOtp: (state, action: PayloadAction<boolean>) => {
      state.otpVerified = action.payload
      if (action.payload) {
        state.showOtpVerification = false
        state.currentStep = 2
      }
    },
    setCompanyInfo: (state, action: PayloadAction<CompanyInfo>) => {
      state.companyInfo = action.payload
      state.currentStep = 3
    },
    setPropertyDetails: (state, action: PayloadAction<PropertyDetails>) => {
      state.propertyDetails = action.payload
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload
    },
    resetOnboarding: () => initialState,
  },
})

export const { setPersonalInfo, verifyOtp, setCompanyInfo, setPropertyDetails, setCurrentStep, resetOnboarding } =
  onboardingSlice.actions

export default onboardingSlice.reducer

