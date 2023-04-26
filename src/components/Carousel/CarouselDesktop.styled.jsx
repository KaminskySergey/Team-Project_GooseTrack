import styled from 'styled-components';

export const ReviewContainer = styled.div`
  margin-top: 64px;
  text-align: center;
  max-width: 1000px;
`;

export const Item = styled.h3`
  font-family: 'InterBolt';
  font-weight: 700px;
  font-size: 25px;
  margin-bottom: 40px;
  text-transform: uppercase;
  display: block;
  color: ${props => props.theme.colors.hero};
`;

export const Review = styled.div`
  border: 1px solid;
  border-color: ${props => props.theme.colors.grey};
  border-radius: 4px;
`;

export const ButtonContainer = styled.div``;

export const UserFeedback = styled.div`
  display: flex;
`;
