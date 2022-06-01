/* eslint-disable no-undef */
describe('Usabilidade da tela Create', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/edit/629604c157d58865a2493a1e')
  })

  it('Verificar elementos da tela New Edit', () => {
    cy.get('[data-cy="wapper-pokeedit"]').should('be.visible');
    cy.get('[data-cy="title-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-name-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-name-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-url-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-url-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-type1-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-type1-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-type2-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-type2-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-hp-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-hp-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-attack-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-attack-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-defense-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-defense-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-specAtc-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-specAtc-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-specDef-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-specDef-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-speed-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-speed-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-title1-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-title1-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-descr1-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-descr1-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-title2-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-title2-pokeedit"]').should('be.visible');
    cy.get('[data-cy="lbl-descr2-pokeedit"]').should('be.visible');
    cy.get('[data-cy="inp-descr2-pokeedit"]').should('be.visible');
    cy.get('[data-cy="btn-save-pokeedit"]').should('be.visible');
    cy.get('[data-cy="btn-back-pokeedit"]').should('be.visible');
  })

})