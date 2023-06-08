import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { styled } from "styled-components";

type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> &
  LabelHTMLAttributes<HTMLLabelElement> & {
    label?: string;
    id?: string | number;
  };

export const CheckBox = ({ label, id, ...props }: CheckBoxProps) => {
  return (
    <Container>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};

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
      background-image: url("data:image/svg+xml,%3Csvg width='10' height='9' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.66147 7.87365C4.56698 7.99874 4.41929 8.07227 4.26252 8.07227H3.68243C3.54729 8.07227 3.41791 8.01757 3.32376 7.92063L0.504131 5.01762C0.315687 4.8236 0.315686 4.51491 0.504131 4.32089L0.975725 3.83535C1.1721 3.63317 1.49669 3.63317 1.69306 3.83535L3.49489 5.69046C3.70845 5.91034 4.06776 5.88806 4.25251 5.64349L8.15121 0.482651C8.32099 0.2579 8.64283 0.217688 8.86269 0.393752L9.38636 0.813089C9.59761 0.982258 9.63592 1.28881 9.47278 1.50476L4.66147 7.87365Z' fill='white'/%3E%3C/svg%3E");
      background-position: center;
      background-repeat: no-repeat;
      background-color: ${(p) => p.theme.colors.purple};
      border: 1.5px solid ${(p) => p.theme.colors.purple};
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
    border-radius: 4px;
    border: 1.5px solid ${(p) => p.theme.colors.alpha[24]};
    margin-right: 5px;
  }
`;
