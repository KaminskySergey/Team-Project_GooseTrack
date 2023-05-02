import {
  format,
  isToday,
  getUnixTime,
  isSameMonth,
  startOfDay,
  endOfDay,
} from 'date-fns';
import {
  CellWrapper,
  DayWrapper,
  GridWrapper,
  RowInCell,
  CurrentDay,
  ShowDayWrapper,
  TaskListWrapper,
  TaskItem,
  TasksMoreLabel,
} from './CalendarTable.styled';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectIsitemsMain } from 'redux/tasks/selectors';

export const CalendarTable = ({ calendar, askDay }) => {
  const tasks = useSelector(selectIsitemsMain);
  const isTasksLoading = useSelector(selectIsLoading);
  console.log(tasks);

  const isCurrentMonth = day => isSameMonth(askDay, day);

  let filteredTasks = [];

  const getDayTasks = day => {
    filteredTasks = tasks?.filter(
      task =>
        getUnixTime(new Date(task.date)) >= getUnixTime(startOfDay(day)) &&
        getUnixTime(new Date(task.date)) < getUnixTime(endOfDay(day))
    );
  };

  console.log(filteredTasks);


  return (
    <GridWrapper>
      {calendar.map(dayItem => (
        <CellWrapper
          to={`/calendar/day:${format(dayItem, 'ddMMMMyyyy')}`}
          key={nanoid()}
          iscurrentmonth={isCurrentMonth(dayItem).toString()}
        >
          <RowInCell justifyContent={'flex-end'}>
            <ShowDayWrapper>
              <DayWrapper>
                {isToday(dayItem) ? (
                  <CurrentDay>{format(dayItem, 'd')}</CurrentDay>
                ) : (
                  format(dayItem, 'd')
                )}
              </DayWrapper>
            </ShowDayWrapper>
            {!isTasksLoading && (
              <TaskListWrapper>
                {getDayTasks(dayItem)}
                {filteredTasks?.slice(0, 2).map(task => (
                  <TaskItem key={nanoid()}>{task.title}</TaskItem>
                ))}
              </TaskListWrapper>
            )}
            {filteredTasks?.length > 2 && (
              <TasksMoreLabel>More...</TasksMoreLabel>
            )}
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};

