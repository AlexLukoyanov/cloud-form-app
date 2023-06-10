import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PersonalInfoType = {
  email: string;
  phone: string;
};

interface PersonalInfoFormState {
  formData: PersonalInfoType;
}

const initialState: PersonalInfoFormState = {
  formData: {
    email: "lukalexdev@gmail.com",
    phone: "+7 (985) 181-13-28",
  },
};

const PersonalInfoFormSlice = createSlice({
  name: "PersonalInfoForm",
  initialState,
  reducers: {
    setUpdateFormData(state, action: PayloadAction<PersonalInfoType>) {
      state.formData = action.payload;
    },
  },
});

export const {
  reducer: PersonalInfoFormReducer,
  actions: PersonalInfoFormActions,
} = PersonalInfoFormSlice;
