import { Formik, Form, Field } from 'formik';
// import { useState } from 'react';
import { Radio } from './ModalTodo.styled';

const ModalTodo = () => {
  //   const [value, setValue] = useState('00:00');

  //  const onChange = (timeValue) => {
  //     setValue(timeValue);
  //  }

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: '',
          date: '2023-05-01T21:00:00.000+00:00',
          startTime: '10:30',
          endTime: '15:00',
          priority: '',
          category: 'toDo',
        }}
      >
        <Form>
          <label>
            <p>Title</p>
            <Field type="text" name="name" placeholder="Enter text" />
          </label>
          <label>
            <p>Time</p>
          </label>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Radio type="radio" name="priority" value="Low" />
              Low
            </label>
            <label>
              <Field type="radio" name="priority" value="Medium" />
              Medium
            </label>
            <label>
              <Field type="radio" name="priority" value="High" />
              High
            </label>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ModalTodo;
