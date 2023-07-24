import BasePage from "./BasePage";

class AccountLoginPage extends BasePage {
    visit() {
        cy.visit('/index.php?rt=account/login')
    }

    getRegisterButton() {
        return cy.get('#accountFrm button');
    }
    getLoginNameField() {
        return cy.get('#loginFrm_loginname');
    }
    getLoginPassField() {
        return cy.get('#loginFrm_password');
    }
    getLoginButton() {
        return cy.get('#loginFrm button');
    }
    getLogOffbutton() {
        return cy.get('[data-original-title="Logoff"]');
    }
    getAlertMessage() {
        return cy.get('.alert.alert-error.alert-danger')

    }
    fillInAuthForm(user) {
        cy.log('**Submit login form ...**');
        this.getLoginNameField().type(user.loginName);
        this.getLoginPassField().type(user.password);
        this.getLoginButton().click();

    }
    logOff(){
        cy.log('**Logging out ...**');
        this.getLogOffbutton().click()
    }
    fillIn2(user) {
        cy.log('**Empty Password - Test 1 ...**');
        this.getLoginNameField().type(user.loginName);
        this.getLoginPassField().type(' ');
        this.getLoginButton().click();

    }
    fillIn3(user) {
        cy.log('**Incorrect pass test 2 ...**');
        this.getLoginNameField().type(user.loginName);
        this.getLoginPassField().type('e9b8hfg');
        this.getLoginButton().click();
    }
    fillIn4(user) {
        cy.log('**Empty Name - Test 1 ...**');
        this.getLoginNameField().type(' ');
        this.getLoginPassField().type(user.password);
        this.getLoginButton().click();
    }
    fillIn5(user) {
        cy.log('**Incorrect name test 2 ...**');
        this.getLoginNameField().type('fherp va 00');
        this.getLoginPassField().type(user.password);
        this.getLoginButton().click();

    }
}
export default new AccountLoginPage();