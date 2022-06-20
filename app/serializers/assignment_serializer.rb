class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :graded_points, :total_points, :grade, :comments, :student, :teacher
  has_one :student, serializer: UserSerializer
  has_one :teacher, serializer: UserSerializer
  has_on :lecture, serializer: LectureSerializer
end
