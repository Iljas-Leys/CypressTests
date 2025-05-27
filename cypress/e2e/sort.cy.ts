describe('catalog sort', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        
        cy.visit('https://r0803440-realbeans.myshopify.com/')
        cy.get('#password').type('a')
        cy.get('button').click()
    })
    
    it('changes the order of items when sorting is applied', () => {
        cy.get('#HeaderMenu-catalog').click()

        cy.get('.card-wrapper').eq(0).should('contain.text', 'Blended coffee 5kg')
        cy.get('.card-wrapper').eq(1).should('contain.text', 'Roasted coffee beans 5kg')

        cy.get('#SortBy').select('Alphabetically, Z-A')
        cy.get('.card-wrapper').eq(0).should('contain.text', 'Roasted coffee beans 5kg')
        cy.get('.card-wrapper').eq(1).should('contain.text', 'Blended coffee 5kg')

        cy.get('#SortBy').select('Best selling')
        cy.get('.card-wrapper').eq(1).should('contain.text', 'Roasted coffee beans 5kg')
        cy.get('.card-wrapper').eq(0).should('contain.text', 'Blended coffee 5kg')

        cy.get('#SortBy').select('Featured')
        cy.get('.card-wrapper').eq(1).should('contain.text', 'Roasted coffee beans 5kg')
        cy.get('.card-wrapper').eq(0).should('contain.text', 'Blended coffee 5kg')

        cy.get('#SortBy').select('Price, low to high')
        cy.get('.card-wrapper').eq(0).should('contain.text', 'Roasted coffee beans 5kg')
        cy.get('.card-wrapper').eq(1).should('contain.text', 'Blended coffee 5kg')

        cy.get('#SortBy').select('Price, high to low')
        cy.get('.card-wrapper').eq(1).should('contain.text', 'Roasted coffee beans 5kg')
        cy.get('.card-wrapper').eq(0).should('contain.text', 'Blended coffee 5kg')

        cy.get('#SortBy').select('Date, old to new')
        cy.get('.card-wrapper').eq(0).should('contain.text', 'Roasted coffee beans 5kg')
        cy.get('.card-wrapper').eq(1).should('contain.text', 'Blended coffee 5kg')

        cy.get('#SortBy').select('Date, new to old')
        cy.get('.card-wrapper').eq(1).should('contain.text', 'Roasted coffee beans 5kg')
        cy.get('.card-wrapper').eq(0).should('contain.text', 'Blended coffee 5kg')
    })
})