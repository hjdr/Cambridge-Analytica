class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.string :renter_id, null: false
      t.string :landlord_id, null: false
      t.string :property_id, null: false
      t.string :property_name, null: false
      t.string :start_date, null: false
      t.string :end_date, null: false
      t.string :confirmed, null: false
    end
  end
end
