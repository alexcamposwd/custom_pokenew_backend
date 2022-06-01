/* eslint-disable no-undef */
describe('Usabilidade da tela Create', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/new')
  })

  it('Verificar elementos da tela New', () => {
    cy.get('[data-cy="wapper-pokenew"]').should('be.visible');
    cy.get('[data-cy="title-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-name-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-name-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-url-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-url-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-type1-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-type1-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-type2-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-type2-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-hp-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-hp-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-attack-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-attack-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-defense-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-defense-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-specAtc-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-specAtc-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-specDef-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-specDef-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-speed-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-speed-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-title1-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-title1-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-descr1-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-descr1-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-title2-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-title2-pokenew"]').should('be.visible');
    cy.get('[data-cy="lbl-descr2-pokenew"]').should('be.visible');
    cy.get('[data-cy="inp-descr2-pokenew"]').should('be.visible');
    cy.get('[data-cy="btn-save-pokenew"]').should('be.visible');
    cy.get('[data-cy="btn-back-pokenew"]').should('be.visible');
  })

  it('Verificar mensagens de erros', () => {
    cy.get('[data-cy="btn-save-pokenew"]').click()
    cy.get('[data-cy="error-name-pokenew"]').should('be.visible');
    cy.get('[data-cy="error-url-pokenew"]').should('be.visible');
    cy.get('[data-cy="error-type-pokenew"]').should('be.visible');
    cy.get('[data-cy="error-stats-pokenew"]').should('be.visible');
    cy.get('[data-cy="error-title-pokenew"]').should('be.visible');
    cy.get('[data-cy="error-description-pokenew"]').should('be.visible');
  })

})