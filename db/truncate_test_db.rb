require 'active_record'
p 'Truncating test DB'

def truncate_test_database
    ActiveRecord::Base.connection.execute("TRUNCATE users")
end
