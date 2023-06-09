import { HTMLAttributes } from "react";
import styled from "styled-components";

type TextAreaProps = HTMLAttributes<HTMLTextAreaElement> & {
  maxLength?: number;
  label?: string;
  counter?: boolean;
  value?: string;
};

export const Textarea = ({
  maxLength = 200,
  label,
  value,
  counter,
  ...props
}: TextAreaProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledTextArea maxLength={maxLength} value={value} {...props} />
      {maxLength && counter && (
        <CharacterCount>
          {value?.replace(/\s+/g, "").length}/{maxLength}
        </CharacterCount>
      )}
    </Container>
  );
};

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
`;
