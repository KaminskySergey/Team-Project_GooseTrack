import { TaskColumnCard } from './TaskColumnCard/TaskColumnCard';

export const ColumnTasksList = ({ items, listId }) => {
  return (
    <ul style={{ overflowY:'scroll' }}>
      <TaskColumnCard items={items} listId={listId} />
    </ul>
  );
};
