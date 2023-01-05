class SongsController < ApplicationController
    def index
        songs = Song.all
        render json: songs
    end
    
    def show
        newSong = params[:song].split('-').join(' ')
        song = Song.find_by!(name: newSong)
        render json: song
    end

    def update
        # newSong = params[:song].split('-').join(' ')
        song = Song.find_by!(name: params[:song])
        song.update!(valid_song_params)
    end

    def destroy
        newSong = params[:song].split('-').join(' ')
        song = User.find_by!(name: newSong)
        song.destroy
    end

    def create
        newSong = params[:song].split('-').join(' ')
        album = Album.find_by!(name: 'Unknown Album')
        song = Song.create(name: newSong, audio: params[:audio], image: params[:image], file_id: params[:file_id], date_created: params[:date_created], album_id: album.id)
    end

    private

    def valid_song_params
        params.permit(:name, :audio, :album_order, :image, :file_id, :date_created)
    end
end
