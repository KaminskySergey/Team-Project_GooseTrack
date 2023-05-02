import { nanoid } from "nanoid";
import { CellWrapper, GridWrapper, CurrentDay, CellWrapperOfDate } from "./DayCalendarHead.styled";
import { format, isToday } from "date-fns";
import { useResponce } from "hooks/responce";

export const DayCalendarHead = ({weekCalendar}) => {
    const {isMobile} = useResponce();
    return (
        <>
        <GridWrapper>
            {isMobile ? (<><CellWrapper>M</CellWrapper>
            <CellWrapper>T</CellWrapper>
            <CellWrapper>W</CellWrapper>
            <CellWrapper>T</CellWrapper>
            <CellWrapper>F</CellWrapper>
            <CellWrapper weekend={true}>S</CellWrapper>
            <CellWrapper weekend={true}>S</CellWrapper></>) : (<><CellWrapper>MON</CellWrapper>
            <CellWrapper>TUE</CellWrapper>
            <CellWrapper>WED</CellWrapper>
            <CellWrapper>THU</CellWrapper>
            <CellWrapper>FRI</CellWrapper>
            <CellWrapper weekend={true}>SAT</CellWrapper>
            <CellWrapper weekend={true}>SUN</CellWrapper></>)}
            {weekCalendar.map((dayItem) => (<CellWrapperOfDate key={nanoid()} color="#343434">{!isToday(dayItem) && format(dayItem, 'd')}
                {isToday(dayItem) && <CurrentDay>{format(dayItem, 'd')}</CurrentDay>}</CellWrapperOfDate>))}
        </GridWrapper>
        </>
    )
}