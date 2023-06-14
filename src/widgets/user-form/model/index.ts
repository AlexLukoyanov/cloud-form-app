import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SexType, UserFormType } from "shared/api/cloud-api";

export type UserFormDataOneType = Pick<
  UserFormType,
  "nickname" | "name" | "surname" | "sex"
>;
export type UserFormDataTwoType = Pick<
  UserFormType,
  "advantages" | "radio" | "checkbox"
>;
export type UserFormDataThreeType = Pick<UserFormType, "about">;

interface UserFormState {
  formDataOne: UserFormDataOneType;
  formDataTwo: UserFormDataTwoType;
  formDataThree: UserFormDataThreeType;
  formStep: number;
}

const formDataOne = {
  nickname: "",
  name: "",
  surname: "",
  sex: SexType.man,
};

const formDataTwo = {
  advantages: [],
  radio: 1,
  checkbox: [],
};

const formDataThree = {
  about: "",
};

const initialState: UserFormState = {
  formDataOne: formDataOne,
  formDataTwo: formDataTwo,
  formDataThree: formDataThree,
  formStep: 3,
};

const UserFormSlice = createSlice({
  name: "UserForm",
  initialState,
  reducers: {
    setUpdateFormDataOne(state, action: PayloadAction<UserFormDataOneType>) {
      state.formDataOne = action.payload;
    },
    setUpdateFormDataTwo(state, action: PayloadAction<UserFormDataTwoType>) {
      state.formDataTwo = action.payload;
    },
    setUpdateFormDataThree(
      state,
      action: PayloadAction<UserFormDataThreeType>
    ) {
      state.formDataThree = action.payload;
    },
    setFormStep(state, action: PayloadAction<number>) {
      state.formStep = action.payload;
    },
    setAddAdvantage: (state) => {
      state.formDataTwo.advantages.push("");
    },
    setDeleteAdvantage: (state, action: PayloadAction<number>) => {
      state.formDataTwo.advantages.splice(action.payload, 1);
    },
    setChangeAdvantage: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      state.formDataTwo.advantages[action.payload.index] = action.payload.value;
    },
  },
});

export const { reducer: UserFormReducer, actions: UserFormActions } =
  UserFormSlice;
