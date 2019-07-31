require 'sinatra/base'
require './db/db_connection_setup.rb'
require './app/models/db_handler.rb'
require 'json'

class ApplicationManager < Sinatra::Base

  post '/user/new' do
    payload = request.body.read
    p payload
    DatabaseHandler.add_to_db(payload)
  end

end