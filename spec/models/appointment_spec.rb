require "rails_helper"

RSpec.describe Appointment, type: :model do
  it "can be created with valid data" do
    teacher = User.create(username: "test_teacher", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 0)
    student = User.create(username: "test_student", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 1)
    appointment = Appointment.new(
      student_id: student.id,
      teacher_id: teacher.id,
      date: "17/9/2022",
      time: "15:00"
    )
    expect(Appointment).to be_valid
  end
  
  describe "validations" do
    it { is_expected.to validate_presence_of :date }
  end
end
