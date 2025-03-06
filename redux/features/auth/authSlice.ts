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

interface AuthState {
  currentStep: number
  otpVerified: boolean
  personalInfo: PersonalInfo
  companyInfo: CompanyInfo
  propertyDetails: PropertyDetails
}

const initialState: AuthState = {
  currentStep: 1,
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = action.payload
    },
    verifyOtp: (state, action: PayloadAction<boolean>) => {
      state.otpVerified = action.payload
      if (action.payload) {
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
    resetAuth: () => initialState,
  },
})

export const { setPersonalInfo, verifyOtp, setCompanyInfo, setPropertyDetails, setCurrentStep, resetAuth } =
  authSlice.actions

export default authSlice.reducer

