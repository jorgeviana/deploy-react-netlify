describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://my-fe-app.netlify.app')
    cy.contains('rev 2').should('exist')
  })
})