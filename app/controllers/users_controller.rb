class UsersController < ApplicationController
    def index
        render json: User.all
    end
    
    def show
        user = User.find_by!(google_id: params[:google_id])
        artists = Artist.where(user_id: user.id)
        render json: {user: user, artists: artists}
    end

    def update
        user = User.find_by!(name: params[:name])
        name.update!(valid_user_params)
    end

    def destroy
        user = User.find_by!(name: params[:name])
        name.destroy
    end

    private

    def valid_user_params
        params.permit(:name, :email, :profile_img)
    end
end
