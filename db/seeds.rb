puts '💣 💣 💣 '

User.destroy_all
User.reset_pk_sequence
Assignment.destroy_all
Assignment.reset_pk_sequence
Lecture.destroy_all
Lecture.reset_pk_sequence

puts '🌱 🌱 🌱'

u1 = User.create!(
        name: "Nurina", 
        username: "nurina", 
        password: "1234", 
        image_url: "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg", 
        role: 0)

l1 = Lecture.create!(name: "English", grade: 6, teacher: u1)
l2 = Lecture.create!(name: "Spanish", grade: 8, teacher: u1)

u2 = User.create!(
        name: "Devin", 
        username: "devin", 
        password: "1234", 
        image_url: "https://www.purina.co.uk/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageHERO.jpg", 
        role: 1)
u3 = User.create!(
        name: "Hanna", 
        username: "hanna", 
        password: "1234", 
        image_url: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9", 
        role: 1)

a1 = Assignment.create!(name: "homework", student: u2, teacher: u1, graded_points: 75, comments: "Okay.", lecture: l2)
a2 = Assignment.create!(name: "homework", student: u3, teacher: u1, graded_points: 85, comments: "Good.", lecture: l1)

puts '🪴🪴🪴🪴🪴'