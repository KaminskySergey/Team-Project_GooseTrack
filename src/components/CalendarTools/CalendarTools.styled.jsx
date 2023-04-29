import styled from "styled-components";

export const ToolsWrapper = styled.div`
@media(min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  };`

export const CurrentWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 18px;`;

export const ChooseWrapper = styled.div`
margin-bottom: 24px;
display: flex`;

export const CurrentMonth = styled.span`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 6px 12px;
background: ${props => props.theme.accentColor};
border-radius: 8px;
color: ${props => props.theme.secondaryTextColor};
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 1.29;
text-align: center;
text-transform: uppercase;

@media(min-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
    line-height: 1.12;
    margin-right: 8px;
  };

`;

