class Api::AssignmentsController < ApplicationController

    def index
        assignments = @current_user.teacher? ? @current_user.created_assignments : @current_user.graded_assignments
        render json: assignments
    end
    
    def create
        if params[:lecture_id]
            lecture = Lecture.find(params[:lecture_id])
            students = lecture.students
            assignments = students.each { |x| x.graded_assignments.create(assignment_params) }
            render json: assignments, status: 200
        else
            assignment = Assignment.create!(assignment_params)
            render json: assignment, status: 200
        end  
    end

    def show
        assignment = Assignment.find(params[:id])
        render json: assignment, status: 201
    end

    private

    def assignment_params
        params.permit(:name, :total_points, :graded_points, :student_id, :teacher_id, :comments, :lecture_id)
    end

end
