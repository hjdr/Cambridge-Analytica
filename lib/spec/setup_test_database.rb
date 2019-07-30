require 'pg'

p 'Setting up DB!!!'

def setup_test_database
    connection = PG.connect(dbname: 'makersbnb_test')

    coonection.exec("TRUNCATE properties;")

    # ActiveRecord::Base.connection.execute("TRUNCATE properties")
end