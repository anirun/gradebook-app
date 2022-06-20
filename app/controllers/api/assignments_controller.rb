class Api::AssignmentsController < ApplicationController

    def create
        assignment = Assignment.create!(assignment_params)
        render json: assignment, status: 200
    end

    def show
        assignment = Assignment.find(params[:id])
        render json: assignment, status: 201
    end

    def index
        assignments = Assignment.all
        render json: assignments, status: 201
    end

    private

    def assignment_params
        params.permit(:name, :total_points, :graded_points, :student_id, :teacher_id, :comments)
    end

end
