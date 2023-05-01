import { ReactComponent as Move } from '../../../../../../images/svg/iconMove.svg';
import { ReactComponent as Edit } from '../../../../../../images/svg/iconEdit.svg';
import { ReactComponent as Delete } from '../../../../../../images/svg/iconDelete.svg';

import {
  iconDelete,
  iconEdit,
  iconMove,
} from '../../../../../../images/svg/index';
import { Box } from './TaskToolbar.styled';
import { TaskModalIcon } from '.';
import { useState } from 'react';
import { ListModalIcon, MoveIconModal } from './TaskModalIcon.styled';

export const TaskToolbar = ({ handleTodoId,  todo, handleDeleteTodo, handleToggle}) => {
  const [isOpen, setIsOpen] = useState(false)

 const handleModalToggle = () => {
      setIsOpen(pS => !pS)
    }

  const handleInfo = (todo) => {
    handleTodoId(todo)
handleToggle()
  }
  

  return (
    <Box>
      <li style={{position: 'relative'}}>
        <Move src={iconMove}  onClick={handleModalToggle}/>
        {isOpen && <TaskModalIcon onClose={handleModalToggle}>
          <ListModalIcon>
            <li style={{marginBottom: '14px'}}>
              <p>gbgbgbgb</p>
              <MoveIconModal src={iconMove}  onClick={handleModalToggle}/>
            </li>
            <li>
            <p>gbgbgbgb</p>
              <MoveIconModal src={iconMove}  onClick={handleModalToggle}/>
            </li>
          </ListModalIcon>

        </TaskModalIcon>}
      </li>
      <li>
        <Edit src={iconEdit}  onClick={() => handleInfo(todo)}/>
      </li>
      <li>
        <Delete src={iconDelete}   onClick={() => handleDeleteTodo(todo._id)}/>
      </li>
    </Box>
  );
};
