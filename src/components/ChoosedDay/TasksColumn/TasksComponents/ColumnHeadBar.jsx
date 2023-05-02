import { Box, ColumnTitle, BtnAdd, BtnIcon } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title }) => {
  switch (title) {
    case 'toDo':
      return 'To do';
    case 'inProgress':
      return 'In Progress';
    case 'done':
      return 'Done';
    default:
      break;
  }

  return (
    <Box>
      <ColumnTitle>{title}</ColumnTitle>
      <BtnAdd>
        <BtnIcon />
      </BtnAdd>
    </Box>
  );
};
