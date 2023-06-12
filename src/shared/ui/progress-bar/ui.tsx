import styled from "styled-components";
import { CheckIcon } from "../icons";

type ProgressBar = {
  progress?: number;
};

export const ProgressBar = ({ progress = 1 }: ProgressBar) => {
  return (
    <Container>
      <ProgressBarContainer>
        <Circle active={progress >= 1 ? "true" : "false"}>
          {progress >= 2 ? <CheckIcon /> : <Dote />}

          <Step active={progress >= 1 ? "true" : "false"}>1</Step>
        </Circle>

        <Line active={progress >= 2 ? "true" : "false"} />
        <Circle active={progress >= 2 ? "true" : "false"}>
          {progress >= 3 ? <CheckIcon /> : <Dote />}{" "}
          <Step active={progress >= 2 ? "true" : "false"}>2</Step>
        </Circle>
        <Line active={progress >= 3 ? "true" : "false"} />
        <Circle active={progress >= 3 ? "true" : "false"}>
          {progress >= 3 && <Dote />}{" "}
          <Step active={progress >= 3 ? "true" : "false"}>3</Step>
        </Circle>
      </ProgressBarContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 48px;
`;

const ProgressBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 10px;
  border-radius: 5px;
`;

const Circle = styled.div<{ active: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(p) =>
    p.active === "true"
      ? p.theme.colors.purple
      : p.theme.colors.text.tertiaryG350};
`;

const Line = styled.div<{ active: string }>`
  flex: 1;
  height: 8px;
  transform: scale(1.01);
  background-color: ${(p) =>
    p.active === "true" ? p.theme.colors.purple : p.theme.colors.alpha[8]};
`;

const Dote = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.white};
`;

const Step = styled.span<{ active: string }>`
  position: absolute;
  top: 25px;
  color: ${(p) =>
    p.active === "true"
      ? p.theme.colors.purple
      : p.theme.colors.text.secondaryG600};
`;
