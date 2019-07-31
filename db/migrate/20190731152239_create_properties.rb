class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.string :name, null: false
      t.string :user_id, null: false
      t.string :userName, null: false
      t.string :description, null: false
      t.string :price, null: false
    end
  end
end
