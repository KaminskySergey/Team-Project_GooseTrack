import { DayCalendarHead, TasksColumnsList } from './index';
import { useDispatch } from 'react-redux';
import { fetchTasksAll } from '../../redux/tasks/operations';
// import { selectIsitems } from '../../redux/tasks/selectors';
import { useEffect } from 'react';
// import { selectToken } from 'redux/auth/selectors';

export const ChoosedDay = ({ weekCalendar, askDay }) => {
  // const items = useSelector(selectIsitems);
  // const token = useSelector(selectToken);
  // console.log(items, 'items');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasksAll());
  }, [dispatch]);

  return (
    <>
      <DayCalendarHead weekCalendar={weekCalendar} askDay={askDay}/>
      <TasksColumnsList askDay={askDay}/>
    </>
  );
};
