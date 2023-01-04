class SongsController < ApplicationController
    def index
        render json: Song.all
    end
    
    def show
        song = Song.find_by!(google_id: params[:song])
        render json: song
    end

    def update
        song = Song.find_by!(name: params[:song])
        song.update!(valid_song_params)
    end

    def destroy
        song = User.find_by!(name: params[:song])
        song.destroy
    end

    def create
        album = Album.find_by!(name: 'Unknown Album')
        song = Song.create(name: params[:name], audio: params[:audio], image: params[:image], file_id: params[:file_id], date_created: params[:date_created], album_id: album.id)
    end

    private

    def valid_song_params
        params.permit(:name, :audio, :album_order, :image, :file_id, :date_created)
    end
end
