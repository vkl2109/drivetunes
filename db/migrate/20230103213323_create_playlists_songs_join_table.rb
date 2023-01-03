class CreatePlaylistsSongsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :Playlists, :Songs do |t|
      t.index [:playlist_id, :song_id]
      t.index [:song_id, :playlist_id]
    end
  end
end
