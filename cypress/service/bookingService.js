class BookingService {

  static createBooking(payload) {

    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/booking`,
      body: payload,
      failOnStatusCode: false
    })

  }

  static getBooking(id) {

    return cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}/booking/${id}`,
      failOnStatusCode: false
    })

  }

  static getAllBookings() {

    return cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}/booking`
    })

  }

  static generateToken() {

    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/auth`,
      body: {
        username: "admin",
        password: "password123"
      }
    }).then(res => res.body.token)

  }

  static deleteBooking(id, token) {

    return cy.request({
      method: 'DELETE',
      url: `${Cypress.env('apiUrl')}/booking/${id}`,
      headers: {
        Cookie: `token=${token}`
      },
      failOnStatusCode: false
    })

  }

}

export default BookingService