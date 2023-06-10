import { styled } from "styled-components";

type PersonalNameProps = {
  name: string;
  surname: string;
};

export const PersonalUserName = ({ name, surname }: PersonalNameProps) => {
  return (
    <Text>
      {name} {surname}
    </Text>
  );
};

const Text = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
`;
