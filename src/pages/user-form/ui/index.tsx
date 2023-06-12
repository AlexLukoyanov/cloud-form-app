import { styled } from "styled-components";
import { UserForm } from "widgets/user-form";

export const UserFormPage = () => {
  return (
    <PageContainer>
      <UserForm />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  max-width: 900px;
`;
