import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:9090',
  realm: 'FurniKart',           // Change to your realm name
  clientId: 'FurniKart-client'      // Change to your client ID
});

export default keycloak;
