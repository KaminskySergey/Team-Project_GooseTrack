import { TaskToolbar, TaskModal } from './TasksCardComponent/index';

import { Box } from './TaskColumnCard.styled';

export const TaskColumnCard = () => {
  return (
    <Box>
      <TaskToolbar />
      <TaskModal />
    </Box>
  );
};

// import { ChoosedDay } from 'components/ChoosedDay/ChoosedDay';
//       <ChoosedDay />;
