class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :graded_points, :total_points, :grade, :comments, :student, :teacher
  has_one :student
  has_one :teacher
end
