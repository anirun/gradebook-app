require "rails_helper"

RSpec.describe Assignment, type: :model do
  it "can be created with valid data" do
    teacher = User.create(username: "test_teacher", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 0)
    student = User.create(username: "test_student", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 1)
    assignment = Assignment.new(
      student_id: student.id,
      teacher_id: teacher.id,
      ## OTHER ATTRIBUTES
    )
    expect(assignment).to be_valid
  end
  
  describe "validations" do
    ## NEED VALIDATIONS
    it { is_expected.to validate_presence_of :date }
  end
end
