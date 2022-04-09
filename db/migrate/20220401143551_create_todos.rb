class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :text
      t.boolean :isCompleted
      t.string :isChecked
      t.belongs_to :category ,index: true, foreign_key: true
      t.timestamps
    end
  end
end
