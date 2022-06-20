class LectureSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade, :teacher_id
  has_one :teacher, serializer: UserSerializer
  has_many :students
  has_many :graded_assignments
end
