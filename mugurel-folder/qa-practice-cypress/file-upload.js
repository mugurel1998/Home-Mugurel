const baseUrl = 'https://qa-practice.netlify.app'


describe('template spec', () => {
    beforeEach(()=>{
      cy.visit(baseUrl);
      cy.get("#file-upload-item").click();
    })


    it('file upload', () => {
        const fileName = "example.json"
        cy.get("#file updload").selectFile(`cypress/fixtures/${fileName}`)
        cy.get('button').contains("submit").click();
        
    })

  
})