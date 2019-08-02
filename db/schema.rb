# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_01_144954) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "hstore"
  enable_extension "plpgsql"

  create_table "add_property_id_to_users", force: :cascade do |t|
  end

<<<<<<< HEAD
  create_table "bookings", force: :cascade do |t|
    t.string "renter_id", null: false
    t.string "landlord_id", null: false
    t.string "property_id", null: false
    t.string "property_name", null: false
    t.string "start_date", null: false
    t.string "end_date", null: false
    t.string "confirmed", null: false
=======
  create_table "my_test_tab", id: false, force: :cascade do |t|
    t.integer "a"
>>>>>>> origin
  end

  create_table "properties", force: :cascade do |t|
    t.string "name", null: false
    t.string "user_id", null: false
    t.string "userName", null: false
    t.string "description", null: false
    t.string "price", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name", null: false
    t.string "first_name", null: false
    t.string "surname", null: false
    t.string "password", null: false
    t.string "email", null: false
    t.integer "property_id"
    t.index ["property_id"], name: "index_users_on_property_id"
  end

end
