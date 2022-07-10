class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :confirmed, :student_id, :teacher_id
  
end
