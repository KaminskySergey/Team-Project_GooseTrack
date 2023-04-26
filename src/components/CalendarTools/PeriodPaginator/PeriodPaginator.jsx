import { format } from "date-fns";
import { CurrentDate, CurrentWrapper, BiChevronLeftStyled, BiChevronRightStyled, ButtonPeriodPaginator, ConteinerForButtons } from "./PeriodPaginator.styled";

export const PeriodPaginator = ({isChoosedMonth, changeAskDay, calendar, askDay}) => {
    const date = isChoosedMonth ? format(askDay, 'MMMM yyyy') : format(askDay, 'dd MMMM yyyy')
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