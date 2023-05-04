import { Item, Container } from './TasksColumn.styled';

import {
  ColumnHeadBar,
  ColumnTasksList,
  AddTaskBtn,
  TopAddTaskBtn,
} from './TasksComponents/index';

export const TasksColumn = ({ items, listId, askDay }) => {
  return (
    <Item style={{ position: 'relative' }}>
      <Container>
        <ColumnHeadBar title={listId} />
        <TopAddTaskBtn listId={listId} askDay={askDay} />
        {/* <IconAddTodo /> */}
      </Container>

      <ColumnTasksList items={items} listId={listId} />
      <AddTaskBtn listId={listId} askDay={askDay} />
    </Item>
  );
};
