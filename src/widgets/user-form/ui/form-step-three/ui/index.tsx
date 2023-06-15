import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import {
  UserFormActions,
  UserFormDataThreeType,
  postUserForm,
} from "widgets/user-form/";
import { About } from "entities/about";
import { FormRejectedMessage } from "entities/form-rejected-message";
import { FormSuccessMessage } from "entities/form-success-message";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { Button } from "shared/ui/button";
import { formStepThreeSchema } from "../lib";

export const FormStepThree = () => {
  const dataFormOne = useAppSelector((state) => state.userForm.formDataOne);
  const dataFormTwo = useAppSelector((state) => state.userForm.formDataTwo);
  const { about } = useAppSelector((state) => state.userForm.formDataThree);
  const { status } = useAppSelector((state) => state.userForm);
  const dispatch = useAppDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid },
  } = useForm<UserFormDataThreeType>({
    defaultValues: { about },
    resolver: yupResolver(formStepThreeSchema),
  });

  const fieldValue = watch("about");

  const onClickBack = () => {
    const currentData = getValues();
    dispatch(UserFormActions.setUpdateFormDataThree(currentData));
    dispatch(UserFormActions.setFormStep(2));
  };

  const onSubmit = async (data: UserFormDataThreeType) => {
    const validData = {
      ...dataFormOne,
      ...dataFormTwo,

      ...data,
    };
    if (isValid) {
      await dispatch(postUserForm(validData));
      if (status === "rejected") {
        setIsOpenModal(true);
      }
    }
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onResetFormData = () => {
    dispatch(UserFormActions.setResetFormData());
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <About
          register={register}
          errors={errors.about?.message}
          value={fieldValue}
        />
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
      {status === "fulfilled" ? (
        <FormSuccessMessage onReset={onResetFormData} />
      ) : null}
      {isOpenModal ? <FormRejectedMessage onClose={onCloseModal} /> : null}
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
