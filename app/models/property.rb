require 'active_record'
require './db/db_connection_setup.rb'

class Property < ActiveRecord::Base
    belongs_to :user

    validates :name, presence: true
    validates :user_id, presence: true
    validates :userName, presence: true
    validates :description, presence: true
    validates :price, presence: true



end