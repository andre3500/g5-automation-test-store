import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';
import { loginViaUI, login2 } from '../support/helper';
import accountLoginPage from '../support/pages/AccountLoginPage';
import loginLoginPage from '../support/pages/LoginLoginPage';
import loginLogoutPage from '../support/pages/LoginLogout';

it('Login user with valid credentials', () => {

  accountLoginPage.visit();
  cy.log('**Submit login form ...**');
  accountLoginPage.fillInAuthForm(user);
  loginLoginPage.getLoginVerified().should('contain', ' My Account');


  accountLoginPage.logOff();
  loginLogoutPage.getLoginVerified().should('contain', ' Account Logout');
  accountLoginPage.visit();

  cy.log('empty pass 1');
  accountLoginPage.fillIn2(user);
  accountLoginPage.getAlertMessage().should('contain', 'Error: Incorrect login or password provided.');

  cy.log('wrong pass 1');
  accountLoginPage.fillIn3(user);
  accountLoginPage.getAlertMessage().should('contain', 'Error: Incorrect login or password provided.');

  cy.log('empty name 1');
  accountLoginPage.fillIn4(user);

  cy.log('wrong name 1');
  accountLoginPage.fillIn5(user);


})

// it.only('Attempt to login without password', () => {


//   login2(user.loginName, '');
//   cy.get('.alert.alert-error.alert-danger').should('contain', 'Error: Incorrect login or password provided.')
//})

// it('Attempt to login without loginname', () => {
//   login2('', user.password);
//   cy.get('.alert.alert-error.alert-danger').should('contain', 'Error: Incorrect login or password provided.')
// })

// it('Attempt to login without entered credentials', () => {
//   login2('', '');
//   cy.get('.alert.alert-error.alert-danger').should('contain', 'Error: Incorrect login or password provided.')
// })