import user from '../fixtures/authUsers.json'


it('Log in - Happy Path', () => {
    cy.visit('/index.php?rt=account/login');

    cy.log('**Opening login form ...**');

    cy.log('**Filling the form ...**');

    cy.log('**Press Log In button ...**');

    cy.log('**Verifying "My account" page ...**');
    cy.get('.heading1 .subtext').should('have.text', user.firstName);

    cy.log('**Logging out ...**');

})

it('Log in - Incorrect Password', () => {
    cy.visit('/index.php?rt=account/login');

    cy.log('**Opening Login form ...**');

    cy.log('**Filling the form ...**');
})


it('Log in Incorrect Username', () => {
    cy.visit('/index.php?rt=account/login');

    cy.log('**Opening Login form ...**');
})

