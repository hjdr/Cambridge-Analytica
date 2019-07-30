if ENV['ENVIRONMENT'] == 'test'
    ActiveRecord::Base.establish_connection(db_configuration["test"])
else
    ActiveRecord::Base.establish_connection(db_configuration["development"])
end