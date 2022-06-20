class User < ApplicationRecord
  has_secure_password
  
  has_many :created_assignments, class_name: "Assignment", foreign_key: :teacher_id, dependent: :destroy
  has_many :graded_assignments, class_name: "Assignment", foreign_key: :student_id, dependent: :destroy

  has_many :lectures, foreign_key: :teacher_id, through: :created_assignments
  belongs_to :lecture, optional: true

  # has_many :teacher_gradebooks, class_name: "Gradebook", foreign_key: :teacher_id
  # has_many :student_gradebooks, class_name: "Gradebook", foreign_key: :student_id
  
  scope :teachers, -> {where(role: 0)}
  scope :students, -> {where(role: 1)}
  scope :admin, -> {where(role: 2)}
  
  validates :username, presence: true, uniqueness: true

  enum role: %i(teacher student admin)

end
