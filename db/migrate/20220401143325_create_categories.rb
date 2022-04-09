class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :title
      t.timestamps
      t.string :todos , array:true
    end
  end
end
