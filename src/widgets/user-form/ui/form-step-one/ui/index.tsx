import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { UserFormActions, UserFormDataOneType } from "widgets/user-form/";
import { NameField } from "entities/name-field";
import { SexSelect } from "entities/sex-select";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { Button } from "shared/ui/button";
import { formStepOneSchema } from "../lib";

export const FormStepOne = () => {
  const navigate = useNavigate();
  const { nickname, name, surname, sex } = useAppSelector(
    (state) => state.userForm.formDataOne
  );
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { nickname, name, surname, sex },
    resolver: yupResolver(formStepOneSchema),
  });

  const onClickBack = () => {
    const currentData = getValues();
    dispatch(UserFormActions.setUpdateFormDataOne(currentData));
    navigate("/");
  };

  const onSubmit = (data: UserFormDataOneType) => {
    if (isValid) {
      dispatch(UserFormActions.setUpdateFormDataOne(data));
      dispatch(UserFormActions.setFormStep(2));
    }
  };

  return (
    <>
      <Form>
        <InputWrapper>
          <NameField
            id="field-nickname"
            name="nickname"
            label="Nickname"
            register={register}
            errors={errors.nickname?.message}
          />
        </InputWrapper>
        <InputWrapper>
          <NameField
            id="field-name"
            name="name"
            label="Name"
            register={register}
            errors={errors.name?.message}
          />
        </InputWrapper>
        <InputWrapper>
          <NameField
            id="field-surname"
            name="surname"
            label="Surname"
            register={register}
            errors={errors.surname?.message}
          />
        </InputWrapper>
        <InputWrapper>
          <SexSelect
            control={control}
            errors={errors.sex?.message}
            requiredTag
          />
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
