import { configureStore } from "@reduxjs/toolkit";
import { PersonalInfoFormReducer } from "widgets/personal-info-form";
import { UserFormReducer } from "widgets/user-form/";

export const store = configureStore({
  reducer: {
    personalInfoForm: PersonalInfoFormReducer,
    userForm: UserFormReducer,
  },
});
