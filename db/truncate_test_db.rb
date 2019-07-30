
p 'Truncating test DB'

def truncate_test_database
    ActiveRecord::Base.connection.execute("TRUNCATE properties")
end
