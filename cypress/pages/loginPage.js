class LoginPage {

visitar() {
    cy.visit('https://www.saucedemo.com/')
  }

  preencherUsuario(usuario) {
    cy.get('#user-name').type(usuario)
  }

  preencherSenha(senha) {
    cy.get('#password').type(senha)
  }

  clicarLogin() {
    cy.get('#login-button').click()
  }

  login(usuario, senha) {
    this.preencherUsuario(usuario)
    this.preencherSenha(senha)
    this.clicarLogin()
  }

  validarLoginSucesso() {
    cy.url().should('include', 'inventory.html')
    cy.get('.inventory_list').should('be.visible')
  }

}

export default new LoginPage()