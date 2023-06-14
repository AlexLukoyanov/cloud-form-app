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
      <Container>
        <input type="radio" id={id} ref={ref} {...props} />
        <label htmlFor={id}>{label}</label>
      </Container>
    );
  }
);

const Container = styled.div`
  position: relative;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  label::before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.5px solid ${(p) => p.theme.colors.alpha[24]};
    margin-right: 5px;
  }

  input:checked {
    & + label::before {
      background-color: ${(p) => p.theme.colors.purple};
      border: 1.5px solid ${(p) => p.theme.colors.purple};
    }
  }

  input:checked {
    & + label::after {
      position: absolute;
      content: "";
      width: 9px;
      height: 9px;
      border-radius: 50%;
      left: 5px;
      background-color: ${(p) => p.theme.colors.white};
    }

    input:focus {
      & + label::before {
        box-shadow: 0 0 3px ${(p) => p.theme.colors.purple};
      }
    }
  }
`;
