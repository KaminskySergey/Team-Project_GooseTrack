import { format } from 'date-fns';
import {
  ChooseWrapper,
  ChangePeriod
} from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = ({ handleChooseMonth, handleChooseDay, ischoosedmonth, askDay }) => {
  const day = format(askDay, 'ddMMMMyyyy');
  const month = format(askDay, 'MMMMyyyy')

  return (
    <ChooseWrapper>
      <ChangePeriod onClick={handleChooseMonth} ischoosedmonth={ischoosedmonth.toString()} to={`/calendar/month/${month}`}>
        Month
      </ChangePeriod>
      <ChangePeriod onClick={handleChooseDay} ischoosedmonth={ischoosedmonth.toString()} to={`/calendar/day/${day}`}>
        Day
      </ChangePeriod>
    </ChooseWrapper>
  );
};
