class CreateCrafts < ActiveRecord::Migration[6.1]
  def change
    create_table :crafts do |t|
      t.string :img_url
      t.string :about
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
