import { useEffect } from "react";
import { styled } from "styled-components";
import { Button } from "shared/ui/button";
import { CloseIcon, RejectedIcon } from "shared/ui/icons";
import { Portal } from "shared/ui/portal";

type FormRejectedMessageProps = {
  onClose?: () => void;
};

export const FormRejectedMessage = ({ onClose }: FormRejectedMessageProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const onButtonClick = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <Portal>
      {" "}
      <ModalWrapper>
        <ModalContent>
          <Container>
            <Text>Ошибка</Text>
            <Button variant="icon-only" onClick={onButtonClick}>
              <CloseIcon />
            </Button>
          </Container>

          <Wrapper>
            <RejectedIcon />
          </Wrapper>
          <ButtonWrapper>
            <Button onClick={onButtonClick}>Закрыть</Button>
          </ButtonWrapper>
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;

  @media (min-width: ${(p) => p.theme.media.sm}px) {
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 48px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
