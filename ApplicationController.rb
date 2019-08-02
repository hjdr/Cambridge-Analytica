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

  get '/user/all_listings/' do
    user = JSON.parse(session[:logged_in_user])
    return DatabaseHandler.all_user_listings(user)
  end

  get '/user/login/' do
    File.read("views/user/login.html")
  end

  get '/user/logged_in/' do
    session[:logged_in_user]
  end

  get '/user/all/' do

  end

  get '/property/new/' do
    File.read("views/property/new.html")
  end

  post '/property/new/' do
    payload = request.body.read
    DatabaseHandler.add_property_to_DB(payload)
  end

  post '/user/login/attempt' do
    payload = request.body.read
    session[:logged_in_user] = DatabaseHandler.confirm_user_exists(payload)
  end

  post '/user/new/' do
    payload = request.body.read
    session[:logged_in_user] = DatabaseHandler.add_to_DB(payload)
  end

  post '/user/logout/' do
    session[:logged_in_user] = nil
  end

  post '/booking/new/' do
    payload = request.body.read
    DatabaseHandler.add_booking_to_DB(payload)
  end

  get '/booking/all/' do
    File.read("views/booking/all.html")
  end

  run! if app_file == $PROGRAM_NAME

end
