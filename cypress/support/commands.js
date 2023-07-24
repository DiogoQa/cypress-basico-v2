Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Diogo')
    cy.get('#lastName').type('Barbosa')
    cy.get('#email').type('diogoexemplo@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})