class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :confirmed, :student_id, :teacher_id
  has_one :student, serializer: UserSerializer
  has_one :teacher, serializer: UserSerializer
  
end
