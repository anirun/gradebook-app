class LectureSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade, :teacher_id, :assignments
  has_one :teacher, serializer: UserSerializer
  has_many :students, serializer: UserSerializer
  has_many :given_assignments, serializer: AssignmentSerializer
  has_many :graded_assignments, serializer: AssignmentSerializer

  def assignments
    # if current_user.role?
      self.object.given_assignments.map { |a| {assignment:a, student:a.student}}
    # else
      # self.object.graded_assignments.includes(:teacher)
    # end
  end
end
