class LoginPage{
    getEmailField(){
        return cy.get("#email");
    }

    getPswField(){
        return cy.get("#password");
    }

    getSubmitLoginBtn(){
        return cy.get("#submitLoginBtn");
    }

    getErrorMsg(){
        return cy.get("#message")
    }
    doLoginFromPOM(email, pws){
        this.getEmailField().type(email, {delay: 0});
        this.getPswField().type(pws,{delay: 0});
        this.getSubmitLoginBtn().click();
    }

}

export default new LoginPage();