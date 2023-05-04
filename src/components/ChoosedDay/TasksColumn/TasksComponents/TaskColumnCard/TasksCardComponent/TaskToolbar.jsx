import { ReactComponent as Move } from 'images/svg/iconMove.svg';
import { ReactComponent as Edit } from 'images/svg/iconEdit.svg';
import { ReactComponent as Delete } from 'images/svg/iconDelete.svg';

import ReactDOM from 'react-dom';

import { iconDelete, iconEdit, iconMove } from 'images/svg/index';
import { Box } from './TaskToolbar.styled';
import { TaskModalIcon } from '.';
import { useState } from 'react';
import { ListModalIcon, MoveIconModal } from './TaskModalIcon.styled';
import { editTasks } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
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
  const [currentTodo, setCurrentTodo] = useState('');
  const dispatch = useDispatch();

  const handleTransfer = async el => {
    const newNextId = await handleNextId(el);

    dispatch(editTasks({ _id: currentTodo, category: newNextId }));
  };
  const handleNextId = async el => {
    let newNextId = '';
    switch (el) {
      case 'Todo':
        newNextId = 'toDo';
        break;
      case 'In Progress':
        newNextId = 'inProgress';
        break;
      case 'Done':
        newNextId = 'done';
        break;
      default:
        break;
    }

    return newNextId;
  };

  const handleModalToggle = () => {
    setCurrentTodo(todo._id);
    setIsOpen(prevState => !prevState);
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
    <Box id={todo.title} style={{ position: 'relative' }}>
      <li>
        <Move
          src={iconMove}
          onClick={handleModalToggle}
          style={{ transform: listId === 'done' ? 'rotate(180deg)' : '' }}
        />
        {isOpen &&
          ReactDOM.createPortal(
            <TaskModalIcon onClose={handleModalToggle} listId={listId}>
              <ListModalIcon>
                {finnaly.map(el => (
                  // < key={el} onClick={() => handleTransfer(el)}>
                  <li key={el} onClick={() => handleTransfer(el)}>
                    <p>{el}</p>
                    <MoveIconModal
                      src={iconMove}
                      onClick={handleModalToggle}
                      style={{
                        transform:
                          listId === 'done'
                            ? 'rotate(180deg) scale(1)'
                            : el === 'Todo'
                            ? 'rotate(180deg) scale(1)'
                            : '',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                        '&:focus': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                  </li>
                ))}
              </ListModalIcon>
            </TaskModalIcon>,
            document.getElementById(todo.title)
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
