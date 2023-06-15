import { UseFormRegister } from "react-hook-form";
import { Textarea } from "shared/ui/textarea";

type AboutProps = {
  register: UseFormRegister<any>;
  errors?: string;
  value?: string;
};

export const About = ({ register, errors, value }: AboutProps) => {
  return (
    <>
      <Textarea
        label={"About"}
        id="field-about"
        placeholder={"Write about yourself... "}
        counter
        value={value}
        errors={errors}
        {...register("about")}
      />
    </>
  );
};
