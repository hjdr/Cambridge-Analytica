class Booking {

  constructor(renter_id, landlord_id, property_id, property_name, start_date, end_date, confirmed, id) {
    this.renter_id = renter_id;
    this.landlord_id = landlord_id;
    this.property_id = property_id;
    this.property_name = property_name;
    this.start_date = start_date;
    this.end_date = end_date;
    this.confirmed = confirmed;
    this.id = id
  }

  static all(json) {
    var bookingsParse = JSON.parse(json);
    var bookings = []
    bookingsParse.forEach(function(booking) {
      var newBooking = new Booking(booking.renter_id, booking.landlord_id, booking.property_id, booking.property_name, booking.start_date, booking.end_date, booking.confirmed, booking.id)
      bookings.push(newBooking)
    });
    return bookings
  }

  static create(renter_id, landlord_id, property_id, property_name, start_date, end_date, confirmed = false) {
    return JSON.stringify({
      renter_id: renter_id,
      landlord_id: landlord_id,
      property_id: property_id,
      property_name: property_name,
      start_date: start_date,
      end_date: end_date,
      confirmed: confirmed
    })
  }
}
