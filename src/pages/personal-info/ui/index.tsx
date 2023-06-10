import { styled } from "styled-components";
import { PersonalInfoForm } from "widgets/personal-info-form";

export const PersonalInfoPage = () => {
  return (
    <PageContainer>
      <PersonalInfoForm />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
`;
