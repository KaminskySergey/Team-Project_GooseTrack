import { ToolsWrapper } from "./CalendarTools.styled"
import { PeriodPaginator } from "./PeriodPaginator/PeriodPaginator"
import { PeriodTypeSelect } from "./PeriodTypeSelect/PeriodTypeSelect"

export const CalendarTools = ({isChoosedMonth, changeAskDay, askDay, calendar, handleChooseMonth, handleChooseDay}) => {
    // console.log(isChoosedMonth, 'isChoosedMonth')
    // console.log(changeAskDay, 'changeAskDay')
    // console.log(askDay, 'askDay')
    // console.log(calendar, 'calendar')
    // console.log(toogleChooseMonth, 'toogleChooseMonth')
    
    return (
        <ToolsWrapper>
        <PeriodPaginator isChoosedMonth={isChoosedMonth} 
        askDay={askDay} 
        changeAskDay={changeAskDay} 
        calendar={calendar}/>
        <PeriodTypeSelect 
        ischoosedmonth={isChoosedMonth} 
        askDay={askDay}
        handleChooseMonth={handleChooseMonth}
        handleChooseDay={handleChooseDay}/>
        </ToolsWrapper>
    )
}