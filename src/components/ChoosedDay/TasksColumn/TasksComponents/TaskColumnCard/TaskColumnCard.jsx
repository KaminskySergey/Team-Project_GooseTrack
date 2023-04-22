import { TaskToolbar, TaskModal } from './TasksCardComponent/index';

import {
  Box,
  TodoText,
  AvatarImg,
  ToolBarBox,
  Status,
  Wrap,
} from './TaskColumnCard.styled';

export const TaskColumnCard = () => {
  return (
    <Box>
      <TodoText>Developing a marketing and social media strategy</TodoText>
      <ToolBarBox>
        <Wrap>
          <AvatarImg
            src="https://klike.net/uploads/posts/2019-07/1564314059_1.jpg"
            alt="avatar"
          />
          <Status status="Medium">Medium</Status>
        </Wrap>
        <TaskToolbar />
      </ToolBarBox>
      <TaskModal />
    </Box>
  );
};
