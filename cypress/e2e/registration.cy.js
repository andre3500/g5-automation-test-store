import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';
import { loginViaUI } from '../support/helper';
import homePage from '../support/pages/HomePage';
import accountLoginPage from '../support/pages/AccountLoginPage';
import accountCreatePage from '../support/pages/AccountCreatePage';
import accountSuccessPage from '../support/pages/AccountSuccessPage';

user.address = faker.location.streetAddress();
user.city = faker.location.city();
user.company = faker.company.name();
user.email = faker.internet.email();
user.fax = faker.phone.number();
user.firstName = faker.person.firstName();
user.lastName = faker.person.lastName();
user.loginName = faker.internet.userName();
user.password = faker.internet.password({ length: 20 });
user.phoneNumber = faker.phone.number('+380## ### ## ##');
user.zipCode = faker.location.zipCode();

it('Successful registration', () => {

  homePage.visit();

  cy.log('**Opening registration form ...**');
  //cy.log(`${homePageWithConstructor.elements.loginOrRegisterButton}`); //how to use locators from construstor
  homePage.getLoginOrRegisterButton().click();
  accountLoginPage.getRegisterButton().click();

  accountCreatePage.fillInRegistrationForm(user);

  accountSuccessPage.getSuccessMessageText().should('be.visible').and('contain', 'Your Account Has Been Created!');
})

it('Login user after registration', () => {
  cy.visit('/');

  cy.log('**Opening login form ...**');
  cy.get('#customer_menu_top').click();

  cy.log('**Submit login form ...**');
  cy.get('#loginFrm_loginname').type(user.loginName);
  cy.get('#loginFrm_password').type(user.password);
  cy.get('#loginFrm button').click();

  cy.log('**Verifying "My account" page ...**');
  cy.get('.heading1 .subtext').should('have.text', user.firstName);
})

it('Login user after registration (using helper function)', () => {
  loginViaUI(user);
  cy.log('**Verifying "My account" page ...**');
  cy.get('.heading1 .subtext').should('have.text', user.firstName);
})

it('Unsuccessful registration attempt without email', () => {
  let userWithoutEmail = JSON.parse(JSON.stringify(user));

  cy.log('Update user data');
  userWithoutEmail.loginName = faker.internet.userName();
  userWithoutEmail.email = "{leftArrow}";

  homePage.visit();
  homePage.getLoginOrRegisterButton().click();
  accountLoginPage.getRegisterButton().click();
  accountCreatePage.fillInRegistrationForm(userWithoutEmail);
  accountCreatePage.getErrorMessageText().should('have.text', '\n×\nEmail Address does not appear to be valid!')
})

it('Unsuccessful registration attempt without first name', () => {
  let userWithoutFirstName = JSON.parse(JSON.stringify(user));

  cy.log('Update user data');
  userWithoutFirstName.loginName = faker.internet.userName();
  userWithoutFirstName.email = faker.internet.email();;
  userWithoutFirstName.firstName = "{leftArrow}";

  homePage.visit();
  homePage.getLoginOrRegisterButton().click();
  accountLoginPage.getRegisterButton().click();
  accountCreatePage.fillInRegistrationForm(userWithoutFirstName);
  accountCreatePage.getErrorMessageText().should('have.text', '\n×\nFirst Name must be between 1 and 32 characters!')
})
