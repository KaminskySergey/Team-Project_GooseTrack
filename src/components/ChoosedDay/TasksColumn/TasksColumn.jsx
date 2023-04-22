import {
  ColumnHeadBar,
  ColumnTasksList,
  AddTaskBtn,
} from './TasksComponents/index';

import { Box } from './TasksColumn.styled';

export const TasksColumn = () => {
  return (
    <Box>
      <ColumnHeadBar />
      <ColumnTasksList />
      <AddTaskBtn />
    </Box>
  );
};
