describe('catalog products', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        
        cy.visit('https://r0803440-realbeans.myshopify.com/')
        cy.get('#password').type('a')
        cy.get('button').click()
    })
    
    it('shows the right products in the catalog', () => {
        cy.get('#HeaderMenu-catalog').click()

        cy.get('.card-wrapper').should('have.length', 2)
        
        cy.get('.card-wrapper').eq(0).should('contain.text', 'Blended coffee 5kg')
        cy.get('.card-wrapper').eq(0).should('contain.text', 'From €55,00 EUR')
        cy.get('.card-wrapper').eq(0).should('contain.text', '€11,00')
        cy.get('img').eq(0).should('have.attr', 'src', '//r0803440-realbeans.myshopify.com/cdn/shop/files/RealBeansBlendBag.png?v=1748261123&width=533')
        
        cy.get('.card-wrapper').eq(1).should('contain.text', 'Roasted coffee beans 5kg')
        cy.get('.card-wrapper').eq(1).should('contain.text', 'From €40,00 EUR')
        cy.get('.card-wrapper').eq(1).should('contain.text', '€8,00')
        cy.get('img').eq(1).should('have.attr', 'src', '//r0803440-realbeans.myshopify.com/cdn/shop/files/RealBeansRoastedBag.png?v=1748260762&width=533')
    })
})