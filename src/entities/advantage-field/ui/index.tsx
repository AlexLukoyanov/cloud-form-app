import { Control, Controller } from "react-hook-form";
import { styled } from "styled-components";
import { Input } from "shared/ui/input";

type AdvantageFieldProps = {
  control: Control<any>;
  errors?: string;
  index: number;
};

export const AdvantageField = ({
  control,
  errors,
  index,
}: AdvantageFieldProps) => {
  return (
    <Container>
      <Controller
        render={({ field }) => (
          <Input
            id={`field-advatages-${index}`}
            {...field}
            placeholder="Write advantage"
          />
        )}
        name={`advantages.${index}`}
        control={control}
        rules={{ required: true }}
      />
      <Error>{errors}</Error>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Error = styled.p`
  color: ${(p) => p.theme.colors.red};
  margin-top: 8px;
`;
