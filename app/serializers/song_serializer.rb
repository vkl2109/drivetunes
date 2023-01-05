class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :album_name, :artist_name, :album_order, :audio, :date_created 

end
