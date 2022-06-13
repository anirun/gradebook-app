class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade, :teacher_id
end
