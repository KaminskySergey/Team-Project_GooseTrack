import { Formik, Form, ErrorMessage } from 'formik';
import { FormControl,  RadioGroup, Box, Radio } from '@mui/material';


import { StyledInput,  StyledInputTime,  StyledTextField, StyledTextFieldTime, TitleInput, StyledFormControlLabel, ButtonForm, Edit } from './ModalTodo.styled';
import { useDispatch } from 'react-redux';
import { editTasks } from 'redux/tasks/operations';






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

const ModalTodo = ({ onSubmit, handleAddTodo, currentTodo, handleToggle}) => {
  const dispatch = useDispatch()
  

  const handleSubmit =  (values, { resetForm }) => {
      if(!currentTodo){
          handleAddTodo(values)
          resetForm()
          // handleToggle()
          return;
      }
      
      const todo = {
        title: values.title,
        startTime: values.startTime,
        endTime: values.endTime,
        priority: values.priority,
        _id: currentTodo._id,
        category: values.category
      }
      
      dispatch(editTasks(todo))
      resetForm()
      
      handleToggle()
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
              <RadioGroup style={{ display: 'block' }} name="priority" value={values.priority} onChange={e => setFieldValue('priority', e.target.value)}>
                <StyledFormControlLabel value="low" control={<Radio sx={{

    marginLeft: "8px",               
    marginRight: '6px',
      '& .MuiSvgIcon-root': {
      width: 10,
      height: 10,
      fill: '#72c2f8',
      transform: 'none',
      padding: 0,
      backgroundColor: '#72c2f8',
      borderRadius: 50,
    },

   '&.Mui-checked': {
      border: '2px solid #72C2F84d',
      padding: '2px',
      marginLeft: "4px",
      marginRight: "2px",
     '& .MuiSvgIcon-root': {
            
          fontSize: 8,
          fill: '#72c2f8',
          transform: 'none',
          padding: 0,
          backgroundColor: '#72c2f8',
            borderRadius: 50,
          },
        },
   
  }} />} label="Low" />
                <StyledFormControlLabel value="medium" control={<Radio sx={{
    marginLeft: "18px",               
    marginRight: '6px',
                  
      '& .MuiSvgIcon-root': {
      width: 10,
      height: 10,
      fill: '#f3b249',
      transform: 'none',
      padding: 0,
      backgroundColor: '#f3b249',
      borderRadius: 50,
    },
'&.Mui-checked': {
      border: '2px solid #f3b2494d',
      padding: '2px',
      marginLeft: "14px",
      marginRight: "2px",
      
          '& .MuiSvgIcon-root': {
          fontSize: 8,
          fill: '#f3b249',
          transform: 'none',
          padding: 0,
          backgroundColor: '#f3b249',
          borderRadius: 50,
          },
        },             
                      
  }}/>} label="Medium" />
                <StyledFormControlLabel value="high" control={<Radio sx={{

    marginLeft: "18px",               
    marginRight: '6px',
                  
      '& .MuiSvgIcon-root': {
      width: 10,
      height: 10,
      fill: '#ea3d65',
      transform: 'none',
      padding: 0,
      backgroundColor: '#ea3d65',
      borderRadius: 50,
    },

   '&.Mui-checked': {
      border: '2px solid #ea3d654d',
      padding: '2px',
      marginLeft: "14px",
      marginRight: "2px",
      
          '& .MuiSvgIcon-root': {
          fontSize: 8,
          fill: '#ea3d65',
          transform: 'none',
          padding: 0,
          backgroundColor: '#ea3d65',
          borderRadius: 50,
          },
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