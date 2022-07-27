class Api::AssignmentsController < ApplicationController
    before_action :authorize_teacher, only: [:create, :update]
    before_action :set_assignment, only: [:show, :update, :destroy]

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
        render json: @assignment, include: [:teacher, :student, :lecture]
    end

    def update
        @assignment.update(assignment_params)
        render json: @assignment, include: [:user, :lecture]
    end

    def destroy
        @assignment.destroy
    end

    private

    def assignment_params
        params.permit(:name, :total_points, :graded_points, :student_id, :teacher_id, :comments, :lecture_id, :teacher, :student)
    end

    def set_assignment
        @assignment = Assignment.find(params[:id])
      end

end
