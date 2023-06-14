import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAppDispatch } from "shared/lib/hooks";
import { Button } from "shared/ui/button";
import { FulfilledIcon } from "shared/ui/icons";
import { Portal } from "shared/ui/portal";

type FormSuccessMessageProps = {
  onReset?: () => void;
};

export const FormSuccessMessage = ({ onReset }: FormSuccessMessageProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const onButtonClick = () => {
    if (onReset) {
      onReset();
    }
    navigate("/");
  };
  return (
    <Portal>
      {" "}
      <ModalWrapper>
        <ModalContent>
          <Text>Форма успешно отправлена</Text>
          <Container>
            <FulfilledIcon />
          </Container>
          <Button onClick={onButtonClick}>На главную</Button>
        </ModalContent>
      </ModalWrapper>
    </Portal>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.alpha[16]};
  z-index: 1000;
  top: 0;
  overflow: auto;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;

  @media (min-width: ${(p) => p.theme.media.sm}px) {
    width: 460px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 50px;

  @media (min-width: ${(p) => p.theme.media.sm}px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  margin-bottom: 48px;
`;
