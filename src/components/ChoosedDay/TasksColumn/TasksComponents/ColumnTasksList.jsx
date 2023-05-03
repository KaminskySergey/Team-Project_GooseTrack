import { TaskColumnCard } from './TaskColumnCard/TaskColumnCard';

export const ColumnTasksList = ({ items, listId }) => {
  return (
    <ul style={{ overflowY: 'auto' }}>
      <TaskColumnCard items={items} listId={listId} />
    </ul>
  );
};
