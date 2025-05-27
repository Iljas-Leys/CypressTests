describe('about', () => {
    beforeEach(() => {
        cy.visit('https://r0803440-realbeans.myshopify.com/')
        cy.get('#password').type('a')
        cy.get('button').click()
        // Go to about page
        cy.get('#HeaderMenu-about').click()
    })
    
    it('shows the history text', () => {
        cy.get('.rich-text__text > p')
        .should('exist')
        .contains("From a small Antwerp grocery to a European coffee staple, RealBeans honors tradition while innovating for the future. Our beans are roasted in-house, shipped from Antwerp or Stockholm, and loved across the continent.")
    })
})