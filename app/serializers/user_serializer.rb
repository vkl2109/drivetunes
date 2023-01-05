class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :profile_img, :google_id, :artists, :albums
end
