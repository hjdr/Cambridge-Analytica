
-- Create Database
bundle exec rake db:create

-- Create First Migration
bundle exec rake db:new_migration[create_properties]
bundle exec rake db:new_migration[create_users]
bundle exec rake db:new_migration[create_users]
-- Invoke
bundle exec rake db:migrate
rake db:migrate db:test:prepare
