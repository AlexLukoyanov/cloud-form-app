import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { styled } from "styled-components";
import { UserFormActions, UserFormDataTwoType } from "widgets/user-form/";
import { AddAdvantage } from "features/add-advantage";
import { CheckGroup } from "features/check-group";
import { DeleteAdvantage } from "features/delete-advantage";
import { RadioGroup } from "features/radio-group";
import { AdvantageField } from "entities/advantage-field";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { Button } from "shared/ui/button";
import { formStepTwoSchema } from "../lib";

export const FormStepTwo = () => {
  const { advantages, checkbox, radio } = useAppSelector(
    (state) => state.userForm.formDataTwo
  );
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm<UserFormDataTwoType>({
    defaultValues: { advantages, checkbox, radio },
    resolver: yupResolver(formStepTwoSchema),
  });
  const { fields, remove, append } = useFieldArray<any>({
    control,
    name: "advantages",
  });

  useEffect(() => {
    if (fields.length === 0) {
      append("");
    }
  }, []);

  const onClickBack = () => {
    const currentData = getValues();
    const data = {
      ...currentData,
      checkbox: currentData.checkbox.map((el) => Number(el)),
      radio: Number(currentData.radio),
    };
    dispatch(UserFormActions.setUpdateFormDataTwo(data));
    dispatch(UserFormActions.setFormStep(1));
  };

  const onSubmit = (data: UserFormDataTwoType) => {
    const validData = {
      ...data,
      checkbox: data.checkbox.map((el) => Number(el)),
      radio: Number(data.radio),
    };
    if (isValid) {
      dispatch(UserFormActions.setUpdateFormDataTwo(validData));
      dispatch(UserFormActions.setFormStep(3));
    }
  };

  return (
    <>
      <Form>
        <InputWrapper>
          <Text>Advantages</Text>
          <AdvantagesList>
            {fields.map((item, index) => {
              return (
                <AdvantagesItem key={item.id}>
                  <AdvantageField
                    index={index}
                    control={control}
                    errors={errors.advantages?.[index]?.message}
                  />
                  <DeleteAdvantage index={index} remove={remove} />
                </AdvantagesItem>
              );
            })}
          </AdvantagesList>
          <AddAdvantage trigger={trigger} append={append} />
          <CheckGroup register={register} errors={errors.checkbox?.message} />
          <RadioGroup register={register} errors={errors.radio?.message} />
        </InputWrapper>
        <ButtonContainer>
          <Button
            id="button-back"
            type="button"
            variant="secondary"
            onClick={onClickBack}
          >
            {" "}
            Назад
          </Button>
          <Button
            id="button-next"
            type="submit"
            variant="primary"
            onClick={handleSubmit(onSubmit)}
          >
            {" "}
            Далее
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  width: 100%;

  @media (min-width: ${(p) => p.theme.media.sm}px) {
    max-width: 300px;
  }
  margin-bottom: 24px;
`;

const Text = styled.p`
  margin-bottom: 8px;
`;
const AdvantagesList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const AdvantagesItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 8px;
  & input {
    margin-right: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  margin-top: 48px;
  &:first-child {
    margin-right: 10px;
  }

  @media (min-width: ${(p) => p.theme.media.sm}px) {
    &:first-child {
      margin-right: 0px;
    }
  }
`;
