/// <reference types="Cypress" />
it('webapp deve estar online', () => {
    cy.visit('/');
    
    cy.title()
        .should('eq', 'Samurai Barbershop by QAninja');
})

