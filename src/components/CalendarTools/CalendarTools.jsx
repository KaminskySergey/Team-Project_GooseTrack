import { ToolsWrapper } from "./CalendarTools.styled"
import { PeriodPaginator } from "./PeriodPaginator/PeriodPaginator"
import { PeriodTypeSelect } from "./PeriodTypeSelect/PeriodTypeSelect"

export const CalendarTools = ({isChoosedMonth, changeAskDay, askDay, calendar, toogleChooseMonth}) => {
    // console.log(isChoosedMonth, 'isChoosedMonth')
    // console.log(changeAskDay, 'changeAskDay')
    // console.log(askDay, 'askDay')
    // console.log(calendar, 'calendar')
    // console.log(toogleChooseMonth, 'toogleChooseMonth')
    
    return (
        <ToolsWrapper>
        <PeriodPaginator isChoosedMonth={isChoosedMonth} askDay={askDay} changeAskDay={changeAskDay} calendar={calendar}/>
        <PeriodTypeSelect toogleChooseMonth={toogleChooseMonth}/>
        </ToolsWrapper>
    )
}