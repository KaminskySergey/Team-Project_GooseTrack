import DatePicker from 'react-date-picker';
import { useSelector } from 'react-redux';
import { selectIsTheme } from 'redux/theme/selectors';
import { Label } from 'components/UserFild';

import { ReactComponent as ArrowDown } from 'images/svg/chevron-down.svg';
import { ReactComponent as ArrowLeft } from 'images/svg/chevron-left.svg';
import { ReactComponent as ArrowRight } from 'images/svg/chevron-right.svg';

import './DatePicker.css';
import './Calendar.css';

export const DateSelection = ({ title, name, date, changeDate }) => {
  const darkThema = useSelector(selectIsTheme);

  return (
    <Label>
      {title}
      <DatePicker
        onChange={date => changeDate(name, date)}
        value={date}
        name={name}
        format="dd/MM/yyyy"
        locale="en-GB"
        maxDate={new Date()}
        calendarClassName="my-calendar"
        className={
          darkThema
            ? ['my-date-picker', 'my-date-picker--dark']
            : 'my-date-picker'
        }
        clearIcon={null}
        calendarIcon={<ArrowDown />}
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString('en-GB', { weekday: 'short' }).slice(0, 1)
        }
        goToRangeStartOnSelect={false}
        next2Label={null}
        prev2Label={null}
        prevLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        showNeighboringMonth={false}
      />
    </Label>
  );
};
