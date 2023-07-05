import * as yup from "yup";

const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const phoneRegExp =
  /^(\+7|8)\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/;

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegExp, "Неверный формат email-адреса")
    .required("Поле Email обязательно для заполнения"),
  phone: yup
    .string()
    .matches(
      phoneRegExp,
      "Номер телефона не соответствует формату +7 (900) 000-00-00"
    )
    .required('Поле "Номер телефона" обязательно для заполнения'),
});
