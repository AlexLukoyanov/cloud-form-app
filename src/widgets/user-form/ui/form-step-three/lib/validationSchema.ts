import * as yup from "yup";

export const formStepThreeSchema = yup.object().shape({
  about: yup
    .string()
    .max(
      5,
      'Максимальная длина поля "About" 200 символов, счётчик показывает количество символов без пробелов'
    )
    .required('Поле "About" обязательное'),
});
