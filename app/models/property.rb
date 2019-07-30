require 'active_record'
require './db/db_connection_setup.rb'

class Property < ActiveRecord::Base
    validates :name, presence: true

    def self.create(name)
        
        property = Property.new(name: name)
        property.save!
    end
end