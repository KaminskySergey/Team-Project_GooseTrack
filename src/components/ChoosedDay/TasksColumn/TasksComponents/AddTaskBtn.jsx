import ModalCreate from 'components/ModalCreate/ModalCreate';
import ModalTodo from 'pages/ModalTodo/ModalTodo';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTasks } from 'redux/tasks/operations';
import {
  AddTaskButton,
  Icon,
} from 'components/ChoosedDay/TasksColumn/TasksComponents/AddTaskBtn.styled';
import { toast } from 'react-toastify';

export const AddTaskBtn = ({ listId, askDay }) => {
  const [isModalOpen, setIsOpenModal] = useState(false);

  // const [isAddTodo, setIsAddTodo] = useState(false)
  // const [isPatchTodo, setIsPatchTodo] = useState(false)

  const dispatch = useDispatch();

  const handleAddTodo = value => {
    const newIsoString = askDay.toISOString();

    const todo = {
      date: newIsoString,
      ...value,
      category: listId,
    };

    dispatch(addTasks(todo))
      .unwrap()
      .then(() => handleToggle())
      .catch(() => toast.error('Please specify the future time'));
  };

  const handleToggle = () => setIsOpenModal(pS => !pS);

  return (
    <>
      <AddTaskButton type="button" onClick={handleToggle}>
        <Icon />
        Add task
      </AddTaskButton>
      {isModalOpen && (
        <ModalCreate onClose={handleToggle}>
          <ModalTodo handleAddTodo={handleAddTodo} />
        </ModalCreate>
      )}
    </>
  );
};
