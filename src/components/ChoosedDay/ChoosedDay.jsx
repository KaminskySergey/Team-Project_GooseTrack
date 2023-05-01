import { DayCalendarHead, TasksColumnsList } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasksAll } from '../../redux/tasks/operations';
import { selectIsitems } from '../../redux/tasks/selectors';
import { useEffect } from 'react';
import { selectToken } from 'redux/auth/selectors';

export const ChoosedDay = ({ weekCalendar }) => {
  const items = useSelector(selectIsitems);
  console.log(items)
  const token = useSelector(selectToken)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasksAll());
  }, [dispatch]);
  

  return (
    <>
      <DayCalendarHead weekCalendar={weekCalendar} />
      <TasksColumnsList />
      
    </>
  );
};
