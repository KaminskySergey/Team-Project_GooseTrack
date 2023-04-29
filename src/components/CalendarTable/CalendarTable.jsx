import { format, isToday, getUnixTime, isSameMonth } from "date-fns";
import { CellWrapper, DayWrapper, GridWrapper, RowInCell, CurrentDay } from "./CalendarTable.styled";
// import { useSelector } from "react-redux";
// import { selectIsitems } from "redux/tasks/selectors";

export const CalendarTable = ({calendar, askDay}) => {
    

    const isCurrentMonth = (day) => isSameMonth(askDay, day);
    
    return (
        <GridWrapper>{
            calendar.map((dayItem) => (<CellWrapper to={`/month/:`}
            key={getUnixTime(dayItem)}
            isCurrentMonth={isCurrentMonth(dayItem)}><RowInCell justifyContent={'flex-end'}>
                <DayWrapper>
                {!isToday(dayItem) && format(dayItem, 'd')}
                {isToday(dayItem) && <CurrentDay>{format(dayItem, 'd')}</CurrentDay>}
                </DayWrapper></RowInCell></CellWrapper>))}</GridWrapper>
    )
} 