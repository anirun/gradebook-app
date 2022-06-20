class AddLectureIdToAssignments < ActiveRecord::Migration[6.1]
  def change
    add_reference :assignments, :lecture, foreign_key: true
  end
end
