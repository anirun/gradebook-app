class Lecture < ApplicationRecord
    
    has_many :assignments, dependent: :destroy
    # has_many :given_assignments, class_name: "Assignment", foreign_key: :lecture_id, dependent: :destroy
    
    belongs_to :teacher, class_name: "User"
    has_many :students, class_name: "User", foreign_key: :lecture_id, through: :assignments

    validates :name, presence: true
    validates :grade, presence: true, numericality: {greater_than_or_equal_to: 6, less_than_or_equal_to: 8}

end
