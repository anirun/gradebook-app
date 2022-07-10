class CreateAppointmentsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments_tables do |t|
      t.date :date
      t.time :time
      t.integer :student_id
      t.integer :teacher_id
      t.binary :confirmed, default: 0

      t.timestamps
    end
  end
end
