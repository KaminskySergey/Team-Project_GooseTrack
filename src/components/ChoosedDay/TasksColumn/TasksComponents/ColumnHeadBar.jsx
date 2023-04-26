

import { Box, ColumnTitle, BtnAdd, BtnIcon } from './ColumnHeadBar.styled';

export const ColumnHeadBar = () => {
  return (
    <Box>
      <ColumnTitle>To do</ColumnTitle>
      <BtnAdd>
        <BtnIcon />
        {/* <img src={addIcon} alt="add" /> */}
      </BtnAdd>
    </Box>
  );
};
