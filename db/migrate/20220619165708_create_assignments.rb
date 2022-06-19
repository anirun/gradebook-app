class CreateAssignments < ActiveRecord::Migration[6.1]
  def change
    create_table :assignments do |t|
      t.string :name
      t.integer :grade
      t.references :student, null: false, foreign_key: {to_table: :users}
      t.references :teacher, null: false, foreign_key: {to_table: :users}
      t.text :comments

      t.timestamps
    end
  end
end
