import { IconAddTodo, Item } from './TasksColumn.styled';

import {
  ColumnHeadBar,
  ColumnTasksList,
  AddTaskBtn,
} from './TasksComponents/index';
import { position } from 'styled-system';

export const TasksColumn = ({ items, listId, askDay }) => {
  return (
    <Item style={{position: 'relative'}}>
      <IconAddTodo/>
      <ColumnHeadBar title={listId}/>
      <ColumnTasksList items={items} listId={listId} />
      <AddTaskBtn listId={listId} askDay={askDay} />
    </Item>
  );
};
