import { HTMLAttributes, Ref, forwardRef } from "react";
import styled from "styled-components";

type TextAreaProps = HTMLAttributes<HTMLTextAreaElement> & {
  maxLength?: number;
  label?: string;
  counter?: boolean;
  value?: string;
  errors?: string;
  id?: string;
};

export const Textarea = forwardRef(
  (
    {
      maxLength = 200,
      id,
      label,
      value,
      counter,
      errors,
      ...props
    }: TextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    return (
      <Container>
        <Label>{label}</Label>
        <StyledTextArea
          id={id}
          rows={4}
          maxLength={maxLength}
          ref={ref}
          {...props}
        />
        <Wrapper>
          <Error>{errors}</Error>
          {maxLength && counter && (
            <CharacterCount>
              {value?.replace(/\s+/g, "").length}/{maxLength}
            </CharacterCount>
          )}
        </Wrapper>
      </Container>
    );
  }
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const StyledTextArea = styled.textarea`
  border: 1px solid ${(p) => p.theme.colors.alpha[16]};
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 8px;
  width: 100%;
  resize: vertical;

  &:focus {
    border-color: ${(p) => p.theme.colors.purple};
    outline: none;
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.alpha[48]};
  }
`;

const CharacterCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(p) => p.theme.colors.alpha[48]};
  font-size: 12px;
  margin-left: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Error = styled.p`
  color: ${(p) => p.theme.colors.red};
`;
