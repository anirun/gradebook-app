class Api::UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  def teachers
    teachers = User.teachers
    render json: teachers, status: 200
  end

  def students
    students = User.students
    render json: students, status: 200
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :image_url, :bio, :role)
  end

end
