import { useLocation } from 'react-router';
import {
  Container,
  Menu,
  Title,
  GooseIcon,
  Motivation,
  Accent,
  BurgerButton,
  BurgerIcon,
} from './Header.styled';
import Box from 'components/Box/Box';
import { ThemeToggler } from './ThemeToggler/ThemeToggler';
import { UserInfo } from './UserInfo/UserInfo';
import { useResponce } from 'hooks/responce/useResponce';
import { selectIsitemsMain } from 'redux/tasks/selectors';
import { useSelector } from 'react-redux';

export const Header = ({ onSidebarShow }) => {
  const userTasks = useSelector(selectIsitemsMain);
  // const userTasksInProgress = useSelector(selectIsitemsInProgress);
  const { isDesktopOrLaptop } = useResponce();
  const { pathname } = useLocation();

  let pageTitle = '';

  const words = pathname.split('/');
  const title = words.find(word => word === 'calendar' || word === 'account');

  switch (title) {
    case 'calendar':
      pageTitle = 'Calendar';
      break;
    case 'account':
      pageTitle = 'User Profile';
      break;
    default:
      pageTitle = '';
      break;
  }

  // const shouldShowMotivation =
  //   pageTitle === 'Calendar' &&
  //   (userTasksToDo.length > 0 || userTasksInProgress.length > 0);

  const isAnyUncompletedTask = userTasks.some(
    item => item.category === 'toDo' || item.category === 'inProgress'
  );

  return (
    <>
      <Container>
        <Box display="flex" alignItems="center" gap="8px">
          {!isDesktopOrLaptop && (
            <BurgerButton type="button" onClick={() => onSidebarShow()}>
              <BurgerIcon />
            </BurgerButton>
          )}
          {isDesktopOrLaptop && (
            <>
              {isAnyUncompletedTask && <GooseIcon />}
              <div>
                <Title>{pageTitle}</Title>
                {isAnyUncompletedTask && (
                  <Motivation>
                    <Accent>Let go</Accent> of the past and focus on the
                    present!
                  </Motivation>
                )}
              </div>
            </>
          )}
        </Box>
        <Menu>
          <ThemeToggler />
          <UserInfo />
        </Menu>
      </Container>
    </>
  );
};
