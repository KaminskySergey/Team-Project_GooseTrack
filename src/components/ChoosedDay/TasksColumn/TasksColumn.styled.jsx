import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 18px 18px 10px 18px;
  min-width: 301px;
  width: 100%;
  max-height: 432px;
  list-style: none;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  background-color: ${props => props.theme.mainBackgroundColor};
  @media (min-width: 768px) {
    min-width: 344px;
    max-height: 568px;
    padding: 18px 23px 28px 20px;
  };

  @media (min-width: 1280px) {
    min-width: 290px;
  }
`;


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }

  font-family: 'InterBolt';
  color: ${props => props.theme.buttonAddTaskColor};

  font-weight: 700;
`;
