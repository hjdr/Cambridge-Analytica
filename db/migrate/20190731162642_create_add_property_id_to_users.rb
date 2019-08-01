class CreateAddPropertyIdToUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :add_property_id_to_users do |t|
      add_column :users, :property_id, :integer
      add_index :users, :property_id
    end
  end
end
