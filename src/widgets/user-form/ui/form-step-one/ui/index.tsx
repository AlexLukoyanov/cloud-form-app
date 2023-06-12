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
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { nickname, name, surname, sex },
    resolver: yupResolver(formStepOneSchema),
  });

  const onClickBack = (data: UserFormDataOneType) => {
    if (isValid) {
      navigate(-1);
      dispatch(UserFormActions.setUpdateFormDataOne(data));
    }
  };

  const onSubmit = (data: UserFormDataOneType) => {
    if (isValid) {
      dispatch(UserFormActions.setUpdateFormDataOne(data));
      dispatch(UserFormActions.setFormStep(2));
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <NameField
          name="nickname"
          label="Nickname"
          register={register}
          errors={errors.nickname?.message}
        />
      </InputWrapper>
      <InputWrapper>
        <NameField
          name="name"
          label="Name"
          register={register}
          errors={errors.name?.message}
        />
      </InputWrapper>
      <InputWrapper>
        <NameField
          name="surname"
          label="Surname"
          register={register}
          errors={errors.surname?.message}
        />
      </InputWrapper>
      <InputWrapper>
        <SexSelect control={control} errors={errors.sex?.message} />
      </InputWrapper>
      <ButtonContainer>
        <Button
          type="submit"
          variant="secondary"
          onClick={handleSubmit(onClickBack)}
        >
          {" "}
          Назад
        </Button>
        <Button type="submit" variant="primary">
          Далее
        </Button>
      </ButtonContainer>
    </Form>
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
