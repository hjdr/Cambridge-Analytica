require 'active_record'
require './db/db_config.rb'

if ENV['ENVIRONMENT'] == 'test'
  ActiveRecord::Base.establish_connection(db_configuration["test"])
  ActiveRecord::Base.connection
puts "connect to test database" if ActiveRecord::Base.connected?
else
  ActiveRecord::Base.establish_connection(db_configuration["development"])
  ActiveRecord::Base.connection
  puts "connected to development database" if ActiveRecord::Base.connected?
end
