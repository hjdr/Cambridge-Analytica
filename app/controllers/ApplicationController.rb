# frozen_string_literal: true

require 'sinatra/base'
require './db/db_connection_setup.rb'
require './app/models/db_handler.rb'
require 'json'

class ApplicationManager < Sinatra::Base

  configure do
    enable :static
    set :static, true
    set :views, "views"
    set :public_folder, File.dirname(__FILE__) + "/public/src"
  end

  get '/user/new' do
    File.read("views/user/new.html")
  end

  post '/user/new' do
    payload = request.body.read
    p payload
    DatabaseHandler.add_to_db(payload)
    redirect 'user/new'
  end

  run! if app_file == $PROGRAM_NAME

end
