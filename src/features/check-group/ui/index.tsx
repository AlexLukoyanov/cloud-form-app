import { UseFormRegister } from "react-hook-form";
import { styled } from "styled-components";
import { CheckBox } from "shared/ui/checkbox";

type CheckGroupProps = {
  register: UseFormRegister<any>;
  errors?: string;
};

const checkGroupData = [
  { id: "1", label: "1", value: 1 },
  { id: "2", label: "2", value: 2 },
  { id: "3", label: "3", value: 3 },
];

export const CheckGroup = ({ register, errors }: CheckGroupProps) => {
  return (
    <Container>
      <Text>Checkbox group</Text>
      <List>
        {checkGroupData.map((el) => (
          <Item key={el.id}>
            <CheckBox
              id={el.id}
              label={el.label}
              value={el.value}
              {...register("checkbox")}
            />
          </Item>
        ))}
      </List>
      <Error>{errors}</Error>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const List = styled.ul`
  width: 100%;
`;
const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 8px;
`;

const Item = styled.li`
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Error = styled.p`
  color: ${(p) => p.theme.colors.red};
  margin-top: 8px;
`;
