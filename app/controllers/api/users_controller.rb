class Api::UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user, status: 200
  end

  def teachers
    teachers = User.teachers
    render json: teachers, status: 200
  end

  def index
    if params[:lecture_id]
      lecture = Lecture.find(params[:lecture_id])
      render json: lecture.students
    else
      render json: UserSerializer.new(User.all).serializable_hash
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :image_url, :bio, :role, :name)
  end

end
