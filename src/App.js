import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { colors } from "./styles";

const Section = styled.div`
  margin: 96px auto;
  
`;
const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

`;

function App() {
  const { user } = useAuth();
  return(
    <Section>
       <Container>
        {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
       </Container>
    </Section>
  )
}

export default App;
