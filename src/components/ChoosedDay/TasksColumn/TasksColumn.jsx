import { Item } from './TasksColumn.styled';
import {
  ColumnHeadBar,
  ColumnTasksList,
  AddTaskBtn,
} from './TasksComponents/index';



export const TasksColumn = ({items, listId}) => {
  return (
    <Item>
      <ColumnHeadBar />
      <ColumnTasksList items={items}/>
      <AddTaskBtn listId={listId} />
    </Item>
  );
};
