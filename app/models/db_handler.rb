require 'json'
require './app/models/userDB.rb'
require './app/models/property.rb'

class DatabaseHandler
    def self.convert_from_json(json)
        JSON.parse(json)
    end

    def self.add_to_DB(json)
        user = convert_from_json(json)
        p user
        users = Users.create(user_name: user["user_name"], first_name: user["first_name"], surname: user["surname"], password: user["password"], email: user["email"])
        return users.to_json
    end

    def self.delete_from_DB(user)
        user1 = Users.find(user.id)
        p "BE GONE: "
        p user1
        user1.destroy()
    end

    def self.add_property_to_DB(json)
        property = convert_from_json(json)
        property
        prop = Property.create(name: property["name"], userId: property["userId"], userName: property["userName"], description: property["description"], price: property["price"])
        prop
    end

end
