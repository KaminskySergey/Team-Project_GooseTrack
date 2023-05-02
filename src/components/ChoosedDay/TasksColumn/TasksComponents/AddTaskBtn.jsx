import ModalCreate from 'components/ModalCreate/ModalCreate';
import ModalTodo from 'pages/ModalTodo/ModalTodo';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTasks } from 'redux/tasks/operations';

export const AddTaskBtn = ({ listId, askDay }) => {
  const [isModalOpen, setIsOpenModal] = useState(false);

  // const [isAddTodo, setIsAddTodo] = useState(false)
  // const [isPatchTodo, setIsPatchTodo] = useState(false)

  const dispatch = useDispatch();

  const handleAddTodo = value => {
    const newIsoString = askDay.toISOString();

    const toDo = {
      date: newIsoString,
      ...value,
      category: listId,
    };

    dispatch(addTasks(toDo));
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
