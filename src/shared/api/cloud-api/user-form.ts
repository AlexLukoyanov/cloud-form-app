import { AxiosPromise } from "axios";
import { apiInstant } from "./base";
import { UserFormType } from "./models";

const BASE_URL = "content/v1/bootcamp/frontend";

export const sendUserFormData = (data: UserFormType): AxiosPromise => {
  return apiInstant.post(BASE_URL, data);
};
