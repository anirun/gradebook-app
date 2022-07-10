class RenameAppointmentsTable < ActiveRecord::Migration[6.1]
  def change
    rename_table :appointments_tables, :appointments
  end
end
