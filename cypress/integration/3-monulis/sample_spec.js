/// <reference types="cypress" />
describe('My First Test', () => {
    it('Visit the Kitchen Sink', () => {
      cy.visit("https://example.cypress.io");
      cy.contains("type").click();
      cy.url().should("include","/commands/action");
      cy.get(".action-email")
        .type("fake@email.com")
        .should("have.value","fake@email.com");
    });
  });