describe ('User', function() {

  let user;

  beforeEach(function() {
    user = new User()
    json = "{\"users\":[[\"harry\",123],[\"charlie\",456]]}"
  });

  describe ('#all', function() {
    it('returns all the users', function() {
      var userList = User.all(json)
      expect(userList[3].getName()).toEqual('marvin')
    })
  })

  describe ('#create', function() {
    it('returns a user JSON', function() {
      expect(User.create('charlie')).toEqual('{"name":"charlie"}')
    })
  })
});
