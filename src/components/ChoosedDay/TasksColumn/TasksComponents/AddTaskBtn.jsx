import ModalCreate from 'components/ModalCreate/ModalCreate';
import ModalTodo from 'pages/ModalTodo/ModalTodo';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTasks } from 'redux/tasks/operations';

export const AddTaskBtn = ({ listId }) => {
  const [isModalOpen, setIsOpenModal] = useState(false);

  // const [isAddTodo, setIsAddTodo] = useState(false)
  // const [isPatchTodo, setIsPatchTodo] = useState(false)

  const dispatch = useDispatch();

  const handleAddTodo = value => {
    const now = new Date();
    const date = new Date(now);
    const isoString = date.toISOString();
    // Das ist ToDo!!!
    const todo = {
      date: isoString,
      ...value,
      category: listId,
    };

    dispatch(addTasks(todo));
    handleToggle();
  };

  const handleToggle = () => setIsOpenModal(pS => !pS);

  return (
    <>
      <button type="button" onClick={handleToggle}>
        ADD TODO
      </button>
      {isModalOpen && (
        <ModalCreate onClose={handleToggle}>
          <ModalTodo handleAddTodo={handleAddTodo} />
        </ModalCreate>
      )}
    </>
  );
};
