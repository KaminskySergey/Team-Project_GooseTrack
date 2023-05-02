import DatePicker from 'react-multi-date-picker';
import weekends from 'react-multi-date-picker/plugins/highlight_weekends';

import { Label, MessageError } from 'components/UserFild';
import './styles.css';

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const customStyle = {
  width: '100%',
  fontFamily: 'InterSemiBolt',
  fontSize: '16px',
  lineHeight: 'calc((18/16) * 100%)',
  margin: 0,
  padding: '0 14px',
  color: `${props => props.theme.mainTextColor}`,
  height: '42px',
  borderRadius: '8px',
  borderColor: 'rgb(17 17 17 / 15%)',

  // height: '60px',
  // backgroundColor: '#3E85F3',
  // color: 'white',

  //
  // height: 42px;
  // border-radius: 8px;
  // padding: 0px 14px;
  // border-color: rgba(17, 17, 17, 0.15);
  // color: rgb(17, 17, 17);
  // font-weight: 600;
  //
  // font-size: 14px;
  // line-height: calc(128.571%);
};

// const customHoverStyle = {
//   backgroundColor: 'white',
//   color: '#3E85F3',
// };

export function GooseDatePicker({ title, name, date, onChange }) {
  return (
    <Label>
      {title}
      <DatePicker
        name={name}
        value={date}
        onChange={value => onChange(value)}
        format="DD/MM/YYYY"
        editable={false}
        weekDays={weekDays}
        weekStartDayIndex={1}
        highlightToday={false}
        plugins={[weekends()]}
        style={customStyle}
        // monthYearSeparator={' '} //Викидає помилку, треба розібратися
        // arrow={false}

        // calendar={gregorian}
        // locale={gregorian_en}
        // weekPicker={false}
        // showOtherDays={true}
        // onlyShowInRangeDates={false}
        // hoverStyle={customHoverStyle}
        // disabledDates={[
        //   { daysOfWeek: [6] }, // Субота
        //   { daysOfWeek: [7] }, // Неділя
        // ]}
        // disabledDates={isDateDisabled}
        // inputClass="datepicker-input"
        // className="rmdp-prime"
        // containerClassName="custom-container"

        // render={({ date }) => {
        //   return (
        //     <>
        //       {/* <span>{date.getDate()}</span> */}
        //       {/* <span>{date.getMonth() + 1}</span> */}
        //       {/* <span>{date.getFullYear()}</span> */}
        //     </>
        //   );
        // }}
      />
      <MessageError name={name} component="p" />
    </Label>
  );
}

// <DatePicker
//  mapDays={({ date }) => {
//    let isWeekend = [0, 6].includes(date.weekDay.index);
//
//    if (isWeekend)
//      return {
//        disabled: true,
//        style: { color: '#ccc' },
//        onClick: () => alert('weekends are disabled'),
//      };
//  }}
// />;








