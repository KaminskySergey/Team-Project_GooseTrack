import { CellWrapper, GridWrapper} from "./MonthCalendarHead.styled";

export const MonthCalendarHead = () => {
    return (    
        <GridWrapper>
            <CellWrapper>M</CellWrapper>
            <CellWrapper>T</CellWrapper>
            <CellWrapper>W</CellWrapper>
            <CellWrapper>T</CellWrapper>
            <CellWrapper>F</CellWrapper>
            <CellWrapper weekend={true}>S</CellWrapper>
            <CellWrapper weekend={true}>S</CellWrapper>
        </GridWrapper>      
    )
}