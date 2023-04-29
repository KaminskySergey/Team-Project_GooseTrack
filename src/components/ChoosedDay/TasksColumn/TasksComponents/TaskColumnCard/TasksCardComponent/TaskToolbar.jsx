import {
  iconDelete,
  iconEdit,
  iconMove,
} from '../../../../../../images/svg/index';
import { Box } from './TaskToolbar.styled';

export const TaskToolbar = ({handleDeleteTask, id}) => {
  console.log(id, 'iddddddddddddddddd')
  return (
    <Box>
      <li>
        <img src={iconDelete} alt="Delete" onClick={() => handleDeleteTask(id)}/>
      </li>
      <li>
        <img src={iconEdit} alt="Edit" />
      </li>
      <li>
        <img src={iconMove} alt="Move" />
      </li>
    </Box>
  );
};
