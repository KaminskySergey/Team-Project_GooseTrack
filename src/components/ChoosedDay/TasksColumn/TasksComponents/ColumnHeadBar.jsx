import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTasks } from '../../../../redux/tasks/operations';

import { Box, ColumnTitle, BtnAdd, BtnIcon } from './ColumnHeadBar.styled';

const priorityTasks = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  High: 'High',
};

export const ColumnHeadBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState('');
  const [data, setData] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [priority, setPriority] = useState('');
  const [column, setColumn] = useState('');

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'task':
        setTask(value);
        break;
      case 'data':
        setData(value);
        break;
      case 'startTime':
        setStartTime(value);
        break;
      case 'endTime':
        setEndTime(value);
        break;
      case 'priority':
        setPriority(value);
        break;
      case 'column':
        setColumn(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const tasksInfo = { task, data, endTime, startTime, priority, column };
    dispatch(addTasks(tasksInfo));

    setTask('');
    setData('');
    setStartTime('');
    setEndTime('');
    setPriority('');
    setColumn('');
  };

  return (
    <Box>
      <ColumnTitle>To do</ColumnTitle>
      <BtnAdd onClick={handleOpenModal}>
        <BtnIcon />
      </BtnAdd>

      {/* {isOpen && (
        <div>
          <form action="" onSubmit={handleSubmit}>
            <label>
              задача
              <input
                type="text"
                name="task"
                value={task}
                onChange={handleChange}
              />
            </label>
            <label>
              дата
              <input
                type="date"
                name="data"
                value={data}
                onChange={handleChange}
              />
            </label>
            <label>
              начало
              <input
                type="time"
                name="startTime"
                value={startTime}
                onChange={handleChange}
              />
            </label>
            <label>
              конец
              <input
                type="time"
                name="endTime"
                value={endTime}
                onChange={handleChange}
              />
            </label>
            <label>
              лайт
              <input
                type="radio"
                name="priority"
                checked={priority === priorityTasks.LOW}
                value={priorityTasks.LOW}
                onChange={handleChange}
              />
            </label>
            <label>
              медиум
              <input
                type="radio"
                name="priority"
                checked={priority === priorityTasks.MEDIUM}
                value={priorityTasks.MEDIUM}
                onChange={handleChange}
              />
            </label>
            <label>
              хард
              <input
                type="radio"
                name="priority"
                checked={priority === priorityTasks.High}
                value={priorityTasks.High}
                onChange={handleChange}
              />
            </label>
            <label>
              категория
              <input
                type="text"
                name="column"
                value={column}
                onChange={handleChange}
              />
            </label>
            <button type="submit">отправіть</button>
          </form>
        </div>
      )} */}
    </Box>
  );
};
