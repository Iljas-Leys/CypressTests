describe('home page', () => {
    beforeEach(() => {
        cy.visit('https://r0803440-realbeans.myshopify.com/')
        cy.get('#password').type('a')
        cy.get('button').click()
    })
    
    it('shows the home page text', () => {
        cy.get('em')
        .should('exist')
        .contains("Since 1801, RealBeans has roasted premium coffee in Antwerp for Europe’s finest cafes. Ethically sourced beans, crafted with care")
    })

    it('shows the featured products on the home page', () => {
        cy.get('.card-wrapper').should('have.length', 2).then(cards => {
            // First card
            cy.wrap(cards[0]).within(() => {
                cy.get('img').should('have.attr', 'src', '//r0803440-realbeans.myshopify.com/cdn/shop/files/RealBeansBlendBag.png?v=1748261123&width=533')
                cy.contains('Blended coffee 5kg').should('exist')
                cy.contains('From €55,00 EUR').should('exist')
                cy.contains('€11,00').should('exist')
            })

            // Second card
            cy.wrap(cards[1]).within(() => {
                cy.get('img').should('have.attr', 'src', '//r0803440-realbeans.myshopify.com/cdn/shop/files/RealBeansRoastedBag.png?v=1748260762&width=533')
                cy.contains('Roasted coffee beans 5kg').should('exist')
                cy.contains('From €40,00 EUR').should('exist')
                cy.contains('€8,00').should('exist')
            })
        })
    })
})