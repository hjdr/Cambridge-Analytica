class User {

  constructor(name, first_name, surname, password, email) {
    this.username = name;
    this.first_name = name;
    this.surname = name;
    this.password = name;
    this.email = name;
  }

  getUsername() {
    return this.username
  }

  getUsername() {
    return this.username
  }

  getUsername() {
    return this.username
  }

  getUsername() {
    return this.username
  }

  getUsername() {
    return this.username
  }

  static all(json) {
    var usersParse = JSON.parse(json);
    var userList = []
    usersParse.users.forEach(function(user) {
      var newUser = new User(user[0], user[1], user[2], user[3], user[4])
      userList.push(newUser)
    });
    return userList
  }

  static create(name, first_name, surname, password, email) {
    return JSON.stringify({ name : name, first_name : first_name, surname : surname, password : password, email : email })
  }
}
