import { ReactComponent as Move } from 'images/svg/iconMove.svg';
import { ReactComponent as Edit } from 'images/svg/iconEdit.svg';
import { ReactComponent as Delete } from 'images/svg/iconDelete.svg';

import { iconDelete, iconEdit, iconMove } from 'images/svg/index';
import { Box } from './TaskToolbar.styled';
import { TaskModalIcon } from '.';
import { useState } from 'react';
import { ListModalIcon, MoveIconModal } from './TaskModalIcon.styled';
// import { useDispatch } from 'react-redux';
// import { transferTask } from 'redux/tasks/operations';

const value = {
  toDo: 'Todo',
  inProgress: 'In Progress',
  done: 'Done',
};

export const TaskToolbar = ({
  listId,
  handleTodoId,
  todo,
  handleDeleteTodo,
  handleToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [nextId, setNextId] = useState('')
  // const [currentTodo, setCurrentTodo] = useState('')
  // const dispatch = useDispatch()

  const handleModalToggle = () => {
    setIsOpen(pS => !pS);
  };

  const handleInfo = todo => {
    handleTodoId(todo);
    handleToggle();
  };

  const data = Object.keys(value).filter(item => item !== listId);

  const filteredValue = data.reduce((acc, key) => {
    acc[key] = value[key];
    return acc;
  }, {});

  const finnaly = Object.values(filteredValue);

  return (
    <Box>
      <li style={{ position: 'relative' }}>
        <Move src={iconMove} onClick={handleModalToggle} />
        {isOpen && (
          <TaskModalIcon onClose={handleModalToggle}>
            <ListModalIcon>
              {finnaly.map(el => (
                // < key={el} onClick={() => handleTransfer(el)}>
                <li key={el}>
                  <p>{el}</p>
                  <MoveIconModal src={iconMove} onClick={handleModalToggle} />
                </li>
              ))}
            </ListModalIcon>
          </TaskModalIcon>
        )}
      </li>
      <li>
        <Edit src={iconEdit} onClick={() => handleInfo(todo)} />
      </li>
      <li>
        <Delete src={iconDelete} onClick={() => handleDeleteTodo(todo._id)} />
      </li>
    </Box>
  );
};
