export const gerarReserva = () => {
  const random = Math.floor(Math.random() * 10000)
  return {
    firstname: `teste${random}`,
    lastname: `teste${random}`,
    totalprice: Math.floor(Math.random() * 500) + 100,
    depositpaid: true,
    bookingdates: {
      checkin: "2026-03-12",
      checkout: "2026-03-20"
    },
    additionalneeds: "Breakfast"
  }
}