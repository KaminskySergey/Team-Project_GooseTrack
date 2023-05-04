import styled from 'styled-components';

export const Name = styled.p`
  font-family: 'InterBolt';
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  transition: ${props => props.theme.defaultTransition};
  color: ${props => props.theme.mainTextColor};

  @media (min-width: 768px) {
    font-size: 18;
    line-height: calc((18 / 18) * 100%);
  }
`;
export const ImgWrapper = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1.8px solid ${props => props.theme.accentColor};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3f3ff;

  @media (min-width: 768px) {
    height: 44px;
    width: 44px;
  }
`;
export const Avatar = styled.img`
  object-fit: cover;
`;
export const NameFirstLetter = styled.p`
  font-family: 'InterBolt';
  font-size: 18px;
  line-height: calc((8 / 18) * 100%);
  color: ${props => props.theme.accentColor};

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc((24 / 18) * 100%);
  }
`;
