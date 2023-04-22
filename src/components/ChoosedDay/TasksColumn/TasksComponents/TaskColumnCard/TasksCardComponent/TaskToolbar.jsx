import {
  iconDelete,
  iconEdit,
  iconMove,
} from '../../../../../../images/svg/index';
import { Box } from './TaskToolbar.styled';

export const TaskToolbar = () => {
  return (
    <Box>
      <li>
        <img src={iconDelete} alt="Delete" />
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
