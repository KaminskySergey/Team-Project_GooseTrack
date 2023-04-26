import { CellWrapper, GridWrapper, CurrentDay } from "./DayCalendarHead.styled";
import { format, isToday, getUnixTime } from "date-fns";

export const DayCalendarHead = ({weekCalendar}) => {
    return (
        <>
        <GridWrapper>
            <CellWrapper>M</CellWrapper>
            <CellWrapper>T</CellWrapper>
            <CellWrapper>W</CellWrapper>
            <CellWrapper>T</CellWrapper>
            <CellWrapper>F</CellWrapper>
            <CellWrapper weekend={true}>S</CellWrapper>
            <CellWrapper weekend={true}>S</CellWrapper>
            {weekCalendar.map((dayItem) => (<CellWrapper key={getUnixTime(dayItem)} dates={true} color="#343434">{!isToday(dayItem) && format(dayItem, 'd')}
                {isToday(dayItem) && <CurrentDay>{format(dayItem, 'd')}</CurrentDay>}</CellWrapper>))}
        </GridWrapper>
        </>
    )
}