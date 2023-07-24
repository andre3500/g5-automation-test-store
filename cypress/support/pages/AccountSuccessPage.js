import BasePage from "./BasePage";

class AccountSuccessPage extends BasePage {
    visit() {
        cy.visit('/index.php?rt=account/success')
    }

    getSuccessMessageText() {
        return cy.get('.maintext');
    }
    getLoginVerified() {
        return cy.get()
    }
}
export default new AccountSuccessPage();