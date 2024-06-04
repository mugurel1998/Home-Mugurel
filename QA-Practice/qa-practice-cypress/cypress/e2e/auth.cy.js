const baseUrl = 'https://qa-practice.netlify.app'


describe('template spec', () => {
    beforeEach(()=>{
      cy.visit(baseUrl);
      cy.get("#auth-shop").click();
    })


    it('login', () => {
      cy.doLogin("admin@admin.com", "admin123")
      cy.get('li.lgout a').should('be.visible');
      cy.get('li.lgout a').should('contain', 'Log Out');
    })

    it('login invalid credits', () =>{
      cy.doLogin("admin@admin.com", "admin")
      cy.contains("Bad credentials! Please try again! Make sure that you've registered.");

    })
})