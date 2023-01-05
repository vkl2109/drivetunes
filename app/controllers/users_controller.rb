class UsersController < ApplicationController
    def index
        render json: User.all
    end
    
    def show
        user = User.find_by!(google_id: params[:google_id])
        render json: user
    end

    def update
        user = User.find_by!(name: params[:name])
        user.update!(valid_user_params)
    end

    def updateArtistAlbum
        user = User.find_by!(google_id: params[:google_id])
        artist = Artist.find_by(name: params[:artist])
        if artist.nil? 
            artist = Artist.create(name: params[:artist], user_id: user.id )
        end
        album = Album.find_by(name: params[:album])
        if album.nil?
            album = Album.create(name: params[:album], artist_id: artist.id)
        end
        songs = params[:songs]
        songs.each do |song|
            currentSong = Song.find_by(name: song)
            currentSong.update!(album_id: album.id)
        end
    end

    def destroy
        user = User.find_by!(name: params[:name])
        user.destroy
    end

    private

    def valid_user_params
        params.permit(:name, :artist, :album, :email, :profile_img, :songs)
    end
end
