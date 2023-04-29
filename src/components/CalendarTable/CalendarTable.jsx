import { format, isToday, getUnixTime, isSameMonth, startOfDay, endOfDay } from "date-fns";
import { CellWrapper, DayWrapper, GridWrapper, RowInCell, CurrentDay, ShowDayWrapper } from "./CalendarTable.styled";
// import { useSelector } from "react-redux";
// import { selectIsitems } from "redux/tasks/selectors";

const tasks = [{
    name: 'Task-1',
    date: '2023-05-01T21:00:00.000+00:00',
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
    date: '2023-04-30T21:00:00.000+00:00',
    startTime: '10:30',
    endTime: '15:00',
    priority: 'medium',
    category: 'toDo',
}];

export const CalendarTable = ({calendar, askDay}) => {

    const isCurrentMonth = (day) => isSameMonth(askDay, day);
console.log(isCurrentMonth, 'isCurrentMonth');
    let filteredTasks = [];

    const getDayTasks = (day) => {
        filteredTasks = tasks?.filter(
            task => task.date >= startOfDay(day) && task.date <= endOfDay(day)
        );
    };

    return (
        <GridWrapper>{
            calendar.map((dayItem) => (
            <CellWrapper 
            to={'colendar/month/:'}
            key={getUnixTime(dayItem)}
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
                    <div>
                        {getDayTasks(dayItem)}
                        {filteredTasks.map(task => (
                            <div>{task.name}</div>
                        ))}
                    </div>
                </RowInCell>
            </CellWrapper>))}
        </GridWrapper>
    )
}