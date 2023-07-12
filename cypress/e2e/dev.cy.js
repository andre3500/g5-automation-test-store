it('Log in - Incorrect Password', () => {
  cy.visit('/index.php?rt=account/login');

  cy.log('**Filling the form ...**');
  cy.get('#loginFrm_loginname').type('rob-bob');
  cy.get('#loginFrm_password').type(' ');

  cy.log('**Press login ...**');
  cy.get('[title="Login"]').click()
  cy.get('.alert.alert-error.alert-danger').should('contain', 'Error: Incorrect login or password provided.')

  cy.log('**Filling the form: attempt 2 ...**');
  cy.get('#loginFrm_loginname').type('rob-bob');
  cy.get('#loginFrm_password').type('12346573235y563u357dofvkadfvjb;blnkv;lodockvs ksdf;gb nsfg;bsfgbsfnsnsnnsnnsns')

  cy.log('**Click Forgot Password ...**');
  cy.get('[href="https://automationteststore.com/index.php?rt=account/forgotten/password"]').click();
  cy.get('.maintext').should('contain', ' Forgot Your Password?')

  cy.log('**Password Reset - empty username...**');
  cy.get('#forgottenFrm_loginname').type(' ');
  cy.get('#forgottenFrm_email').type(user.email);
  cy.get('.btn.btn-orange.pull-right').click(); 
  cy.get('.alert.alert-error.alert-danger').should('have.text', "\n×\nError: No records found matching information your provided, please check your information and try again!");
  cy.get('#forgottenFrm_loginname').clear();
  cy.get('#forgottenFrm_email').clear();

  cy.log('**Password Reset - empty email...**');
  cy.get('#forgottenFrm_loginname').type(user.loginName);
  cy.get('#forgottenFrm_email').type(' ');
  cy.get('.btn.btn-orange.pull-right').click(); 
  cy.get('.alert.alert-error.alert-danger').should('have.text', "\n×\nError: No records found matching information your provided, please check your information and try again!");
  cy.get('#forgottenFrm_loginname').clear();
  cy.get('#forgottenFrm_email').clear();

  cy.log('**Password Reset Happy ...**');
  cy.get('#forgottenFrm_loginname').type(user.loginName);
  cy.get('#forgottenFrm_email').type(user.email);
  cy.get('.btn.btn-orange.pull-right').click(); 
  cy.get('.alert.alert-success').should('have.text', "\n×\nSuccess: Password reset link has been sent to your e-mail address.");
})

it('Log in Incorrect Username', () => {
cy.visit('/index.php?rt=account/login');

cy.log('**Opening Login form ...**');
})