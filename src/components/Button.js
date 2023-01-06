import styled from "@emotion/styled"
import { colors } from "../styles"

export default function Button({children, onClick, select}){
  const StyledButton = styled.button`
    width:100%;
    height:70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.orange["600"]};
    opacity: ${({ select }) =>
    select ? 0.6 : 1};
    border-radius: 30px;
    border-style:none;
    color:${colors.white};
  `
  return(
    <StyledButton select={select} onClick={onClick}>{children}</StyledButton>

  )
}