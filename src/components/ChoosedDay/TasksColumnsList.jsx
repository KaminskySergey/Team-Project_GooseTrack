import { List } from './TasksColumnsList.styled';
import { TasksColumn } from './TasksColumn/TasksColumn';
import { useSelector } from 'react-redux';
import { selectIsitems } from 'redux/tasks/selectors';

export const TasksColumnsList = () => {
  const items = useSelector(selectIsitems)
  

  return (
    <>
      <List>
      <TasksColumn listId="toDo" items={items.todo}/>
      <TasksColumn listId="inProgress" items={items.inProgress}/>
      <TasksColumn listId="done" items={items.done}/>
      
      </List>
    </>
  );
};
