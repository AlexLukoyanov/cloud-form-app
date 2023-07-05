import * as yup from "yup";

export const formStepOneSchema = yup.object().shape({
  nickname: yup
    .string()
    .required("Поле Nickname обязательно для заполнения")
    .max(30, "Поле должно быть не более 50 символов")
    .matches(
      /^[а-яА-Яa-zA-Z]{1,30}$/,
      "Поле может содержать буквы и цифры и должно быть не более 30 символов"
    ),
  name: yup
    .string()
    .required("Поле Name обязательно для заполнения")
    .max(50, "Поле должно быть не более 50 символов")
    .matches(/^[а-яА-Яa-zA-Z]+$/, "Поле может содержать только буквы"),
  surname: yup
    .string()
    .required("Поле Surname обязательно для заполнения")
    .max(50, "Поле должно быть не более 50 символов")
    .matches(/^[а-яА-Яa-zA-Z]+$/, "Поле может содержать только буквы"),
  sex: yup.string().required("Выберите пол"),
});
