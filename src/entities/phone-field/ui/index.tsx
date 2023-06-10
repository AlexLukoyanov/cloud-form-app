import { UseFormRegister } from "react-hook-form";
import { Input } from "shared/ui/input";

type PhoneFieldProps = {
  register: UseFormRegister<any>;
  errors?: string;
  label?: string;
  name?: string;
};

export const PhoneField = ({
  register,
  errors,
  label = "Номер телефона",
  name = "phone",
}: PhoneFieldProps) => {
  return (
    <Input
      mask
      id="phone"
      type="text"
      label={label}
      {...register(name)}
      placeholder="Введите номер телефона"
      error={errors}
    />
  );
};
