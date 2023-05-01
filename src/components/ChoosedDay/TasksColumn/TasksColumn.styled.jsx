import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 8px;
  background-color: ${props => props.theme.mainBackgroundColor};
  padding: 18px 18px 28px 14px;
  max-width: 344px;
  width: calc((100% - 3 * 27) / 3);
  margin: 15px;
`;
