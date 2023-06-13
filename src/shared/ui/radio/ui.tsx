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
  display: flex;
  align-items: center;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  span {
    display: none;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    z-index: -1;
  }

  input:checked {
    & + label::before {
      background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2.00002' cy='1.9999' r='1.6' fill='white'/%3E%3C/svg%3E");
      background-color: ${(p) => p.theme.colors.purple};
      border: 1.5px solid ${(p) => p.theme.colors.purple};
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  input:focus {
    & + label::before {
      box-shadow: 0 0 3px ${(p) => p.theme.colors.purple};
    }
  }

  label::before {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.5px solid ${(p) => p.theme.colors.alpha[24]};
    margin-right: 5px;
  }
`;
