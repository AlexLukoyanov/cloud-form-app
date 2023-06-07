import { useNavigate } from "react-router-dom";

export const PersonalInfoPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <h1>Personal Info Page</h1>
      <button onClick={() => navigate("/user-form")}>Next</button>
    </div>
  );
};
