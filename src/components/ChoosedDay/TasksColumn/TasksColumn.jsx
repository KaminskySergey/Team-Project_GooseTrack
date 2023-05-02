import { Item } from './TasksColumn.styled';
import {
  ColumnHeadBar,
  ColumnTasksList,
  AddTaskBtn,
} from './TasksComponents/index';



export const TasksColumn = () => {
  return (
    <Item>
      <ColumnHeadBar />
      <ColumnTasksList />
      <AddTaskBtn />
    </Item>
  );
};
