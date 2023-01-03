class User < ApplicationRecord
    has_many :artists
    has_many :albums, through: :artists
    has_many :songs, through: :albums
    has_many :playlists
end
