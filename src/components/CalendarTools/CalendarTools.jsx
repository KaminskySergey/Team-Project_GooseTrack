import { ToolsWrapper } from './CalendarTools.styled';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';

export const CalendarTools = ({
  isChoosedMonth,
  changeAskDay,
  askDay,
  calendar,
  handleChooseMonth,
  handleChooseDay,
}) => {
  return (
    <ToolsWrapper>
      <PeriodPaginator
        isChoosedMonth={isChoosedMonth}
        askDay={askDay}
        changeAskDay={changeAskDay}
        calendar={calendar}
      />
      <PeriodTypeSelect
        ischoosedmonth={isChoosedMonth}
        askDay={askDay}
        handleChooseMonth={handleChooseMonth}
        handleChooseDay={handleChooseDay}
      />
    </ToolsWrapper>
  );
};
