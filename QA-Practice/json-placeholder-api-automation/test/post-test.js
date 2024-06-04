const { spec, request } = require('pactum');

const { faker } = require('@faker-js/faker');

const baseUrl = "https://jsonplaceholder.typicode.com"

describe('Post test suite', ()=>{
    beforeEach(async() =>{
        request.setDefaultTimeout(10000);
    });
    it('get posts test', async () =>{
        await spec()
        .get(`${baseUrl}/posts`)
        .expectStatus(200);
    })

    it('create post', async()=>{
        const randomTitle = faker.internet.email();

        console.log(randomTitle)
        const requestBody ={
            "title":randomTitle,
            "body":"altceva"
        };
        await spec().post(`${baseUrl}/posts`)
        .withBody(requestBody)
        .expectStatus(201)
        .expectBodyContains(randomTitle);
    })

    it('delete post', async () =>{
        await spec().delete(`${baseUrl}/posts/1`).expectStatus(200)
    })
})