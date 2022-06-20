class Assignment < ApplicationRecord
  belongs_to :student, class_name: "User"
  belongs_to :teacher, class_name: "User"
  belongs_to :lecture
  
  before_save :calculate_grade

  validates :name, presence: true
  validates :total_points, :graded_points, numericality: { greater_than_or_equal_to: 0 }
  validates :comments, length: { maximum: 150 }

  private

  def calculate_grade
    graded_assignment = (self.graded_points / self.total_points) * 100
    self.grade = graded_assignment
  end
end
