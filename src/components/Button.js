import styled from "@emotion/styled"
import { colors } from "../styles"

export default function Button({children}){
  const StyledButton = styled.button`
    width:100%;
    height:70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.orange["600"]};
    border-radius: 30px;
    border-style:none;
    color:${colors.white};
  `
  return(
    <StyledButton>{children}</StyledButton>

  )
}