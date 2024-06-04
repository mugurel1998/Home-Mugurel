const { spec, request } = require('pactum');
const baseUrl = "https://test-api.k6.io";
async function doLogin(username, parola){
    const loginResponse = await spec().post(`${baseUrl}/auth/token/login/`)
    .withBody({
    
        "username": username,
        "password": parola
    
    })
//  .inspect()
    .expectStatus(200)

    return tokenId = loginResponse.body.access;
 }

 module.exports = {
    doLogin
}