

if ENV['ENVIRONMENT'] == 'test'
  p "test db"
    ActiveRecord::Base.establish_connection(db_configuration["test"])
else
  p "dev db"
    ActiveRecord::Base.establish_connection(db_configuration["development"])
end