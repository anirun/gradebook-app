class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade, :comments
  has_one :student
  has_one :teacher
end
