class CheckoutPage {

  iniciarCheckout() {
    cy.get('#checkout').click()
  }

  preencherDados(nome, sobrenome, cep) {
    cy.get('#first-name').type(nome)
    cy.get('#last-name').type(sobrenome)
    cy.get('#postal-code').type(cep)
  }

  continuar() {
    cy.get('#continue').click()
  }

  finalizar() {
    cy.get('#finish').click()
  }

  validarCompraFinalizada() {
    cy.contains('Thank you for your order').should('be.visible')
  }

}

export default new CheckoutPage()