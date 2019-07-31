require 'json'
require './app/models/userDB.rb'

class DatabaseHandler
    def self.convert_from_json(json)
        JSON.parse(json)
    end

    def self.add_to_DB(json)
        user = convert_from_json(json)
        users = Users.create(user_name: user["userName"], first_name: user["first_name"], surname: user["surname"], password: user["password"], email: user["email"])
        return users.to_json
    end

    def self.delete_from_DB(user)
        user1 = Users.find(user.id)
        p "BE GONE: "
        p user1
        user1.destroy()
    end

end
