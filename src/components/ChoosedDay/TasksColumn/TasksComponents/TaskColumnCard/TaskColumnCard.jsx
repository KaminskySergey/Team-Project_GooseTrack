import { TaskToolbar } from './TasksCardComponent/index';

import {
  TodoText,
  AvatarImg,
  ToolBarBox,
  StatusRed,
  StatusMedium,
  StatusLow,
  Wrap,
} from './TaskColumnCard.styled';
import { useDispatch } from 'react-redux';

import { deleteTasks } from 'redux/tasks/operations';
import ModalCreate from 'components/ModalCreate/ModalCreate';
import ModalTodo from 'pages/ModalTodo/ModalTodo';
import { useState } from 'react';

export const TaskColumnCard = ({ items, listId }) => {
  const [isModalOpen, setIsOpenModal] = useState(false);

  const [currentTodo, setCurrentTodo] = useState(null);

  const dispatch = useDispatch();

  const handleDeleteTodo = value => {
    dispatch(deleteTasks(value));
  };

  const handleToggle = () => setIsOpenModal(pS => !pS);

  const handleTodoId = data => {
    setCurrentTodo(data);
  };

  return (
    <>
      {items?.map(el => (
        <li key={el._id}>
          <TodoText>{el.title}</TodoText>
          <ToolBarBox>
            <Wrap>
              <AvatarImg src={el.avatar} alt={el.name} />
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
              toDo={el}
              handleToggle={handleToggle}
            />
          </ToolBarBox>
          
        </li>
      ))}
      {isModalOpen && (
        <ModalCreate onClose={handleToggle}>
          <ModalTodo handleToggle={handleToggle} currentTodo={currentTodo} />
        </ModalCreate>
      )}
    </>
  );
};
