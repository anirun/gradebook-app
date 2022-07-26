require "rails_helper"

RSpec.describe Lecture, type: :model do
  it "can be created with valid data" do
    teacher = User.create(username: "test_teacher", name: "test teacher", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 0)
    student = User.create(username: "test_student", name: "test student", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 1)
    lecture = Lecture.new(
      name: "Transfiguration", 
      grade: 8, 
      teacher_id: teacher.id)
    expect(lecture).to be_valid
  end
  
  describe "validations" do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :grade }
  end
end
