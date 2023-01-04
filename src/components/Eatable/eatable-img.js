import styled from '@emotion/styled'
import img from './Eatable.png'

const Wrapper = styled.div`
  width:100%;
  height: 382px;
  display: flex;
  justify-content: center;
  align-items:center
`

export default function Eatable(){
  return(
    <Wrapper>
      <img src={img} alt={"Nadaaa"}/>
    </Wrapper>
  )
}