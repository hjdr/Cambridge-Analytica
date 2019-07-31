require 'active_record'
require './db/db_connection_setup.rb'

class Property < ActiveRecord::Base
    belongs_to :userDB

    validates :name, presence: true
    validates :userId, presence: true
    validates :userName, presence: true
    validates :description, presence: true
    validates :price, presence: true



end