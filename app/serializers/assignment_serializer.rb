class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :graded_points, :total_points, :grade, :comments, :student, :teacher, :lecture
  has_one :student, serializer: UserSerializer
  has_one :teacher, serializer: UserSerializer
  belongs_to :lecture, serializer: LectureSerializer
end
