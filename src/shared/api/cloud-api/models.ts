export enum SexType {
  man = "man",
  woman = "woman",
}

export type UserFormType = {
  nickname: string;
  name: string;
  surname: string;
  sex: SexType;
  advantages: string[];
  radio: number;
  checkbox: number[];
  about: string;
};
