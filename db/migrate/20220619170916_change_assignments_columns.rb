class ChangeAssignmentsColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column(:assignments, :grade)
    add_column(:assignments, :total_points, :integer)
    add_column(:assignments, :graded_points, :float)
    add_column(:assignments, :grade, :float)
  end
end
