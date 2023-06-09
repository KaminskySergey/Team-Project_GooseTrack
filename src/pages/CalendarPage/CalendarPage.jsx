import {
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfToday,
  isSameDay,
  addDays,
  addMonths,
  startOfDay,
} from 'date-fns';

import { startOfWeek } from 'date-fns';
import { CalendarTools } from '../../components/CalendarTools/CalendarTools';
import { useEffect, useState } from 'react';
import { ChoosedMonth } from '../../components/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from '../../components/ChoosedDay/ChoosedDay';
import { useDispatch } from 'react-redux';
import { fetchTasksAll } from 'redux/tasks/operations';
import { useParams } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsitems } from 'redux/tasks/selectors';
// import { fetchTasksAll } from 'redux/tasks/operations';

export default function CalendarPage() {
  const [askDay, setAskDay] = useState(startOfToday());
  const [isChoosedMonth, setIsChoosedMonth] = useState(true);

  const startMonth = startOfMonth(askDay);
  const startDay = startOfWeek(startMonth, { weekStartsOn: 1 });
  const endMonth = endOfMonth(askDay);
  const endDay = endOfWeek(endMonth, { weekStartsOn: 1 });
  const firstDayOfNextMonth = addDays(endDay, 1);
  const firstDayOFWeek = startOfWeek(askDay, { weekStartsOn: 1 });
  const lastDayOfWeek = endOfWeek(askDay, { weekStartsOn: 1 });
  const startNextWeek = addDays(lastDayOfWeek, 1);

  let newAskDate = useParams();

  useEffect(() => {
    if (newAskDate.date) {
      const formatedNewAskDate = new Date(newAskDate.date);
      setAskDay(startOfDay(formatedNewAskDate));
      setIsChoosedMonth(false);
      // setIsChoosedMonth(false);
    }
  }, [newAskDate]);

  let calendar = [];
  let weekCalendar = [];
  let day = startDay;
  let weekDay = firstDayOFWeek;
  while (!isSameDay(day, firstDayOfNextMonth)) {
    calendar.push(day);
    day = addDays(day, 1);
  }

  while (!isSameDay(weekDay, startNextWeek)) {
    weekCalendar.push(weekDay);
    weekDay = addDays(weekDay, 1);
  }

  const changeAskDay = value => {
    if (!isChoosedMonth) {
      weekCalendar = [];
      return setAskDay(addDays(askDay, value));
    }

    if (isChoosedMonth) {
      return setAskDay(addMonths(askDay, value));
    }
  };

  const handleChooseMonth = () => {
    setIsChoosedMonth(true);
  };

  const handleChooseDay = () => {
    setIsChoosedMonth(false);
  };

  const newFormat = new Date(askDay);

  const isoString = newFormat.toISOString().substr(0, 7);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasksAll(isoString));
  }, [dispatch, isoString]);
  return (
    <>
      <CalendarTools
        calendar={calendar}
        changeAskDay={changeAskDay}
        isChoosedMonth={isChoosedMonth}
        askDay={askDay}
        handleChooseMonth={handleChooseMonth}
        handleChooseDay={handleChooseDay}
      />
      {isChoosedMonth ? (
        <ChoosedMonth calendar={calendar} askDay={askDay} />
      ) : (
        <ChoosedDay weekCalendar={weekCalendar} askDay={askDay} />
      )}
    </>
  );
}
