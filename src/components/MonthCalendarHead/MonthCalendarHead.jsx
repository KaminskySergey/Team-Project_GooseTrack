import { CellWrapper, GridWrapper} from "./MonthCalendarHead.styled";
import { useResponce } from "hooks/responce";

export const MonthCalendarHead = () => {
    const {isMobile} = useResponce();
    return (    
        <GridWrapper>
            {isMobile ? (<><CellWrapper>M</CellWrapper>
            <CellWrapper>T</CellWrapper>
            <CellWrapper>W</CellWrapper>
            <CellWrapper>T</CellWrapper>
            <CellWrapper>F</CellWrapper>
            <CellWrapper weekend={true}>S</CellWrapper>
            <CellWrapper weekend={true}>S</CellWrapper></>) : (<><CellWrapper>MON</CellWrapper>
            <CellWrapper>TUE</CellWrapper>
            <CellWrapper>WED</CellWrapper>
            <CellWrapper>THU</CellWrapper>
            <CellWrapper>FRI</CellWrapper>
            <CellWrapper weekend={true}>SAT</CellWrapper>
            <CellWrapper weekend={true}>SUN</CellWrapper></>)}
        </GridWrapper>      
    )
}