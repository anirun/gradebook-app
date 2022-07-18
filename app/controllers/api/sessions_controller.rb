class Api::SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create, :omniauth]

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete(:user_id)
    render status: 201
  end

  def omniauth
    auth = {username: params["Lu"]["tf"], email: params["Lu"]["Bv"], uid: params["profileObj"]["googleId"], provider: params["provider"]}
    user = User.from_omniauth(auth)
    if user.id
      session[:user_id] = user.id
      render json: UserSerializer.new(user), status: :created
    else
      render json: {error: "Unsuccessful"}, status: :unauthorized
    end
  end

end
