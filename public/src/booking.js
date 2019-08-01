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

  // static all(json) {
  //   var usersParse = JSON.parse(json);
  //   var userList = []
  //   usersParse.users.forEach(function(user) {
  //     var newUser = new User(user[0], user[1], user[2], user[3], user[4], user[5])
  //     userList.push(newUser)
  //   });
  //   return userList
  // }

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
