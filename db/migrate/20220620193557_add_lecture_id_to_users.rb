class AddLectureIdToUsers < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :lecture, foreign_key: true
  end
end
