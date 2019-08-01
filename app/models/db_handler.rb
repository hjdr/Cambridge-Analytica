require 'json'
require './app/models/userDB.rb'
require './app/models/property.rb'

class DatabaseHandler

    def self.add_to_DB(json)
        user = convert_from_json(json)
        users = Users.create(user_name: user["userName"], first_name: user["first_name"], surname: user["surname"], password: user["password"], email: user["email"])
        return users.to_json
    end

    def self.confirm_user_exists(json)
      user = convert_from_json(json)
        if check_user_in_db(user)
          user_name = Users.find_by(user_name: user['userName'])
          'true' if user_name.password == user['password']
        else
          'false'
        end
    end


    private

    def self.check_user_in_db(user)
      Users.find_by(user_name: user['userName']) != nil
    end

    def self.convert_from_json(json)
        JSON.parse(json)
    end

    def self.all_user_listings(user)
        properties = Property.where(user_id: user['id'])
        return properties.to_json
    end

    def self.add_property_to_DB(json)
        property = convert_from_json(json)
        prop = Property.create(name: property["name"], user_id: property["userID"], userName: property["userName"], description: property["description"], price: property["price"])
        return prop
    end

end

p DatabaseHandler.add_to_DB('{"userName":"kettz","password":"charlie"}')

p DatabaseHandler.confirm_user_exists('{"userName":"kettz","password":"charlie"}')
