require 'json'
require './app/models/userDB.rb'

class DatabaseHandler

    def self.add_to_DB(json)
        user = convert_from_json(json)
        users = Users.create(user_name: user["userName"], first_name: user["first_name"], surname: user["surname"], password: user["password"], email: user["email"])
    end

    def self.confirm_user_exists(json)
      user = convert_from_json(json)
      user_name = Users.find_by(user_name: user['userName'])
      if user_name.user_name == user['userName'] && user_name.password == user['password']
        user_name
      else
        "No username or password"
      end
    end


    private

    def self.convert_from_json(json)
        JSON.parse(json)
    end


end
