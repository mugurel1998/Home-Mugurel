import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import LoginPage from "../pages/LoginPage";
import HeaderMenuPage from "../pages/HeaderMenuPage";
import {faker} from '@faker-js/faker';

const baseUrl = 'https://qa-practice.netlify.app'


describe('template spec', () => {
    beforeEach(()=>{
      cy.visit(baseUrl);
      LeftSideMenuPage.getShopEcommerceLink().click();
    })


    it('login', () => {
      const randomPws = faker.lorem.work();
      // cy.doLogin("admin@admin.com", "admin123")
      cy.LoginPage("admin@admin.com", randomPws)
      LoginPage.doLoginFromPOM("admin@admin.com", "admin123");
      HeaderMenuPage.getLogoutBtn().should('be.visible');
      HeaderMenuPage.getLogoutBtn().should('contain', 'Log Out')
      // cy.get('li.lgout a').should('be.visible');
      // cy.get('li.lgout a').should('contain', 'Log Out');
    })

    it('login invalid credits', () =>{
      cy.doLogin("admin@admin.com", "admin")
      // cy.contains("Bad credentials! Please try again! Make sure that you've registered.");
      LoginPage.getErrorMsg().contains("Bad credentials! Please try again! Make sure that you've registered.")

    })
})