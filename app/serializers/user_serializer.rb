class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio, :role, :name, :lectures, :assignments
  has_many :graded_assignments, serializer: AssignmentSerializer
  has_many :given_assignments, serializer: AssignmentSerializer
  has_many :given_lectures, serializer: LectureSerializer
  has_many :taken_lectures, serializer: LectureSerializer

  def lectures
    if self.object.teacher? 
      self.object.given_lectures.order(:name).uniq
    else
      self.object.taken_lectures.order(:name).uniq
    end
  end

  def assignments
    if self.object.teacher? 
      self.object.given_assignments.map { |a| {assignment:a, student:a.student}}
    else
      self.object.graded_assignments.map { |a| {assignment:a, teacher:a.teacher}}
    end
  end
  
end
