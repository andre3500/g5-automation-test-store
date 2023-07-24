

export function login2(loginName, password) {
    cy.visit('/index.php?rt=account/login');

    cy.log('**Submit login form ...**');
    loginName ? cy.get('#loginFrm_loginname').type(loginName) : cy.log('User login name is empty, skip entering login name')
    password ? cy.get('#loginFrm_password').type(password) : cy.log('User password is empty, skip entering password')
    cy.get('#loginFrm button').click();
}

//<reference types="cypress"/>


export function findProductByName1(productName) {
    cy.get('.pagination a').then(pages => {
        return pages.length
    }).then(pageCount => {
        for (let i = 0; i < pageCount; i++) {
            cy.location().then(location => {
                if(!location.search.includes('product/product')){
                    cy.get('body').then(body => {
                        if (body.find(`.prdocutname[title="${productName}"]`).length > 0) {
                            cy.get(`.prdocutname[title="${productName}"]`).click();
                        } else {
                            cy.get('.sorting.well').last().then( bottomSortingPanel => {
                                let paginationArrow = bottomSortingPanel.find('.pagination a:contains(">")');
                                if(paginationArrow.length > 0){
                                    cy.wrap(paginationArrow).first().click();
                                }else{
                                    throw new Error("Product not found")
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

export function findProductByName(productName) {
    cy.get('body').then(body => {
        if (body.find(`.prdocutname[title="${productName}"]`).length > 0) {
            cy.get(`.prdocutname[title="${productName}"]`).click();
        } else {
            cy.contains('.pagination a', '>').click();
            findProductByName(productName);
        }
})

}






