import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SexType, UserFormType, sendUserFormData } from "shared/api/cloud-api";

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
  status: "idle" | "pending" | "fulfilled" | "rejected";
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
  formStep: 1,
  status: "idle",
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
    setResetFormData(state) {
      state.formDataOne = formDataOne;
      state.formDataTwo = formDataTwo;
      state.formDataThree = formDataThree;
      state.formStep = 1;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUserForm.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(postUserForm.fulfilled, (state) => {
      state.status = "fulfilled";
    });
    builder.addCase(postUserForm.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export const { reducer: UserFormReducer, actions: UserFormActions } =
  UserFormSlice;

export const postUserForm = createAsyncThunk(
  "userForm/postUserForm",
  async (data: UserFormType) => {
    await sendUserFormData(data);
  }
);
