import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAppSelector } from "shared/lib/hooks";
import { ProgressBar } from "shared/ui/progress-bar";
import { FormStepOne } from "../../form-step-one";
import { FormStepThree } from "../../form-step-three";
import { FormStepTwo } from "../../form-step-two";

export const UserForm = () => {
  const navigate = useNavigate();
  const formStep = useAppSelector((state) => state.userForm.formStep);

  const activeViewFormHandler = (step: number) => {
    switch (step) {
      case 1:
        return <FormStepOne />;
      case 2:
        return <FormStepTwo />;
      case 3:
        return <FormStepThree />;
    }
  };
  return (
    <Container>
      <ProgressWrapper>
        <ProgressBar progress={formStep} />
      </ProgressWrapper>
      <div>{activeViewFormHandler(formStep)}</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  padding: 25px;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: 12px;
  @media (min-width: ${(p) => p.theme.media.sm}px) {
    padding: 62px 110px;
  }
`;

const ProgressWrapper = styled.div`
  margin-bottom: 30px;

  @media (min-width: ${(p) => p.theme.media.sm}px) {
    margin-bottom: 67px;
  }
`;
