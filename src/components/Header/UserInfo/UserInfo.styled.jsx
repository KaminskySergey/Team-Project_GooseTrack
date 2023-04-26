import styled from 'styled-components';

export const Name = styled.p`
  font-family: 'InterBolt';
  font-size: 18px;
  line-height: 18px;
  color: ${props => props.theme.mainTextColor};
`;
export const ImgWrapper = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  border: 1.8px solid ${props => props.theme.accentColor};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3f3ff;
  cursor: pointer;
`;
export const Avatar = styled.img`
  object-fit: cover;
`;
export const NameFirstLetter = styled.p`
  font-family: 'InterBolt';
  font-size: 24px;
  line-height: 18px;
  color: ${props => props.theme.accentColor};
`;
