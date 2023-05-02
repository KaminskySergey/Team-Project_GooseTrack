import { Item } from './TasksColumn.styled';
import {
  ColumnHeadBar,
  ColumnTasksList,
  AddTaskBtn,
} from './TasksComponents/index';



export const TasksColumn = ({items, listId}) => {
 

  return (
    <Item>
      <ColumnHeadBar title={listId}/>
      <ColumnTasksList items={items} listId={listId}/>
      <AddTaskBtn listId={listId} />
    </Item>
  );
};
