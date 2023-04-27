import { TaskToolbar, TaskModal } from './TasksCardComponent/index';

import {
  TodoText,
  AvatarImg,
  ToolBarBox,
  Status,
  Wrap,
} from './TaskColumnCard.styled';
import { useSelector } from 'react-redux';
import { selectIsitems } from 'redux/tasks/selectors';

const data = [
  {name: 'gbgbgbgbg', avatar: 'https://klike.net/uploads/posts/2019-07/1564314059_1.jpg', status: 'high'},
  {name: 'gbgbgbgb', avatar: 'https://klike.net/uploads/posts/2019-07/1564314059_1.jpg', status: 'medium'},
  {name: 'qwqweqweqwewqe', avatar: 'https://klike.net/uploads/posts/2019-07/1564314059_1.jpg', status: 'surer'},
]


export const TaskColumnCard = () => {
  const items = useSelector(selectIsitems)
  console.log(items, 'qwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
  return (
    <>
    {
      data.map(el => (
        <li key={el.name}>
      <TodoText>{el.name}</TodoText>
      <ToolBarBox>
        <Wrap>
          <AvatarImg
            src={el.avatar}
            alt={el.name}
          />
          <Status status={el.status}>Medium</Status>
        </Wrap>
        <TaskToolbar />
      </ToolBarBox>
      <TaskModal />
    </li>
      ))
    }
    </>
  );
};
