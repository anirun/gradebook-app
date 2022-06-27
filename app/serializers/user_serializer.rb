class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio, :role, :name, :lectures, :assignments
  has_many :graded_assignments, serializer: AssignmentSerializer
  has_many :given_assignments, serializer: AssignmentSerializer

  def lectures
    if self.object.teacher? 
      self.object.given_lectures.includes(:given_assignments).uniq
    else
      self.object.taken_lectures.includes(:graded_assignments).uniq
    end
  end

  def assignments
    if self.object.teacher? 
      self.object.given_assignments.map { |a| {assignment:a, student:a.student}}
    else
      self.object.graded_assignments.includes(:teacher)
    end
  end
  
end
