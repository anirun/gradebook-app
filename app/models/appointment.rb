class Appointment < ApplicationRecord
    belongs_to :student, class_name: "User"
    belongs_to :teacher, class_name: "User"
    validates :date, presence: true

end
