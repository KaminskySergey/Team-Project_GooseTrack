import { ToolsWrapper } from "./CalendarTools.styled"
import { PeriodPaginator } from "./PeriodPaginator/PeriodPaginator"
import { PeriodTypeSelect } from "./PeriodTypeSelect/PeriodTypeSelect"

export const CalendarTools = ({isChoosedMonth, changeAskDay, askDay, calendar, toogleChooseMonth}) => {
    return (
        <ToolsWrapper>
        <PeriodPaginator isChoosedMonth={isChoosedMonth} askDay={askDay} changeAskDay={changeAskDay} calendar={calendar}/>
        <PeriodTypeSelect toogleChooseMonth={toogleChooseMonth}/>
        </ToolsWrapper>
    )
}