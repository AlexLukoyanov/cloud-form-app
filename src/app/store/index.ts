import { configureStore } from "@reduxjs/toolkit";
import { PersonalInfoFormReducer } from "widgets/personal-info-form";

export const store = configureStore({
  reducer: {
    personalInfoForm: PersonalInfoFormReducer,
  },
});
