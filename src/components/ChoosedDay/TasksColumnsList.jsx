import { List } from './TasksColumnsList.styled';
import { TasksColumn } from './TasksColumn/TasksColumn';
import { useSelector } from 'react-redux';
import { selectIsitems } from 'redux/tasks/selectors';
import { isSameDay, parseISO } from 'date-fns';

export const TasksColumnsList = ({askDay}) => {
  const items = useSelector(selectIsitems);
  const todo = [...items.todo].filter(todo => isSameDay(askDay, parseISO(todo.date)))
  const inProgress = [...items.inProgress].filter(inProgress => isSameDay(askDay, parseISO(inProgress.date)))
  const done = [...items.done].filter(done => isSameDay(askDay, parseISO(done.date)))
  return (
    <>
      <List>
        <TasksColumn listId="toDo" items={todo} />
        <TasksColumn listId="inProgress" items={inProgress} />
        <TasksColumn listId="done" items={done} />
      </List>
    </>
  );
};
