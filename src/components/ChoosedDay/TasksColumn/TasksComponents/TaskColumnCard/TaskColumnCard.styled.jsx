import styled from 'styled-components';

export const Box = styled.div`
  display: block;
  max-width: 299px;
  min-height: 108px;
  border-radius: 8px;
  padding-top: 14px;
  padding-right: 14px;
  padding-bottom: 18px;
  padding-left: 15px;
  background-color: ${p => p.theme.colors.muted};
  not:last-child {
    margin-bottom: 18px;
  }

  @media (min-width: 768px) {
    max-width: 301px;
    min-height: 112px;
    padding-left: 14px;

    not:last-child {
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

  color: ${p => p.theme.colors.text};
  font-family: 'InterNormal', sans-serif;
  font-size: 14px;
  line-height: 1.29;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;
export const AvatarImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid #3e85f3;
  margin-right: 8px;
`;

export const ToolBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Status = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;

  font-family: 'InterSemiBoltMinSize';
  font-size: 10px;
  line-height: 1.2;
  color: ${p => p.theme.colors.muted};

  background-color: ${p => {
    if (p.status === 'Medium') {
      return p.theme.colors.statusMedium;
    }
    if (p.status === 'High') {
      return p.theme.colors.statusHigh;
    }
    if (p.status === 'Low') {
      return p.theme.colors.statusLow;
    }
  }};
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
`;
