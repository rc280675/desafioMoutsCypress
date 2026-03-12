class BookingPage {
  visitar() {
    cy.visit('/')
  }

  preencherFormulario({ firstname, lastname, totalprice, depositpaid, checkin, checkout, additionalneeds }) {
    cy.get('#firstname').clear().type(firstname)
    cy.get('#lastname').clear().type(lastname)
    cy.get('#totalprice').clear().type(totalprice)
    if (depositpaid) {
      cy.get('#depositpaid').check()
    } else {
      cy.get('#depositpaid').uncheck()
    }
    cy.get('#checkin').clear().type(checkin)
    cy.get('#checkout').clear().type(checkout)
    cy.get('#additionalneeds').clear().type(additionalneeds)
  }

  submeter() {
    cy.get('#submitBooking').click()
  }
}

export default new BookingPage()