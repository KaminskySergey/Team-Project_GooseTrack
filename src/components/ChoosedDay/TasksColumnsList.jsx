import { List } from './TasksColumnsList.styled';
import { TasksColumn } from './TasksColumn/TasksColumn';
import { useSelector } from 'react-redux';
import { isSameDay, parseISO } from 'date-fns';

export const TasksColumnsList = ({ askDay }) => {

  const items = useSelector(state => state.tasks.items)


  const todoTasks = items.filter(task => task.category === "toDo");
  const inProgressTasks = items.filter(task => task.category === "inProgress");
  const doneTasks = items.filter(task => task.category === "done");

    const todo = todoTasks.filter(todo =>
    isSameDay(askDay, parseISO(todo.date))
    );
    const inProgress = inProgressTasks.filter(inProgress =>
      isSameDay(askDay, parseISO(inProgress.date))
    );
    const done = doneTasks.filter(done =>
      isSameDay(askDay, parseISO(done.date))
    );

  return (
    <>
      <List>
        <TasksColumn listId="toDo" items={todo} askDay={askDay} />
        <TasksColumn listId="inProgress" items={inProgress} askDay={askDay} />
        <TasksColumn listId="done" items={done} askDay={askDay} />
      </List>
    </>
  );
};