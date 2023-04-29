import { Formik, Form, ErrorMessage } from 'formik';
import { FormControl,  RadioGroup, Box } from '@mui/material';
import React from 'react';
import { StyledInput,  StyledInputTime,  StyledTextField, StyledTextFieldTime, TitleInput, StyledFormControlLabel, StyledRadioBlau, StyledRadioYellow, StyledRadioRed, ButtonForm, Edit } from './ModalTodo.styled';




const initialValues = {
  title: '',
  startTime: '',
  endTime: '',
  priority: 'low',
};

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title is required';
    
  }

  if (!values.startTime) {
    errors.startTime = 'Start time is required';
  }

  if (!values.endTime) {
    errors.endTime = 'End time is required';
  }

  return errors;
};

const ModalTodo = ({ onSubmit }) => {
  
  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
    resetForm()
  };


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
      {({ values, errors, touched, setFieldValue }) => (
        <Form>
          <Box marginBottom='18px' color={'red'} fontSize={12} >
          <label  htmlFor="title">
            <TitleInput>Title:</TitleInput>
            <StyledInput name="title">
              {({ field }) => (
                <StyledTextField {...field} id="title" label="Title" variant="outlined" placeholder='Enter text' error={touched.title && Boolean(errors.title)} />
              )}
            </StyledInput>
            </label>
            <ErrorMessage name="title" />
          </Box>

          <Box display='flex' justifyContent={'space-between'}>
            <Box marginBottom='28px' color={'red'} fontSize={12}>
            <label htmlFor="startTime">
              <TitleInput>Start</TitleInput>
            <StyledInputTime name="startTime">
              {({ field }) => (
                <StyledTextFieldTime {...field} id="startTime" type="time" variant="outlined"  error={touched.startTime && Boolean(errors.startTime)} />
              )}
            </StyledInputTime>
            </label>
            <ErrorMessage name="startTime" />
          </Box>

          <Box marginBottom='32px' color={'red'} fontSize={12}>
            <label htmlFor="endTime">
              <TitleInput>End</TitleInput>
            <StyledInputTime name="endTime">
              {({ field }) => (
                <StyledTextFieldTime {...field} id="endTime" type="time" variant="outlined"  error={touched.endTime && Boolean(errors.endTime)} />
              )}
            </StyledInputTime>
            </label>
            <ErrorMessage name="endTime" />
          </Box>
          </Box>

          <Box display='flex' marginBottom='32px'  flexDirection={'row'}>
            <FormControl component="fieldset">
              <RadioGroup style={{display: 'block'}}  name="priority" value={values.priority} onChange={e => setFieldValue('priority', e.target.value)}>
                <StyledFormControlLabel value="low" control={<StyledRadioBlau sx={{
    marginRight: '6px',
    
    '&.Mui-checked': {
      
      border: '2px solid #72C2F84d',
      padding: '1px'

    },
  }} />} label="Low" />
                <StyledFormControlLabel value="medium" control={<StyledRadioYellow sx={{
    marginRight: '6px',
    marginLeft: '16px',
    '&.Mui-checked': {
      
      border: '2px solid #F3B2494d',
      padding: '1px'

    },
  }}/>} label="Medium" />
                <StyledFormControlLabel value="high" control={<StyledRadioRed sx={{
    marginRight: '6px',
    marginLeft: '16px',
    '&.Mui-checked': {
      
      border: '2px solid #EA3D654d',
      padding: '1px'

    },
  }}/>} label="High" />
              </RadioGroup>
            </FormControl>
          </Box>

          <ButtonForm type="submit"  variant="contained" color="primary">
            <Edit />
            Edit
            </ButtonForm>
        </Form>
      )}
    </Formik>
  );
};

export default ModalTodo;