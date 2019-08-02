# frozen_string_literal: true

require 'json'
require './app/models/userDB.rb'
require './app/models/property.rb'
require './app/models/bookings.rb'

class DatabaseHandler
  def self.add_to_DB(json)
    user = convert_from_json(json)
    users = Users.create(user_name: user['userName'], first_name: user['first_name'], surname: user['surname'], password: user['password'], email: user['email'])
    users.to_json
  end

  def self.confirm_user_exists(json)
    user = convert_from_json(json)
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

  def self.add_booking_to_DB(json)
    booking = convert_from_json(json)
    booking = Bookings.create(renter_id: booking['renter_id'], landlord_id: booking['landlord_id'], property_id: booking['property_id'], property_name: booking['property_name'], start_date: booking['start_date'], end_date: booking['end_date'], confirmed: booking['confirmed'])
    booking
  end

  def self.convert_from_json(json)
    JSON.parse(json)
  end

  def self.all_user_listings(user)
    properties = Property.where(user_id: user['id'])
    properties.to_json
  end

  def self.all_user_bookings(user)
    bookings = Bookings.where(renter_id: user['id']).or(Bookings.where(landlord_id: user['id']))
    p bookings
    bookings.to_json
  end

  def self.add_property_to_DB(json)
    property = convert_from_json(json)
    prop = Property.create(name: property['name'], user_id: property['userID'], userName: property['userName'], description: property['description'], price: property['price'])
    prop
  end
end
