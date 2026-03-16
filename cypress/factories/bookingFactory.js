import { faker } from '@faker-js/faker'

export function createBookingPayload() {

  return {
    firstname: faker.person.firstName(),

    lastname: faker.person.lastName(),

    totalprice: faker.number.int({
      min: 100,
      max: 1000
    }),

    depositpaid: true,

    bookingdates: {
      checkin: "2024-01-01",
      checkout: "2024-01-10"
    },

    additionalneeds: "Breakfast"
  }

}