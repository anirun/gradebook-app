class ChangeAssignmentsDefaults < ActiveRecord::Migration[6.1]
  def change
    change_column_default :assignments, :graded_points, 0
    change_column_default :assignments, :total_points, 100
  end
end
