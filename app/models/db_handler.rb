# frozen_string_literal: true

require 'json'
require './app/models/userDB.rb'
require './app/models/property.rb'

class DatabaseHandler
  def self.add_to_DB(json)
    user = convert_from_json(json)
    users = Users.create(user_name: user['userName'], first_name: user['first_name'], surname: user['surname'], password: user['password'], email: user['email'])
    users.to_json
  end

  def self.confirm_user_exists(json)
    user = convert_from_json(json)
    p check_user_in_db(user)
    if !check_user_in_db(user).nil?
      user_name = Users.find_by(user_name: user['userName'])
      check_user_in_db(user).to_json if user_name.password == user['password']
    else
      'false'
      end
  end

  def self.check_user_in_db(user)
    Users.find_by(user_name: user['userName'])
  end

  def self.get_property(id)
    idnew = id[1..-1].to_i
    p idnew
    new = Properties.find_by(id: idnew).to_json
    p new
    new
  end

  def self.convert_from_json(json)
    JSON.parse(json)
  end

  def self.all_user_listings(user)
    properties = Property.where(user_id: user['id'])
    properties.to_json
  end

  def self.add_property_to_DB(json)
    property = convert_from_json(json)
    prop = Property.create(name: property['name'], user_id: property['userID'], userName: property['userName'], description: property['description'], price: property['price'])
    prop
  end
end

p DatabaseHandler.add_to_DB('{"userName":"kettz","password":"charlie"}')

p DatabaseHandler.confirm_user_exists('{"userName":"kettz","password":"charlie"}')
