import { UseFormRegister } from "react-hook-form";
import { Input } from "shared/ui/input";

type EmailFieldProps = {
  register: UseFormRegister<any>;
  errors?: string;
  label?: string;
  name?: string;
};

export const EmailField = ({
  register,
  errors,
  name = "email",
  label = "Email",
}: EmailFieldProps) => {
  return (
    <Input
      id="email"
      type="email"
      label={label}
      {...register(name)}
      placeholder="Введите email"
      error={errors}
    />
  );
};
