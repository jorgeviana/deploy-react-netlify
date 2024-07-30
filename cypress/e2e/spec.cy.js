describe('template spec', () => {
  it('passes', () => {
    const commitId = Cypress.env('COMMIT_ID')

    cy.visit('https://my-fe-app.netlify.app')
    cy.contains('rev ' + commitId).should('exist')
  })
})