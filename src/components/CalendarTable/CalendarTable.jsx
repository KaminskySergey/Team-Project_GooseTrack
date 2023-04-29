import { format, isToday, getUnixTime, isSameMonth, startOfDay, endOfDay } from "date-fns";
import { CellWrapper, DayWrapper, GridWrapper, RowInCell, CurrentDay, ShowDayWrapper, TaskListWrapper, TaskItem } from "./CalendarTable.styled";
import { nanoid } from "nanoid";
// import { useSelector } from "react-redux";
// import { selectIsitems } from "redux/tasks/selectors";

const tasks = [{
    name: 'Task-1',
    date: '2023-05-01T00:00:00.000+00:00',
    startTime: '10:30',
    endTime: '15:00',
    priority: 'medium',
    category: 'toDo',
}, {
    name: 'Task-2',
    date: '2023-04-28T00:00:00.000+00:00',
    startTime: '10:30',
    endTime: '15:00',
    priority: 'medium',
    category: 'toDo',
}, {
    name: 'Task-3',
    date: '2023-04-29T00:00:00.000+00:00',
    startTime: '10:30',
    endTime: '15:00',
    priority: 'medium',
    category: 'toDo',
}];

export const CalendarTable = ({calendar, askDay}) => {
    // const tasks = useSelector(selectIsitems);

    const isCurrentMonth = (day) => isSameMonth(askDay, day);

    let filteredTasks = [];

    const getDayTasks = (day) => {
        filteredTasks = tasks?.filter(
            task => getUnixTime(new Date(task.date)) >= getUnixTime(startOfDay(day)) && getUnixTime(new Date(task.date)) < getUnixTime(endOfDay(day))
        );
    };

    return (
        <GridWrapper>{
            calendar.map((dayItem) => (
            <CellWrapper 
            to={'colendar/month/:'}
            key={nanoid()}
            iscurrentmonth={isCurrentMonth(dayItem).toString()}
            >
                <RowInCell justifyContent={'flex-end'}>
                    <ShowDayWrapper>
                        <DayWrapper>
                        {
                            isToday(dayItem) ? (
                                <CurrentDay>{format(dayItem, 'd')}</CurrentDay>
                            ) : (
                                format(dayItem, 'd') 
                            )
                        }
                        </DayWrapper>
                    </ShowDayWrapper>
                    <TaskListWrapper>
                        {getDayTasks(dayItem)}
                        {filteredTasks.map(task => (
                            <TaskItem key={nanoid()}>{task.name}</TaskItem>
                        ))}
                    </TaskListWrapper>
                </RowInCell>
            </CellWrapper>))}
        </GridWrapper>
    )
}