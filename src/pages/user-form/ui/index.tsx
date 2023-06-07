import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const UserFormPage = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      {" "}
      <h1>User Form Page</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
`;
