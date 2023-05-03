import { IconAddTodo, Item, Container } from './TasksColumn.styled';

import {
  ColumnHeadBar,
  ColumnTasksList,
  AddTaskBtn,
} from './TasksComponents/index';

export const TasksColumn = ({ items, listId, askDay }) => {
  return (
    <Item style={{ position: 'relative' }}>
      <Container>
        <ColumnHeadBar title={listId} />
        <IconAddTodo />
      </Container>

      <ColumnTasksList items={items} listId={listId} />
      <AddTaskBtn listId={listId} askDay={askDay} />
    </Item>
  );
};
