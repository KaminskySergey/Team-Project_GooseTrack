import { format, subDays, addDays, subMonths, addMonths } from "date-fns";
import { CurrentDate, CurrentWrapper, BiChevronLeftStyled, BiChevronRightStyled, LinkPeriodPaginator, ConteinerForButtons } from "./PeriodPaginator.styled";


export const PeriodPaginator = ({isChoosedMonth, changeAskDay, askDay}) => {
    const date = isChoosedMonth ? format(askDay, 'MMMM yyyy') : format(askDay, 'dd MMMM yyyy');
    const nextDay = format(addDays(askDay, 1), 'ddMMMMyyyy');
    const prevDay = format(subDays(askDay, 1), 'ddMMMMyyyy');
    const nextMonth = format(addMonths(askDay, 1), 'MMMMyyyy');
    const prevMonth = format(subMonths(askDay, 1), 'MMMMyyyy');
    
    
  
    return (
        <CurrentWrapper>
            <CurrentDate>{date}</CurrentDate>
            <ConteinerForButtons>
                {!isChoosedMonth ? 
                (<><LinkPeriodPaginator to={`/calendar/day/${prevDay}`} onClick={() => changeAskDay(-1)}><BiChevronLeftStyled/></LinkPeriodPaginator>
                <LinkPeriodPaginator to={`/calendar/day/${nextDay}`} onClick={() => changeAskDay(1)}><BiChevronRightStyled/></LinkPeriodPaginator></>) 
                :
                (<><LinkPeriodPaginator to={`/calendar/month/${prevMonth}`} onClick={() => changeAskDay(-1)}><BiChevronLeftStyled/></LinkPeriodPaginator>
                <LinkPeriodPaginator to={`/calendar/month/${nextMonth}`} onClick={() => changeAskDay(1)}><BiChevronRightStyled/></LinkPeriodPaginator></>)
                }
                
            </ConteinerForButtons>
        </CurrentWrapper>
    )
};