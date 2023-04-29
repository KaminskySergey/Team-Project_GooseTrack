import { format } from "date-fns";
import { CurrentDate, CurrentWrapper, BiChevronLeftStyled, BiChevronRightStyled, ButtonPeriodPaginator, ConteinerForButtons } from "./PeriodPaginator.styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTasksAll } from "redux/tasks/operations";

export const PeriodPaginator = ({isChoosedMonth, changeAskDay, calendar, askDay}) => {
    const date = isChoosedMonth ? format(askDay, 'MMMM yyyy') : format(askDay, 'dd MMMM yyyy');
    console.log(date, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    
    
  
    return (
        <CurrentWrapper>
            <CurrentDate>{date}</CurrentDate>
            <ConteinerForButtons>
                <ButtonPeriodPaginator onClick={() => changeAskDay(-1)}><BiChevronLeftStyled/></ButtonPeriodPaginator>
                <ButtonPeriodPaginator onClick={() => changeAskDay(1)}><BiChevronRightStyled/></ButtonPeriodPaginator>
            </ConteinerForButtons>
        </CurrentWrapper>
    )
};