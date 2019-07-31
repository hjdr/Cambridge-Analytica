require 'json'
require './app/models/userDB.rb'

class JsonConverter 
    def self.convert_from_json(json)
        JSON.parse(json)
    end

    def self.add_to_DB(json)
        user = convert_from_json(json)
        users = Users.create(user_name: user["user_name"], first_name: user["first_name"], surname: user["surname"], password: user["password"], email: user["email"])
    end

    def self.delete_from_DB(user)
        user1 = Users.find(user.id)
        p "BE GONE: "
        p user1
        user1.destroy()
    end

end
