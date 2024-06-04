const { spec, request } = require('pactum');
const baseUrl = "https://jsonplaceholder.typicode.com"

describe('Post test suite', ()=>{
    before(async() =>{
        request.setDefaultTimeout(10000);
    });
    it('get photo test', async () =>{
        await spec()
        .get(`${baseUrl}/photos`)
        //.inspect()
        .expectStatus(200)
        .expectBodyContains("albumId");
    });

})