class BookingService {

  static criarReserva(data) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrlrestful')}/booking`,
      body: data,
      failOnStatusCode: false
    })
  }

  static listarReservas() {
    return cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrlrestful')}/booking`
    })
  }

  static gerarToken() {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrlrestful')}/auth`,
      body: {
        username: 'admin',
        password: 'password123'
      }
    }).then(res => res.body.token)
  }

  static deletarReserva(id, token) {
    return cy.request({
      method: 'DELETE',
      url: `${Cypress.env('apiUrlrestful')}/booking/${id}`,
      headers: {
        Cookie: `token=${token}`
      },
      failOnStatusCode: false
    })
  }
}

export default BookingService