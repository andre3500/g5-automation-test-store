import BasePage from "./BasePage";

class LoginLoginPage extends BasePage {
    visit() {
        cy.visit('/index.php?rt=account/account')
    }
    getLoginVerified() {
        return cy.get('.maintext');
    
    }
}
export default new LoginLoginPage();