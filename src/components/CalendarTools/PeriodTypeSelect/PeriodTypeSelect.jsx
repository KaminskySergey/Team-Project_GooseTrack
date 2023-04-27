import {
  ActivePeriod,
  ChooseWrapper,
  NotActivePeriod,
} from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = ({ toogleChooseMonth }) => {
  return (
    <ChooseWrapper>
      <ActivePeriod onClick={toogleChooseMonth} to="/calendar/month">
        Month
      </ActivePeriod>
      <NotActivePeriod onClick={toogleChooseMonth} to="/calendar/day">
        Day
      </NotActivePeriod>
    </ChooseWrapper>
  );
};
