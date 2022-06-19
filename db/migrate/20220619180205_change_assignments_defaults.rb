class ChangeAssignmentsDefaults < ActiveRecord::Migration[6.1]
  def change
    change_column_defeault :assignments, :graded_points, 0
    change_column_defeault :assignments, :total_points, 100
  end
end
