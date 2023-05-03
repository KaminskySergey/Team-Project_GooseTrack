import { TaskToolbar } from './TasksCardComponent/index';

import {
  TaskItem,
  TodoText,
  AvatarImg,
  ToolBarBox,
  StatusRed,
  StatusMedium,
  StatusLow,
  Wrap,
  ImgWrapper,
  NameFirstLetter,
} from './TaskColumnCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/user/selectors';
import { deleteTasks } from 'redux/tasks/operations';
import ModalCreate from 'components/ModalCreate/ModalCreate';
import ModalTodo from 'pages/ModalTodo/ModalTodo';
import { useState } from 'react';

export const TaskColumnCard = ({ items, listId }) => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const userInfo = useSelector(selectUserInfo);
  const [currentTodo, setCurrentTodo] = useState(null);

  const dispatch = useDispatch();

  const handleDeleteTodo = value => {
    dispatch(deleteTasks(value));
  };

  const handleToggle = () => setIsOpenModal(pS => !pS);

  const handleTodoId = data => {
    setCurrentTodo(data);
  };

  const userNameTSpit = userInfo.name.split('');
  const firstLeterOfUserName = userNameTSpit[0].toUpperCase();

  return (
    <>
      {items?.map(el => (
        <TaskItem key={el._id}>
          <TodoText>{el.title}</TodoText>
          <ToolBarBox>
            <Wrap>
              {userInfo && userInfo.avatarURL !== '' ? (
                <AvatarImg src={userInfo.avatarURL} alt={userInfo.name} />
              ) : (
                <ImgWrapper>
                  <NameFirstLetter>{firstLeterOfUserName}</NameFirstLetter>
                </ImgWrapper>
              )}
              {el.priority === 'high' && <StatusRed>{el.priority}</StatusRed>}
              {el.priority === 'medium' && (
                <StatusMedium>{el.priority}</StatusMedium>
              )}
              {el.priority === 'low' && <StatusLow>{el.priority}</StatusLow>}
            </Wrap>
            <TaskToolbar
              listId={listId}
              handleTodoId={handleTodoId}
              handleDeleteTodo={handleDeleteTodo}
              todo={el}
              handleToggle={handleToggle}
            />
          </ToolBarBox>
          {/* <TaskModal /> */}
        </TaskItem>
      ))}
      {isModalOpen && (
        <ModalCreate onClose={handleToggle}>
          <ModalTodo handleToggle={handleToggle} currentTodo={currentTodo} />
        </ModalCreate>
      )}
    </>
  );
};
