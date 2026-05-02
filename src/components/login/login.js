import { useKeycloak } from '@react-keycloak/web';
import { LoginWrapper, FormContainer, Button } from './login.styled';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { keycloak, initialized } = useKeycloak();

  if (keycloak.authenticated) {
    return <Navigate to="/Home" />;
  }

  return (
    <LoginWrapper>
      <FormContainer>
        <h2>Keycloak Authentication</h2>
        <p>Click login to authenticate</p>
        <Button onClick={() => keycloak.login()}>Login</Button>
      </FormContainer>
    </LoginWrapper>
  );
};

export default Login;
