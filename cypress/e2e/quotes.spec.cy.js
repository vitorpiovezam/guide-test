describe('Quote', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  });

  it('Should redirect to quote', () => {
    cy.url().should('eq', 'http://localhost:4200/quote')
  });

  it('Should load PETR4 quote', () => {
    cy.get('#name').should('have.value', 'PETR4.SA')
  })

  it('Should load Chart', () => {
    cy.get('#name').type('PETR4.SA')
    cy.get('canvas').should('be.visible');
  })
})