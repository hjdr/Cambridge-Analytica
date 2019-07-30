class User {

  constructor(userName, first_name, surname, password, email, id) {
    this.userName = userName;
    this.first_name = first_name;
    this.surname = surname;
    this.password = password;
    this.email = email;
    this.id = id;
  }

  getUsername() {
    return this.userName
  }

  getFirstName() {
    return this.first_name
  }

  getSurname() {
    return this.surname
  }

  getPassword() {
    return this.password
  }

  getEmail() {
    return this.email
  }

  getId() {
    return this.id
  }

  static all(json) {
    var usersParse = JSON.parse(json);
    var userList = []
    usersParse.users.forEach(function(user) {
      var newUser = new User(user[0], user[1], user[2], user[3], user[4], user[5])
      userList.push(newUser)
    });
    return userList
  }

  static create(userName, first_name, surname, password, email) {
    return JSON.stringify({ userName : userName, first_name : first_name, surname : surname, password : password, email : email })
  }

  static login(userName, password) {
    return JSON.stringify({ userName : userName, password : password})
  }

  static loggedInUser(json) {
    if (json === false) {
      return json
    }; else {
      var userParse = JSON.parse(json);
      return new User(userParse[0], userParse[1], userParse[2], userParse[3], userParse[4], userParse[5]
    }
  };
}
