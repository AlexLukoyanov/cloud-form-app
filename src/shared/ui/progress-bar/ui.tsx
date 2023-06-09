import styled from "styled-components";
import { CheckIcon } from "../icons";

type ProgressBar = {
  active?: boolean;
  progress?: number;
};

export const ProgressBar = ({ progress = 1 }: ProgressBar) => {
  return (
    <ProgressBarContainer>
      <Circle active={progress >= 1}>
        {progress >= 2 ? <CheckIcon /> : <Dote />}

        <Step active={progress >= 1}>1</Step>
      </Circle>

      <Line active={progress >= 2} />
      <Circle active={progress >= 2}>
        {progress >= 3 ? <CheckIcon /> : <Dote />}{" "}
        <Step active={progress >= 2}>2</Step>
      </Circle>
      <Line active={progress >= 3} />
      <Circle active={progress >= 3}>
        {progress >= 3 && <Dote />} <Step active={progress >= 3}>3</Step>
      </Circle>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div<ProgressBar>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 10px;
  border-radius: 5px;
`;

const Circle = styled.div<ProgressBar>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(p) =>
    p.active ? p.theme.colors.purple : p.theme.colors.text.tertiaryG350};
`;

const Line = styled.div<ProgressBar>`
  z-index: -1;
  flex: 1;
  height: 8px;
  transform: scale(1.01);
  background-color: ${(p) =>
    p.active ? p.theme.colors.purple : p.theme.colors.alpha[8]};
`;

const Dote = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.white};
`;

const Step = styled.span<ProgressBar>`
  position: absolute;
  top: 25px;
  color: ${(p) =>
    p.active ? p.theme.colors.purple : p.theme.colors.text.secondaryG600};
`;
