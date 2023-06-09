import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { styled } from "styled-components";

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  LabelHTMLAttributes<HTMLLabelElement> & {
    label?: string;
    error?: string;
    value?: string;
  };

export const Input = ({ label, error, value, ...props }: InputProps) => {
  return (
    <Container>
      <Label>
        {label}
        <InputField value={value} {...props} />
      </Label>
      {error ? <Error>{error}</Error> : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
const InputField = styled.input<Pick<InputProps, "value">>`
  border: 1px solid ${(p) => p.theme.colors.alpha[16]};
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 12px;
  color: ${(p) => p.theme.colors.alpha[48]};
  background-color: ${(p) =>
    p.value?.length ? p.theme.colors.alpha[4] : p.theme.colors.white};

  &:focus {
    border-color: ${(p) => p.theme.colors.purple};
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.alpha[48]};
  }

  &:disabled {
    opacity: 0.3;
  }
`;
const Error = styled.p`
  color: ${(p) => p.theme.colors.red};
`;
