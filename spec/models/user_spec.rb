require "rails_helper"


    

RSpec.describe User, type: :model do
  it "can successfully create a student profile with valid data" do
    student = User.create(username: "test_student", name: "test student", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 1)
    expect(student).to be_valid
  end

  it "can successfully create a teacher profile with valid data" do
    teacher = User.create(username: "test_teacher", name: "test teacher", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 0)
    expect(teacher).to be_valid
  end

  it "has many lectures" do
    student = User.create(username: "test_student", name: "test student", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 1)
    teacher = User.create(username: "test_teacher", name: "test teacher", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 0)
    expect(teacher).to respond_to(:given_lectures)
    expect(student).to respond_to(:taken_lectures)
  end

  it "has many appointments" do
    student = User.create(username: "test_student", name: "test student", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 1)
    teacher = User.create(username: "test_teacher", name: "test teacher", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 0)
    expect(teacher).to respond_to(:student_appointments)
    expect(student).to respond_to(:teacher_appointments)
  end

  it "has many assignments" do
    student = User.create(username: "test_student", name: "test student", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 1)
    teacher = User.create(username: "test_teacher", name: "test teacher", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 0)
    expect(teacher).to respond_to(:given_assignments)
    expect(student).to respond_to(:graded_assignments)
  end  

  describe "validations" do
    it { is_expected.to validate_presence_of(:username) }
    it { is_expected.to validate_presence_of(:role) }
    it { is_expected.to validate_uniqueness_of(:username) }
  end

  describe "authenticate" do
    it "returns the user if credentials match" do
      teacher = User.create(username: "test_teacher", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 0)
      expect(teacher.authenticate("sup3r-secret")).to eq(teacher)
    end
    
    it "returns false if credentials don't match" do
      teacher = User.create(username: "test_teacher", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 0)
      expect(teacher.authenticate("nope")).to be(false)
    end
  end
end
