import styled from "styled-components";

type AvatarProps = {
  src?: string;
  size?: number;
  name: string;
  surname: string;
};

export const Avatar = ({
  src,
  size = 80,
  name,
  surname,
  ...restProps
}: AvatarProps) => {
  return (
    <Container size={size} {...restProps}>
      {src ? (
        <Image src={src} />
      ) : (
        `${name[0].toUpperCase()}${surname[0].toUpperCase()}`
      )}
    </Container>
  );
};

const Container = styled.div<Pick<AvatarProps, "size">>`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  background-color: ${(p) => p.theme.colors.blueLight};
  border-radius: 50%;
`;

const Image = styled.img<Pick<AvatarProps, "size">>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
