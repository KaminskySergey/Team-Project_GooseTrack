import {
  ColumnHeadBar,
  ColumnTasksList,
  AddTaskBtn,
} from './TasksComponents/index';

export const TasksColumn = () => {
  return (
    <>
      <ColumnHeadBar />
      <ColumnTasksList />
      <AddTaskBtn />
    </>
  );
};
