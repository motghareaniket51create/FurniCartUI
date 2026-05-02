import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:9090',
    realm: 'FurniKart',
    clientId: 'FurniKart-client',
});

export default keycloak;