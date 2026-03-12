import { gerarReserva } from '../../fixtures/bookingData'

describe('API - Booking Tests', () => {
  let bookingId
  const reserva = gerarReserva()

  it('Deve criar uma nova reserva', () => {
    cy.criarReserva(reserva).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('bookingid')
      bookingId = response.body.bookingid
    })
  })

  it('Deve listar reservas e encontrar a criada', () => {
    cy.listarReservas().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.some(b => b.bookingid === bookingId)).to.be.true
    })
  })

it('Deve deletar a reserva criada', function() {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrlrestful')}/auth`,
    body: {
      username: 'admin',
      password: 'password123'
    }
  }).then((res) => {
    const token = res.body.token
    cy.deletarReserva(bookingId, token).then((response) => {
      expect(response.status).to.be.oneOf([201, 200, 204])
    })
  })
  })
    })