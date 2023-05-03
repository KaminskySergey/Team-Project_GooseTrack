import styled from 'styled-components';
// import { style } from 'styled-system';

export const TaskItem = styled.div`
  display: block;
  max-width: 299px;
  min-height: 108px;
  border-radius: 8px;
  padding-top: 14px;
  padding-right: 14px;
  padding-bottom: 18px;
  padding-left: 15px;
  transition: ${props => props.theme.defaultTransition};
  background-color: ${props => props.theme.secondaryBackgroundColor};
  &:not(:last-child) {
    margin-bottom: 18px;
  }

  @media (min-width: 768px) {
    max-width: 301px;
    min-height: 112px;
    padding-left: 14px;

    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
`;

export const TodoText = styled.p`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 90%;
  margin-bottom: 28px;

  color: ${props => props.theme.mainTextColor};
  font-family: 'InterNormal';
  font-size: 14px;
  font-size: 14px;
  line-height: 18px;
  line-height: calc((18 / 14) * 100%);

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const ImgWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid ${props => props.theme.accentColor};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3f3ff;
`;
export const AvatarImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid ${props => props.theme.mainTextColor};
  margin-right: 8px;
`;

export const NameFirstLetter = styled.p`
  font-family: 'InterBolt';
  font-size: 20px;
  line-height: calc((24 / 18) * 100%);
  color: ${props => props.theme.accentColor};
`;

export const ToolBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StatusRed = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;

  font-family: 'InterSemiBoltMinSize';
  font-size: 10px;
  line-height: 1.2;
  color: white;

  background-color: #f00;
`;
export const StatusLow = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;

  font-family: 'InterSemiBoltMinSize';
  font-size: 10px;
  line-height: 1.2;
  color: white;

  background-color: #0015ff;
`;

export const StatusMedium = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;

  font-family: 'InterSemiBoltMinSize';
  font-size: 10px;
  line-height: 1.2;
  color: white;

  background-color: #ff7700;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;
