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
import { deleteTasks } from 'redux/tasks/operations';

const data = [
  {name: 'gbgbgbgbg', avatar: 'https://klike.net/uploads/posts/2019-07/1564314059_1.jpg', status: 'high'},
  {name: 'gbgbgbgb', avatar: 'https://klike.net/uploads/posts/2019-07/1564314059_1.jpg', status: 'medium'},
  {name: 'qwqweqweqwewqe', avatar: 'https://klike.net/uploads/posts/2019-07/1564314059_1.jpg', status: 'surer'},
]


export const TaskColumnCard = () => {
  const items = useSelector(selectIsitems)
  const dispatch = useDispatch()

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTasks(taskId))
  }
console.log(items, 'avatar')
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
        <TaskToolbar id={el._id} handleDeleteTask={handleDeleteTask}/>
      </ToolBarBox>
      <TaskModal />
    </li>
      ))
    }
    </>
  );
};
