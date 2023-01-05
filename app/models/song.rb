class Song < ApplicationRecord
    belongs_to :album
    has_and_belongs_to_many :playlists

    def album_name
        album.name
    end

    def artist_name
        album.artist.name
    end
end
