class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio, :role, :name
  has_many :graded_assignments, serializer: AssignmentSerializer
  has_many :created_assignments, serializer: AssignmentSerializer
end
