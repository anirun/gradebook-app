class LectureSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade, :teacher_id, :assignments
  has_one :teacher, serializer: UserSerializer
  has_many :students, serializer: UserSerializer
  has_many :assignments, serializer: AssignmentSerializer

end
