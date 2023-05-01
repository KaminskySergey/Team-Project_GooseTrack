import { DayCalendarHead, TasksColumnsList } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasksAll } from '../../redux/tasks/operations';
import { selectIsitems } from '../../redux/tasks/selectors';
import { useEffect } from 'react';
import { selectToken } from 'redux/auth/selectors';

export const ChoosedDay = ({ weekCalendar }) => {
  const items = useSelector(selectIsitems);
  const token = useSelector(selectToken)
  console.log(token, 'werwerwerwer')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasksAll());
  }, [dispatch]);
  console.log(items, 'items');

  return (
    <>
      <DayCalendarHead weekCalendar={weekCalendar} />
      <TasksColumnsList />
      
    </>
  );
};
