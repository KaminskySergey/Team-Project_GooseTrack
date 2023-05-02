import { TaskColumnCard } from './TaskColumnCard/TaskColumnCard';

export const ColumnTasksList = ({ items, listId }) => {
  return (
    <ul>
      <TaskColumnCard items={items} listId={listId} />
    </ul>
  );
};
