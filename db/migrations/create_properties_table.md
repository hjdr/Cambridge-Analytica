
-- Create Database
bundle exec rake db:create

-- Create First Migration
bundle exec rake db:new_migration[create_properties]

-- Invoke
bundle exec rake db:migrate