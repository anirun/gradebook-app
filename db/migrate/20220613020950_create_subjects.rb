class CreateSubjects < ActiveRecord::Migration[6.1]
  def change
    create_table :subjects do |t|
      t.string :name
      t.integer :grade
      t.integer :teacher_id

      t.timestamps
    end
  end
end
