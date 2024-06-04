describe("Intrecepting api test suite", ()=>{
    it("Waiting for api before other actions in the web app", ()=>{
        cy.intercept({
            method:"GET",
            url:"/methods"
        }).as('commentsAPI');


        cy.visit("/");
        cy.get("#intercept-api").click();
        cy.wait('@commentsAPI').its('response.statusCode').should('eq', 200);
        const postTitle = 'something';
        
        cy.get("#postTitleInput").type("something");
        cy.contains("CREATE post").click();
        cy.get("#response").should('contain', `New ${postTitle} post CREATED. API Request sent. You can find it in DevTools (F12) > Network tab.`)
    })

    it('mock api response', () =>{
   
        cy.intercept({
            method:"GET",
            url:"/comments"
        }, {
            statusCode:201,
            body:[{
                "postId":23,
                "id":5,
                "name": "curs testare",
                "email": "qa@gmail.com",
                "body": 'lorem ipsum dolor',
            }]
        }).as('commentsAPIMocked')

        cy.visit("/");
        cy.get("#intercept-api").click();
        cy.wait('@commentsAPIMocked').its('response.statusCode').should('eql', 500);
        

    })

})