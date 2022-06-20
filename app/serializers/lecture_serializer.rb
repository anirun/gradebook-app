class LectureSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade, :teacher_id
  has_many :students
  has_many :assignments
end