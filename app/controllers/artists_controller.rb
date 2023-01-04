class ArtistsController < ApplicationController
    def index
        render json: Artist.all
    end

    def show
        artistName = params[:artist].split('-').join(' ')
        artist = Artist.find_by!(name: artistName)
        albums = Album.where(artist_id: artist.id)
        render json: {artist: artist, albums: albums}
    end

    def update
        artistName = params[:artist].split('-').join(' ')
        artist = artist.find_by!(name: artistName)
        artist.update!(valid_artist_params)
    end

    def destroy
        artistName = params[:artist].split('-').join(' ')
        artist = artist.find_by!(name: artistName)
        user.destroy
    end

    private

    def valid_artist_params
        params.permit(:name, :image)
    end
end
