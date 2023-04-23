import { addIcon } from '../../../../images/svg/index';

import { Box, ColumnTitle, BtnAdd } from './ColumnHeadBar.styled';

export const ColumnHeadBar = () => {
  return (
    <Box>
      <ColumnTitle>To do</ColumnTitle>
      <BtnAdd>
        <img src={addIcon} alt="add" />
      </BtnAdd>
    </Box>
  );
};
