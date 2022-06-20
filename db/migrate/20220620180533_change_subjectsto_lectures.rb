class ChangeSubjectstoLectures < ActiveRecord::Migration[6.1]
  def change
    rename_table :subjects, :lectures
  end
end
