import {
  ChooseWrapper,
  ChangePeriod
} from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = ({ toogleChooseMonth, ischoosedmonth }) => {
  return (
    <ChooseWrapper>
      <ChangePeriod onClick={toogleChooseMonth} ischoosedmonth={ischoosedmonth.toString()} to="/calendar/month">
        Month
      </ChangePeriod>
      <ChangePeriod onClick={toogleChooseMonth} ischoosedmonth={ischoosedmonth.toString()} to="/calendar/day">
        Day
      </ChangePeriod>
    </ChooseWrapper>
  );
};
