class User < ApplicationRecord
  has_secure_password
  
  has_many :given_assignments, class_name: "Assignment", foreign_key: :teacher_id, dependent: :destroy
  has_many :graded_assignments, class_name: "Assignment", foreign_key: :student_id, dependent: :destroy

  has_many :given_lectures, through: :given_assignments, source: :lecture
  has_many :taken_lectures, through: :graded_assignments, source: :lecture

  has_many :student_appointments, class_name: "Appointment", foreign_key: :student_id, dependent: :destroy
  has_many :teacher_appointments, class_name: "Appointment", foreign_key: :teacher_id, dependent: :destroy

  scope :teachers, -> {where(role: 0)}
  scope :students, -> {where(role: 1)}
  
  validates :username, presence: true, uniqueness: true
  validates :name, presence: true

  enum role: %i(teacher student)

  def self.from_omniauth(auth)
    self.find_or_create_by(provider: auth.fetch(:provider), uid: auth.fetch(:uid)) do |u|
        u.email = auth.fetch(:email)
        u.password = SecureRandom.hex(20)
        u.username = auth.fetch(:username).downcase.gsub(" ", "_")
    end
end

end
