import { UseFormRegister } from "react-hook-form";
import { Input } from "shared/ui/input";

type NameFieldProps = {
  register: UseFormRegister<any>;
  errors?: string;
  label?: string;
  name: string;
  id?: string;
};

export const NameField = ({
  register,
  errors,
  name,
  label,
  id,
}: NameFieldProps) => {
  return (
    <Input
      id={id}
      type="text"
      label={label}
      {...register(name)}
      placeholder={`Введите ${label}`}
      error={errors}
      requiredTag
    />
  );
};
