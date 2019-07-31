require 'active_record'
require './db/db_connection_setup.rb'

class Users < ActiveRecord::Base
    has_many :property

    validates :user_name, presence: true
    validates :first_name, presence: true
    validates :surname, presence: true
    validates :password, presence: true
    validates :email, presence: true



end