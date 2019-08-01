# frozen_string_literal: true

require 'sinatra/base'
require './db/db_connection_setup.rb'
require './app/models/db_handler.rb'
require 'json'

class ApplicationManager < Sinatra::Base
enable :sessions

  configure do
    enable :sessions

    enable :static
    set :static, true
  end

  get '/' do
    File.read("views/index.html")
  end

  get '/user/new/' do
    File.read("views/user/new.html")
  end

  get '/user/login/' do
    File.read("views/user/login.html")
  end

  get '/property/new/' do
    p session[:loggedInUser]
    File.read("views/property/add_property.html")
  end

  post '/user/login/attempt' do
    payload = request.body.read
    session[:loggedInUser] = payload
    DatabaseHandler.confirm_user_exists(payload)
  end

  post '/user/new/' do
    payload = request.body.read
    session[:loggedInUser] = DatabaseHandler.add_to_DB(payload)
  end

  run! if app_file == $PROGRAM_NAME

end
