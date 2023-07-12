import user from '../fixtures/authUsers.json'


it('Log in - Happy Path', () => {
    cy.visit('/');

    cy.log('**Opening login form ...**');
    cy.get('#customer_menu_top').click();


    cy.log('**Filling the form ...**');
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);

    cy.log('**Press Log In button ...**');
    cy.get('[title="Login"]').click()

    cy.log('**Verifying "My account" page ...**');
    cy.get('.heading1 .subtext').should('have.text', 'rob');

    cy.log('**Logging out ...**');
    cy.get('[data-original-title="Logoff"]').click()
    cy.get('.maintext').should('contain', ' Account Logout')

})

it('Log in - Incorrect Password', () => {
      cy.visit('/index.php?rt=account/login');
    
      cy.log('**Filling the form ...**');
      cy.get('#loginFrm_loginname').type(user.loginName);
      cy.get('#loginFrm_password').type(' ');
    
      cy.log('**Press login ...**');
      cy.get('[title="Login"]').click()
      cy.get('.alert.alert-error.alert-danger').should('contain', 'Error: Incorrect login or password provided.')
      cy.get('#loginFrm_loginname').clear();
      cy.get('#loginFrm_password').clear();

      cy.log('**Filling the form: attempt 2 ...**');
      cy.get('#loginFrm_loginname').type(user.loginName);
      cy.get('#loginFrm_password').type('12346573235y563u357dofvkadfvjb;blnkv;lodockvs ksdf;gb nsfg;bsfgbsfnsnsnnsnnsns')
    
      cy.log('**Press login 2 ...**');
      cy.get('[title="Login"]').click()
      cy.get('.alert.alert-error.alert-danger').should('contain', 'Error: Incorrect login or password provided.')
      cy.get('#loginFrm_loginname').clear();
      cy.get('#loginFrm_password').clear();

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

cy.log('**Filling the form ...**');
cy.get('#loginFrm_loginname').type('r');
cy.get('#loginFrm_password').type(user.password);

cy.log('**Press login ...**');
cy.get('[title="Login"]').click()
cy.get('.alert.alert-error.alert-danger').should('contain', 'Error: Incorrect login or password provided.')
cy.get('#loginFrm_loginname').clear();
cy.get('#loginFrm_password').clear();

cy.log('**Filling the form: attempt 2 ...**');
cy.get('#loginFrm_loginname').type('roma-broma');
cy.get('#loginFrm_password').type(user.password);

cy.log('**Press login 2 ...**');
cy.get('[title="Login"]').click()
cy.get('.alert.alert-error.alert-danger').should('contain', 'Error: Incorrect login or password provided.')
cy.get('#loginFrm_loginname').clear();
cy.get('#loginFrm_password').clear();

cy.log('**Click Forgot Password ...**');
cy.get('[href="https://automationteststore.com/index.php?rt=account/forgotten/loginname"]').click();
cy.get('.maintext').should('contain', ' Forgot Your Login Name?')

cy.log('**Password Reset - empty username...**');
cy.get('#forgottenFrm_lastname').type('KOLYA');
cy.get('#forgottenFrm_email').type(user.email);
cy.get('.btn.btn-orange.pull-right').click(); 
cy.get('.alert.alert-error.alert-danger').should('have.text', "\n×\nError: No records found matching information your provided, please check your information and try again!");
cy.get('#forgottenFrm_lastname').clear();
cy.get('#forgottenFrm_email').clear();

cy.log('**Password Reset - empty email...**');
cy.get('#forgottenFrm_lastname').type(user.loginName);
cy.get('#forgottenFrm_email').type(' ');
cy.get('.btn.btn-orange.pull-right').click(); 
cy.get('.alert.alert-error.alert-danger').should('have.text', "\n×\nError: No records found matching information your provided, please check your information and try again!");
cy.get('#forgottenFrm_lastname').clear();
cy.get('#forgottenFrm_email').clear();

cy.log('**Password Reset Happy ...**');
cy.get('#forgottenFrm_lastname').type("Vowel");
cy.get('#forgottenFrm_email').type(user.email);
cy.get('.btn.btn-orange.pull-right').click(); 
cy.get('.alert.alert-success').should('have.text', "\n×\nSuccess: Your login name reminder has been sent to your e-mail address.");

})

