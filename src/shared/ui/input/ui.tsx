import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { styled } from "styled-components";

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  LabelHTMLAttributes<HTMLLabelElement> & {
    label?: string;
    error?: string;
  };

export const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <Container>
      <Label>
        Text
        <InputField {...props} />
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
const InputField = styled.input<InputProps>`
  border: 1px solid ${(props) => props.theme.colors.alpha[16]};
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 12px;

  &:focus {
    border-color: ${(props) => props.theme.colors.purple};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.alpha[48]};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.alpha[4]};
  }
`;
const Error = styled.p`
  color: ${(props) => props.theme.colors.red};
`;
