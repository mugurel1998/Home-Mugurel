describe("API Test suite", () =>{
const baseUrl= "jsonplaceholder.typicode.com/posts";

    it("Get post api test", ()=>{
        cy.request("GET", `${baseUrl}/posts`).as('getPostsResponse');
        cy.get('@getPostsResponse').then(resp =>{
            expect(resp.status).to.eql(200);
            expect(JSON.stringify(resp.body)).to.contain('userId')

        })
    })
})
