import InputMask from "@mona-health/react-input-mask";
import {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  Ref,
  forwardRef,
} from "react";

import { styled } from "styled-components";

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  LabelHTMLAttributes<HTMLLabelElement> & {
    label?: string;
    error?: string;
    mask?: boolean;
    requiredTag?: boolean;
  };

export const Input = forwardRef(
  (
    { label, error, mask, requiredTag, ...props }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <>
        {mask ? (
          <Container>
            <Label>
              <Wrapper>
                {label} {requiredTag && <Star>*</Star>}
              </Wrapper>
              <StyledInputMask
                mask="+7 (999) 999 99-99"
                error={error}
                ref={ref}
                {...props}
              />
            </Label>
            {error ? <Error>{error}</Error> : null}
          </Container>
        ) : (
          <Container>
            <Label>
              {label && (
                <Wrapper>
                  {label} {requiredTag && <Star>*</Star>}
                </Wrapper>
              )}

              <InputField {...props} ref={ref} error={error} />
            </Label>
            {error ? <Error>{error}</Error> : null}
          </Container>
        )}
      </>
    );
  }
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
const InputField = styled.input<Pick<InputProps, "error">>`
  outline: none;
  border: 1px solid
    ${(p) => (p.error ? p.theme.colors.red : p.theme.colors.alpha[16])};
  border-radius: 4px;
  margin-top: 8px;

  padding: 12px;
  background-color: ${(p) => p.theme.colors.white};

  &:focus {
    border-color: ${(p) =>
      p.error ? p.theme.colors.red : p.theme.colors.purple};
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
  margin-top: 8px;
`;

const StyledInputMask = styled(InputMask)<Pick<InputProps, "error">>`
  border: 1px solid
    ${(p) => (p.error ? p.theme.colors.red : p.theme.colors.alpha[16])};
  border-radius: 4px;
  margin-top: 8px;

  padding: 12px;
  background-color: ${(p) => p.theme.colors.white};

  &:focus {
    border-color: ${(p) =>
      p.error ? p.theme.colors.red : p.theme.colors.purple};
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.alpha[48]};
  }

  &:disabled {
    opacity: 0.3;
  }
`;

const Star = styled.span`
  color: ${(p) => p.theme.colors.red};
  margin-left: 3px;
`;

const Wrapper = styled.p`
  display: flex;
`;
