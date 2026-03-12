Cypress.Commands.add('login', () => {

  cy.visit('/login')

  cy.get('[data-testid="email"]').type('admin@qa.com')
  cy.get('[data-testid="senha"]').type('123456')

  cy.get('[data-testid="entrar"]').click()

})

Cypress.Commands.add('criarReserva', (reserva) => {
  return cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrlrestful')}/booking`,
    headers: { 'Content-Type': 'application/json' },
    body: reserva
  })
})

Cypress.Commands.add('listarReservas', () => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrlrestful')}/booking`
  })
})

Cypress.Commands.add('deletarReserva', (bookingId, token) => {
  return cy.request({
    method: 'DELETE',
    url: `${Cypress.env('apiUrlrestful')}/booking/${bookingId}`,
    headers: {
      'Cookie': `token=${token}`
    },
    failOnStatusCode: false
  })
})

Cypress.Commands.add('token', (bookingId, token) => {
  return cy.request({
  method: 'POST',
  url: `${Cypress.env('apiUrlrestful')}/auth`,
  body: {
    username: 'admin',   // usuário padrão da API
    password: 'password123' // senha padrão da API
  }
}).then((res) => {
  expect(res.status).to.eq(200)
  const token = res.body.token
  cy.wrap(token).as('authToken')
})
})