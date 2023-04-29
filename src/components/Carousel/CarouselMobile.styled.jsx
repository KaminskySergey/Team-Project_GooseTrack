import styled from 'styled-components';

export const ReviewContainer = styled.div`
  margin-top: 64px;
  text-align: center;
`;

export const Item = styled.h3`
  font-family: 'InterBolt';
  font-weight: 700px;
  font-size: 25px;
  margin-bottom: 40px;
  text-transform: uppercase;
  display: block;
  color: ${props => props.theme.accentColor};
`;

export const ReviewMain = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 330px;
  border: 1px solid;
  border-color: #cec9c1;
  border-radius: 8px;
  padding: 22px;
`;

export const ItemUser = styled.h4`
  text-align: left;
  font-family: 'InterBolt';
  font-weight: 700px;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 13px;
`;

export const ButtonContainer = styled.div`
  margin-top: 18px;
`;

export const Text = styled.p`
  text-align: left;
  font-family: 'InterNormal';
  font-weight: 500px;
  font-size: 14px;
  line-height: 18px;

  color: rgba(17, 17, 17, 0.7);
  margin-top: 28px;
`;
export const Review = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  display: block;
  margin-right: 18px;
`;
