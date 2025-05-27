describe('home page', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        
        cy.visit('https://r0803440-realbeans.myshopify.com/')
        cy.get('#password').type('a')
        cy.get('button').click()
        // Accept cookies
        cy.get('#shopify-pc__banner__btn-accept').click()
    })
    
    it('shows the right product details of "Blended coffee 5kg"', () => {
        // Go to Blended coffee 5kg page
        cy.get('.card-wrapper').eq(0).click()

        cy.get('.product__title').should('exist').contains('Blended coffee 5kg')
        cy.get('.price-item--regular').should('exist').contains('€55,00 EUR')
        cy.get('.price-item--last').should('exist').contains('€11,00')
        cy.get('input[type="radio"]').should('have.length', 4).then(cards => {
            cy.wrap(cards[0]).should('have.attr', 'value', 'Robusta')
            cy.wrap(cards[1]).should('have.attr', 'value', 'Excelsa')
            cy.wrap(cards[2]).should('have.attr', 'value', 'Arabica')
            cy.wrap(cards[3]).should('have.attr', 'value', 'Liberica')
        })
        cy.get('.product__description').should('exist').contains('RealBeans coffee, ready to brew.')
        cy.get('img').should('have.attr', 'src', '//r0803440-realbeans.myshopify.com/cdn/shop/files/RealBeansBlendBag.png?v=1748261123&width=1946')
    })

    it('shows the right product details of "Roasted coffee beans 5kg"', () => {
        // Go to Roasted coffee beans 5kg page
        cy.get('.card-wrapper').eq(1).click()

        cy.get('.product__title').should('exist').contains('Roasted coffee beans 5kg')
        cy.get('.price-item--regular').should('exist').contains('€40,00 EUR')
        cy.get('.price-item--last').should('exist').contains('€8,00')
        cy.get('input[type="radio"]').should('have.length', 4).then(cards => {
            cy.wrap(cards[0]).should('have.attr', 'value', 'Robusta')
            cy.wrap(cards[1]).should('have.attr', 'value', 'Excelsa')
            cy.wrap(cards[2]).should('have.attr', 'value', 'Arabica')
            cy.wrap(cards[3]).should('have.attr', 'value', 'Liberica')
        })
        cy.get('.product__description').should('exist').contains('Our best and sustainable real roasted beans.')
        cy.get('img').should('have.attr', 'src', '//r0803440-realbeans.myshopify.com/cdn/shop/files/RealBeansRoastedBag.png?v=1748260762&width=1946')
    })
})