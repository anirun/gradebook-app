require "rails_helper"

RSpec.describe User, type: :model do
  it "can successfully create a student profile with valid data" do
    student = User.create(username: "test_student", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 1)
    expect(student).to be_valid
  end

  it "can successfully create a teacher profile with valid data" do
    teacher = User.create(username: "test_teacher", password: "sup3r-secret", image_url: "https://via.placeholder.com/150", role: 0)
    expect(teacher).to be_valid
  end

  it "has many lectures" do
    expect(User.new).to respond_to(:lectures)
  end

  it "has many appointments" do
    expect(User.new).to respond_to(:appointments)
  end

  it "has many assignments" do
    expect(User.new).to respond_to(:assignments)
  end  

  describe "validations" do
    it { is_expected.to validate_presence_of(:username) }
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
