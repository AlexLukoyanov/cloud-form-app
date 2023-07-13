import styled from "styled-components";
import { CheckIcon } from "../icons";

type ProgressBar = {
  progress?: number;
  stepCount?: number;
};

export const ProgressBar = ({ progress = 1, stepCount = 3 }: ProgressBar) => {
  const stepArray = Array(stepCount).fill(stepCount);

  return (
    <Container>
      <ProgressBarContainer>
        {stepArray.map((_, index) => (
          <>
            <Circle
              key={index}
              active={progress >= index + 1 ? "true" : "false"}
            >
              {progress >= index + 2 ? <CheckIcon /> : <Dote />}

              <Step active={progress >= index + 1 ? "true" : "false"}>
                {index + 1}
              </Step>
            </Circle>

            <Line
              active={progress >= index + 2 ? "true" : "false"}
              isLastStep={stepArray.length === index + 1}
            />
          </>
        ))}
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

const Line = styled.div<{ active: string; isLastStep?: boolean }>`
  display: ${(p) => (p.isLastStep ? "none" : "block")};
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
