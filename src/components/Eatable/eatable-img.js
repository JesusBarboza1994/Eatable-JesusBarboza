import styled from '@emotion/styled'
import { colors } from '../../styles'
import img from './Eatable.png'

const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  gap:12px;
  justify-content: center;
  align-items:center
`

const Text = styled.p`
  color: ${colors.orange["600"]};
  font-weight: 600;
  font-size:10px;
  letter-spacing: 0.05em;
`

export default function Eatable(){
  return(
    <Wrapper>
      <img src={img} alt={"Nadaaa"}/>
      <Text>Food for Everyone</Text>
    </Wrapper>
  )
}