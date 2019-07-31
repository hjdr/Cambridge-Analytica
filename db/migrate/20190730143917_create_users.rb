class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_name, null: false
      t.string :first_name, null: false
      t.string :surname, null: false
      t.string :password, null: false
      t.string :email, null: false
    end
  end
end
