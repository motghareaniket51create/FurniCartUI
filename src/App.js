import logo from './favicon.svg';
import './App.css';
import Login from './components/login/login';
import Home from './components/home/home';
import { Routes,Route, Navigate } from 'react-router-dom';

function App({keycloak}) {
  return (
    <Routes>
      <Route path="/Login" element={<Login keycloak={keycloak} />} />
      <Route path="/Home" element={<Home keycloak={keycloak} />} />
      <Route path="*" element={<Navigate to="/Login" />} />
    </Routes>
  );
}

export default App;
