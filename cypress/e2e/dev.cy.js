import user from '../fixtures/user.json';

it('Place order HW', () => {

//loginViaUI(user); //передавати ТОВАР з хелпера замість юзера

cy.log('Add random product to cart from main page')
cy.visit('/');

cy.get('input#filter_keyword').type('i{enter}');

//cy.get('div:nth-child(7) > div:nth-child(2) > ul > li:nth-child(5) > a').click();
//cy.get('div:nth-child(7) > div:nth-child(2) > ul > li:nth-child(5) > a').click();
//cy.get(".thumbnails.grid.row.list-inline").find('[title="Obsession Night Perfume"]') ? .click() : cy.get('div:nth-child(7) > div:nth-child(2) > ul > li:nth-child(5) > a').click();
})