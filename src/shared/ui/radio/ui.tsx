import {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  Ref,
  forwardRef,
} from "react";
import { styled } from "styled-components";

type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> &
  LabelHTMLAttributes<HTMLLabelElement> & {
    label?: string;
    id?: string | number;
  };

export const RadioButton = forwardRef(
  ({ label, id, ...props }: RadioButtonProps, ref: Ref<HTMLInputElement>) => {
    return (
      <Label htmlFor={id}>
        <InputField type="radio" id={id} ref={ref} {...props} />
        <Span />
        {label}
      </Label>
    );
  }
);

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  position: absolute;
  z-index: -3;
  opacity: 0;

  &:checked + span {
    background-color: ${(p) => p.theme.colors.purple};
    box-shadow: 0 0 0 1.5px ${(p) => p.theme.colors.purple};
  }

  &:focus + span {
    box-shadow: 0 0 0 1.5px ${(p) => p.theme.colors.purple},
      0 0 8px ${(p) => p.theme.colors.purple};
  }

  &:checked + span::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: ${(p) => p.theme.colors.white};
    border-radius: 50%;
  }
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  box-shadow: 0 0 0 1.5px ${(p) => p.theme.colors.alpha[24]};
  border-radius: 50%;
  cursor: pointer;
`;
