///<reference types="cypress-iframe"/>
const baseUrl = 'https://qa-practice.netlify.app'


describe('template spec', () => {
    beforeEach(()=>{
      cy.visit(baseUrl);
      cy.get("#file-upload-item").click();
    })


    it('file upload', () => {
        const fileName = "example.json"
        cy.get("#file updload").selectFile(`cypress/fixtures/${fileName}`)
       
        
    })

    it('iframes test', ()=>{
        cy.frameLoaded("#iframe-checkboxes")
        cy.iframe().find("learn-more").click();
        cy.iframe().find("#show-text").contains('This text appears when you click the "Learn more" button');
    })

  
})