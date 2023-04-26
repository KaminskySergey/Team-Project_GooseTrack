import { DayCalendarHead, TasksColumnsList } from './index';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTasksAll } from '../../redux/tasks/operations';
// import { selectIsitems } from '../../redux/tasks/selectors';
// import { useEffect } from 'react';

export const ChoosedDay = ({ weekCalendar }) => {
  // const items = useSelector(selectIsitems);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchTasksAll());
  // }, [dispatch]);
  // console.log(items);

  return (
    <>
      <DayCalendarHead weekCalendar={weekCalendar} />
      <TasksColumnsList />
    </>
  );
};
