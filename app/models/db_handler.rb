require 'json'
require './app/models/userDB.rb'

class DatabaseHandler

    def self.add_to_DB(json)
        user = convert_from_json(json)
        users = Users.create(user_name: user["userName"], first_name: user["first_name"], surname: user["surname"], password: user["password"], email: user["email"])
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


end

p DatabaseHandler.add_to_DB('{"userName":"kettz","password":"charlie"}')

p DatabaseHandler.confirm_user_exists('{"userName":"kettz","password":"charlie"}')
