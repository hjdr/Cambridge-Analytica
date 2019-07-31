describe ('User', function() {

  let user;

  beforeEach(function() {
    user = new User()
    json = "{\"users\":[[\"harry123\",\"Harry\",\"Riley\",\"brum\",\"harry@harry.harry\",\"1\"],[\"charliehere\",\"Charlie\",\"Kettell\",\"charlierulez\",\"charlie@charlie.charlie\",\"2\"]]}"
    json2 = "{\"users\":[[\"harry123\",\"Harry\",\"Riley\",\"brum\",\"harry@harry.harry\",\"1\"]]}"
  });

  describe ('#all', function() {
    it('returns all the users', function() {
      var userList = User.all(json)
      console.log(userList[1])
      expect(userList[1].getFirstName()).toEqual('Charlie')
      expect(userList[1].getSurname()).toEqual('Kettell')
      expect(userList[1].getUsername()).toEqual('charliehere')
      expect(userList[1].getPassword()).toEqual('charlierulez')
      expect(userList[1].getEmail()).toEqual('charlie@charlie.charlie')
      expect(userList[1].getId()).toEqual('2')
    })
  })

  describe ('#create', function() {
    it('returns a user JSON', function() {
      expect(User.create('harry123', 'Harry', 'Riley', 'brum', 'harry@harry.harry')).toEqual('{"userName":"harry123","first_name":"Harry","surname":"Riley","password":"brum","email":"harry@harry.harry"}')
    })
  })

  describe ('#login', function() {
    it('returns a username/password JSON', function() {
      expect(User.login('harry123', 'brum')).toEqual('{"userName":"harry123","password":"brum"}')
    })
  })

  describe ('#loggedInUser', function() {
    it('returns a logged in user object', function() {
      var user = User.loggedInUser(json2)
      expect(user.getFirstName()).toEqual('Harry')
      expect(user.getSurname()).toEqual('Riley')
      expect(user.getUsername()).toEqual('harry123')
      expect(user.getPassword()).toEqual('brum')
      expect(user.getEmail()).toEqual('harry@harry.harry')
      expect(user.getId()).toEqual('1')
    })
  })
});
