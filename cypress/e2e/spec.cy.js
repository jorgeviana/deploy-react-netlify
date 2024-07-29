describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://my-fe-app.netlify.app')
    cy.contains('rev 1').should('exist')
  })
})