class Lecture < ApplicationRecord
    belongs_to :teacher, class_name: "User"
    has_many :assignments, dependent: :destroy
    has_many :students, through: :assignments

    validates :name, presence: true
    validates :grade, presence: true, numericality: {greater_than_or_equal_to: 6, less_than_or_equal_to: 8}

end
