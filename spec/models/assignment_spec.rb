require "rails_helper"

RSpec.describe Assignment, type: :model do
  it "can be created with valid data" do
    teacher = User.create(username: "test_teacher", name: "test teacher", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 0)
    student = User.create(username: "test_student", name: "test student", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 1)
    lecture = Lecture.create!(name: "Transfiguration", grade: 8, teacher_id: teacher.id)
    assignment = Assignment.new(
      student_id: student.id,
      teacher_id: teacher.id,
      name: "another hw",
      graded_points: 75, 
      total_points: 100,
      comments: "Okay.", 
      lecture_id: lecture.id
    )
    expect(assignment).to be_valid
  end
  
  describe "validations" do
    it { is_expected.to validate_presence_of :name }
  end
end
