class InventoryPage {

  adicionarPrimeiroProduto() {
    cy.get('.inventory_item')
      .first()
      .find('button')
      .click()
  }

  validarProdutoNoCarrinho() {
    cy.get('.shopping_cart_badge')
      .should('contain', '1')
  }

  abrirCarrinho() {
    cy.get('.shopping_cart_link').click()
  }

}

export default new InventoryPage()