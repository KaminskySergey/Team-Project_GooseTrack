
import { Wrapper, Container, Menu, Title } from './Header.styled';
import { ThemeToggler } from './ThemeToggler/ThemeToggler';
import { UserInfo } from './UserInfo/UserInfo';

export const Header = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>Page name</Title>
          <Menu>
            <ThemeToggler />
            <UserInfo />
          </Menu>
        </Container>
      </Wrapper>
    </>
  );
};
