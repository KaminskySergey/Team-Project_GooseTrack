import { TaskToolbar, TaskModal } from './TasksCardComponent/index';

import {
  TodoText,
  AvatarImg,
  ToolBarBox,
  Status,
  Wrap,
} from './TaskColumnCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsitems } from 'redux/tasks/selectors';
import { deleteTasks, editTasks } from 'redux/tasks/operations';
import ModalCreate from 'components/ModalCreate/ModalCreate';
import ModalTodo from 'pages/ModalTodo/ModalTodo';
import { useState } from 'react';




export const TaskColumnCard = () => {
  const [isModalOpen, setIsOpenModal] = useState(false)
  const items = useSelector(selectIsitems) 
  const [todoId, setTodoId] = useState('')
  const [currentTodo, setCurrentTodo] = useState(null)


  const dispatch = useDispatch()
  
  
  const handleDeleteTodo = (value) => {
  console.log(value, 'taskId')
    dispatch(deleteTasks(value))
  }

  
  const handleToggle = () => setIsOpenModal(pS => !pS)
  
  
  const handleTodoId = (data) => {
    setCurrentTodo(data)

    
  }

  

  return (
    <>
    {
      items?.map(el => (
        <li key={el._id}>
      <TodoText>{el.title}</TodoText>
      <ToolBarBox>
        <Wrap>
          <AvatarImg
            src={el.avatar}
            alt={el.name}
          />
          <Status status={el.status}>Medium</Status>
        </Wrap>
        <TaskToolbar handleTodoId={handleTodoId}  handleDeleteTodo={handleDeleteTodo} todo={el} handleToggle={handleToggle} />
      </ToolBarBox >
      <TaskModal />
    </li>
      ))
    }
    {isModalOpen && <ModalCreate  onClose={handleToggle}>
      <ModalTodo handleToggle={handleToggle}  currentTodo={currentTodo}/>
    </ModalCreate>}
    </>
  );
};
