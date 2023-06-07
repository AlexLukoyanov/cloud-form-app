import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const PersonalInfoPage = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      {" "}
      <h1>Personal Info Page</h1>
      <button onClick={() => navigate("/user-form")}>Next</button>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
`;
