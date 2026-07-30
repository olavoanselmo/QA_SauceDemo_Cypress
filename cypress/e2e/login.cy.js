describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.viewport(1000, 660)
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.contains('Products')
    cy.contains('Swag Labs')
  })
})