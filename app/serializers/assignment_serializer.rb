class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :graded_points, :total_points, :grade, :comments, :student, :teacher, :lecture
  belongs_to :student, serializer: UserSerializer
  belongs_to :teacher, serializer: UserSerializer
  belongs_to :lecture, serializer: LectureSerializer
end
