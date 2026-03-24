import BookingService from '../../services/bookingService'
import { gerarReserva } from '../../fixtures/bookingData'

describe('Booking API', () => {

  it('Deve criar uma reserva com sucesso', () => {

    const reserva = gerarReserva()

    BookingService.criarReserva(reserva)
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('bookingid')
        expect(response.body.booking.firstname).to.eq(reserva.firstname)

      })
  })


  it('Deve listar reservas', () => {

    BookingService.listarReservas()
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')

      })
  })


  it('Deve criar e deletar reserva', () => {

    const reserva = gerarReserva()

    BookingService.criarReserva(reserva)
      .then((createResponse) => {

        const bookingId = createResponse.body.bookingid

        BookingService.gerarToken()
          .then((token) => {

            BookingService.deletarReserva(bookingId, token)
              .then((deleteResponse) => {

                expect(deleteResponse.status)
                  .to.be.oneOf([201, 200, 204])

              })

          })

      })

  })

})