import { useNavigate } from "react-router-dom";

export const UserFormPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <h1>User Form Page</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
