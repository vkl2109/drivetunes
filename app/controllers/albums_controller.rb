class AlbumsController < ApplicationController
    def index
        render json: Album.all
    end

    def show
        albumName = params[:album].split('-').join(' ')
        album = Album.find_by!(name: albumName)
        songs = Song.where(album_id: album.id)
        render json: {album: album, songs: songs}
    end

    def update
        albumName = params[:album].split('-').join(' ')
        album = Album.find_by!(name: albumName)
        album.update!(valid_album_params)
    end

    def destroy
        albumName = params[:album].split('-').join(' ')
        album = Album.find_by!(name: albumName)
        album.destroy
    end

    private

    def valid_album_params
        params.permit(:name, :image)
    end
end
