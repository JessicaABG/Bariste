class CreateJoinTableCraftsComments < ActiveRecord::Migration[6.1]
  def change
    create_join_table :crafts, :comments do |t|
      # t.index [:craft_id, :comment_id]
      # t.index [:comment_id, :craft_id]
    end
  end
end
