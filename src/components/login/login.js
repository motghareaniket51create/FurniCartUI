import { useKeycloak } from '@react-keycloak/web';
import { LoginWrapper, FormContainer, Button } from './login.styled';

const Login = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return (
      <LoginWrapper>
        <FormContainer>
          <h2>Loading...</h2>
        </FormContainer>
      </LoginWrapper>
    );
  }

  if (!keycloak.authenticated) {
    return (
      <LoginWrapper>
        <FormContainer>
          <h2>Keycloak Authentication</h2>
          <p>You will be redirected to login shortly...</p>
        </FormContainer>
      </LoginWrapper>
    );
  }

  return (
    <LoginWrapper>
      <FormContainer>
        <h2>Welcome, {keycloak.tokenParsed?.preferred_username}</h2>
        <p>You are successfully authenticated!</p>
        <Button onClick={() => keycloak.logout()}>Logout</Button>
      </FormContainer>
    </LoginWrapper>
  );
};

export default Login;
