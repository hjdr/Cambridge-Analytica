
-- Create Database
rake db:migrate db:test:prepare
bundle exec rake db:create

-- Create First Migration
bundle exec rake db:new_migration[CreateUsers]
bundle exec rake db:new_migration[CreateProperties]
bundle exec rake db:new_migration[CreateAddPropertyIdToUsers]
-- Invoke
bundle exec rake db:migrate
bundle exec rake db:test:prepare
