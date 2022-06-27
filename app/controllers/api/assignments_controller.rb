class Api::AssignmentsController < ApplicationController
    before_action :authorize_teacher, only: [:create]

    def index
        if params[:lecture_id]
            lecture = Lecture.find(params[:lecture_id])
            assignments = lecture.graded_assignments
            render json: assignments
        else
            assignments = @current_user.teacher? ? @current_user.given_assignments : @current_user.graded_assignments
            render json: assignments
        end
    end
    
    def create
        if params[:lecture_id]
            lecture = Lecture.find(params[:lecture_id])
            students = lecture.students
            assignments = students.each { |x| x.graded_assignments.create!(assignment_params) }
            render json: assignments, status: 200
        else
            assignment = Assignment.create!(assignment_params)
            render json: assignment, status: 200
        end  
    end

    def show
        assignment = Assignment.find(params[:id])
        render json: assignment, include: [:user, :lecture]
    end

    private

    def assignment_params
        params.permit(:name, :total_points, :graded_points, :student_id, :teacher_id, :comments, :lecture_id)
    end

end
