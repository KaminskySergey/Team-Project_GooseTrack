import styled from 'styled-components';

export const ReviewContainer = styled.div`
  margin-top: 64px;
  max-width: 570px;
`;

export const Item = styled.h3`
  text-align: center;
  font-family: 'InterBolt';
  font-weight: 700px;
  font-size: 25px;
  margin-bottom: 40px;
  text-transform: uppercase;
  display: block;
  color: ${props => props.theme.accentColor};
`;

export const ReviewMain = styled.div`
  border: 1px solid;
  border-color: #cec9c1;
  border-radius: 8px;
  padding: 25px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 18px;
`;

export const Review = styled.div`
  display: flex;
  /* border: 1px solid;
  border-color: #cec9c1;
  border-radius: 4px; */
`;

export const ItemUser = styled.h4`
  font-weight: 700px;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 13px;
`;

export const Text = styled.p`
  font-family: 'InterNormal';
  font-weight: 500px;
  font-size: 14px;
  line-height: 18px;

  color: rgba(17, 17, 17, 0.7);
  margin-top: 13px;
`;

export const AboutContainer = styled.div`
  font-family: 'InterBolt';
  margin-left: 18px;
`;

export const ImageContainer = styled.div`
  display: block;
`;
