import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Input } from "shared/ui/input";

export const PersonalInfoPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      {" "}
      <h1>Personal Info Page</h1>
      <button
        style={{ marginBottom: "10px" }}
        onClick={() => navigate("/user-form")}
      >
        Next
      </button>
      <Input label="Email" type="text" placeholder="Email" />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
`;
