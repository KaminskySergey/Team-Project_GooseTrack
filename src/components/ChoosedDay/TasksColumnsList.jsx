import { List } from './TasksColumnsList.styled';
import { TasksColumn } from './TasksColumn/TasksColumn';
import { useSelector } from 'react-redux';
import { selectIsitems } from 'redux/tasks/selectors';
import { isSameDay, parseISO } from 'date-fns';

export const TasksColumnsList = ({ askDay }) => {
  const items = useSelector(selectIsitems);
  console.log(items, 'itemsitemsitems')
  const toDo = [...items.toDo].filter(toDo =>
    isSameDay(askDay, parseISO(toDo.date))
  );
  const inProgress = [...items.inProgress].filter(inProgress =>
    isSameDay(askDay, parseISO(inProgress.date))
  );
  const done = [...items.done].filter(done =>
    isSameDay(askDay, parseISO(done.date))
  );
  return (
    <>
      <List>
        <TasksColumn listId="toDo" items={toDo} askDay={askDay} />
        <TasksColumn listId="inProgress" items={inProgress} askDay={askDay} />
        <TasksColumn listId="done" items={done} askDay={askDay} />
      </List>
    </>
  );
};
