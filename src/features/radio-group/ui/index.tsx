import { UseFormRegister } from "react-hook-form";
import { styled } from "styled-components";
import { RadioButton } from "shared/ui/radio";

type RadioGroupProps = {
  register: UseFormRegister<any>;
  errors?: string;
};

const radioGroupData = [
  { id: "4", label: "1", value: 1, defaultChecked: true },
  { id: "5", label: "2", value: 2 },
  { id: "6", label: "3", value: 3 },
];

export const RadioGroup = ({ register, errors }: RadioGroupProps) => {
  return (
    <Container>
      <Text>Radio group</Text>
      <List>
        {radioGroupData.map((el) => (
          <Item key={el.id}>
            <RadioButton
              id={el.id}
              label={el.label}
              value={el.value}
              defaultChecked={el.defaultChecked}
              {...register("radio")}
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
