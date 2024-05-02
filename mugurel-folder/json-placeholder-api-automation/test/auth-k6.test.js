const { spec, request } = require('pactum');
//const { faker } = require('@faker-js/faker');
const {doLogin} = require('../utils/auth')
const baseUrl = "https://test-api.k6.io";

describe('k6 auth test suite', ()=>{
    let tokenId = "";
    before(async () => {
        request.setDefaultTimeout(10000);

        tokenId = await doLogin("eeeeewqwqeqweqweqweqwe","qweqwewewqeqwe" );
    });

    it('auth k6 test -JWT', async () => {
        await spec()
        .get(`${baseUrl}/my/crocodiles/`)
        .withHeaders("Authorization", "Bearer " +tokenId)
        .expectStatus(200);
    });
});