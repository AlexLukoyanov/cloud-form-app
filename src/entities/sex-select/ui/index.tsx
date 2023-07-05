import { Control, Controller } from "react-hook-form";
import Select from "react-select";
import { styled } from "styled-components";
import { SexType, UserFormType } from "shared/api/cloud-api";

type controlType = Pick<UserFormType, "nickname" | "name" | "surname" | "sex">;

type SexSelectProps = {
  control: Control<controlType>;
  errors?: string;
  requiredTag?: boolean;
};

const options = [
  { value: SexType.man, label: SexType.man, id: "field-sex-option-man" },
  { value: SexType.woman, label: SexType.woman, id: "field-sex-option-woman" },
];

export const SexSelect = ({ control, errors, requiredTag }: SexSelectProps) => {
  return (
    <>
      <Controller
        name="sex"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value, ref } }) => (
          <>
            <Wrapper>Sex {requiredTag && <Star>*</Star>}</Wrapper>

            <StyledSelect
              ref={ref}
              id="field-sex"
              classNamePrefix="Select"
              isSearchable={false}
              options={options}
              value={options.find((c) => c.value === value)}
              onChange={(val: any) => onChange(val?.value)}
            />
          </>
        )}
      />
      <Error>{errors}</Error>
    </>
  );
};

const StyledSelect = styled(Select)`
  .Select__control {
    border: none;
    border-radius: 0;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 8px;
    padding: 2px;
    border: 1px solid ${(p) => p.theme.colors.alpha[16]};
    background-color: ${(p) => p.theme.colors.white};

    &:hover,
    &:focus {
      border: 1px solid ${(p) => p.theme.colors.purple};
    }
  }

  .Select__control--is-focused {
    border-color: ${(p) => p.theme.colors.purple};
    box-shadow: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__option {
    &--is-focused {
      color: ${(p) => p.theme.colors.white};
      background-color: ${(p) => p.theme.colors.alpha[16]};
      cursor: pointer;
    }
    &--is-selected {
      background-color: ${(p) => p.theme.colors.purple};
    }
    &:active {
      background-color: ${(p) => p.theme.colors.purple};
    }
  }
`;

const Error = styled.p`
  color: ${(p) => p.theme.colors.red};
  margin-top: 8px;
`;

const Star = styled.span`
  color: ${(p) => p.theme.colors.red};
  margin-left: 3px;
`;

const Wrapper = styled.p`
  display: flex;
`;
