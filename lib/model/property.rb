require 'active_record'
require_relative '../../db/db_config.rb'
require_relative '../../db_connection_setup.rb'
db_configuration

class Property < ActiveRecord::Base
    validates :name, presence: true

    def self.create(name)
        
        property = Property.new(name: name)
        property.save!
    end
end