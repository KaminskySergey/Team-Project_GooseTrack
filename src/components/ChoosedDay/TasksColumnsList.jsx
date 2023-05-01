import { List } from './TasksColumnsList.styled';
import { TasksColumn } from './TasksColumn/TasksColumn';
import { useSelector } from 'react-redux';
import { selectIsitems } from 'redux/tasks/selectors';

export const TasksColumnsList = () => {
  const items = useSelector(selectIsitems)
  console.log(items.inProgress, 'inProgress')
  console.log(items.todo, 'todo')
  console.log(items.done, 'done')

  return (
    <>
      <List>
      <TasksColumn items={items.todo}/>
      <TasksColumn items={items.inProgress}/>
      <TasksColumn items={items.done}/>
      
      </List>
    </>
  );
};
