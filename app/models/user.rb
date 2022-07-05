class User < ApplicationRecord
  has_secure_password
  
  has_many :given_assignments, class_name: "Assignment", foreign_key: :teacher_id, dependent: :destroy
  has_many :graded_assignments, class_name: "Assignment", foreign_key: :student_id, dependent: :destroy

  has_many :given_lectures, through: :given_assignments, source: :lecture
  has_many :taken_lectures, through: :graded_assignments, source: :lecture

  scope :teachers, -> {where(role: 0)}
  scope :students, -> {where(role: 1)}
  
  validates :username, presence: true, uniqueness: true
  validates :name, presence: true

  enum role: %i(teacher student)

end
