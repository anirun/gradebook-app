class Api::LecturesController < ApplicationController
  before_action :set_lecture, only: [:show, :update, :destroy]

  # GET /lectures
  def index
    if params[:user_id]
        user = User.find(params[:user_id])
        @lectures = user.lectures
        render json: @lectures, include: :assignments
    else
      @lectures = Lecture.all
      render json: @lectures
    end
  end

  # GET /lectures/1
  def show
    render json: @lecture, include: [:assignments, :user]
  end

  # POST /lectures
  def create
    @lecture = Lecture.create!(lecture_params)
    render json: @lecture, status: :created, location: @lecture
  end

  # PATCH/PUT /lectures/1
  def update
    if @lecture.update(lecture_params)
      render json: @lecture
    else
      render json: @lecture.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lectures/1
  def destroy
    @lecture.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lecture
      @lecture = Lecture.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def lecture_params
      params.require(:lecture).permit(:name, :grade, :teacher_id)
    end
end
