import { CalendarTable } from "../CalendarTable/CalendarTable"
import { MonthCalendarHead } from "../MonthCalendarHead/MonthCalendarHead"

export const ChoosedMonth = ({calendar, askDay}) => {
    return (
        <>
        <MonthCalendarHead/>
        <CalendarTable calendar={calendar} askDay={askDay}/>
        </>
    )
}