import * as yup from "yup";

export const formStepTwoSchema = yup.object().shape({
  advantages: yup
    .array()
    .of(yup.string().required("Поле Advantage не должно быть пустым"))
    .min(1, "Advantages обязательно для заполнения"),

  checkbox: yup
    .array()
    .required("Поле Checkbox обязательно для заполнения")
    .min(1, "Выберите один или несколько элементов из спика"),
  radio: yup.number().required("Поле Radio обязательно для заполнения"),
});
