import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { EmailField } from "entities/email-field";
import { GitHubLink } from "entities/github-link";
import { PersonalUserName } from "entities/personal-user-name";
import { PhoneField } from "entities/phone-field";
import { ResumeLink } from "entities/resume-link";
import { TelegramLink } from "entities/telegram-link";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { Avatar } from "shared/ui/avatar";
import { Button } from "shared/ui/button/";
import { validationSchema } from "../lib";
import { PersonalInfoFormActions, PersonalInfoType } from "../model";

export const PersonalInfoForm = () => {
  const navigate = useNavigate();
  const { email, phone } = useAppSelector(
    (state) => state.personalInfoForm.formData
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email,
      phone,
    },
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useAppDispatch();

  const onSubmit = (data: PersonalInfoType) => {
    if (isValid) {
      dispatch(PersonalInfoFormActions.setUpdateFormData(data));
      navigate("/user-form");
    }
  };

  return (
    <PageContainer onSubmit={handleSubmit(onSubmit)}>
      <HeaderForm>
        <Avatar
          name="Алекей"
          surname="Лукоянов"
          src="https://sun1-89.userapi.com/impg/Cu1AaYXG8e_UmUstc46jhD5ahx9vB9tV7DXDqg/haSwGLMel0c.jpg?size=940x985&quality=96&sign=f0451a3631995ca9ae8689aff53c363f&type=album"
        />
        <PersonalInfo>
          <PersonalUserName name="Алексей" surname="Лукоянов" />
          <SocialList>
            <SocialListItem>
              <TelegramLink />
            </SocialListItem>
            <SocialListItem>
              <GitHubLink />
            </SocialListItem>
            <SocialListItem>
              <ResumeLink />
            </SocialListItem>
          </SocialList>
        </PersonalInfo>
      </HeaderForm>
      <InputContainer>
        <InputWrapper>
          <PhoneField register={register} errors={errors.phone?.message} />
        </InputWrapper>
        <InputWrapper>
          <EmailField register={register} errors={errors.email?.message} />
        </InputWrapper>
      </InputContainer>
      <Button id="button-start" type="submit">
        Начать
      </Button>
    </PageContainer>
  );
};

const PageContainer = styled.form`
  width: 100%;
  padding: 25px;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: 12px;
`;

const HeaderForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid ${(p) => p.theme.colors.alpha[8]};

  @media (min-width: ${(p) => p.theme.media.sm}px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0px;
  padding-top: 20px;
  flex-wrap: wrap;

  @media (min-width: ${(p) => p.theme.media.sm}px) {
    padding-top: 0px;
    align-items: flex-start;
    margin-left: 20px;
  }
`;

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  flex-wrap: wrap;
`;

const SocialListItem = styled.li`
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding-top: 24px;

  @media (min-width: ${(p) => p.theme.media.sm}px) {
    max-width: 400px;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 24px;

  &:not(:first-child) {
    margin-bottom: 48px;
  }
`;
