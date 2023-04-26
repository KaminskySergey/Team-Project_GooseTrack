import { ActivePeriod, ChooseWrapper, NotActivePeriod } from "./PeriodTypeSelect.styled";


export const PeriodTypeSelect = ({toogleChooseMonth}) => {
    return (
        <ChooseWrapper>
            <ActivePeriod onClick={toogleChooseMonth}>Month</ActivePeriod>
            <NotActivePeriod onClick={toogleChooseMonth}>Day</NotActivePeriod>
        </ChooseWrapper>
    )
}

