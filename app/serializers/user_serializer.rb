class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio, :role, :name
end
