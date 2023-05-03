import { IconAddTodo, Item } from './TasksColumn.styled';

import {
  ColumnHeadBar,
  ColumnTasksList,
  AddTaskBtn,
} from './TasksComponents/index';

export const TasksColumn = ({ items, listId, askDay }) => {
  return (
    <Item style={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '24px',
        }}
      >
        <ColumnHeadBar title={listId} />
        <IconAddTodo />
      </div>

      <ColumnTasksList items={items} listId={listId} />
      <AddTaskBtn listId={listId} askDay={askDay} />
    </Item>
  );
};
