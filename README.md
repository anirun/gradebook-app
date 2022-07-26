# Gradebook App

## Core Deliverables

As a user, I can:
1. ...sign up as a teacher or student.
2. ...access assignments that I have given as a teacher, or received as a student.
3. ...read, write and edit grades for each lecture of students (as a teacher).
4. ...create, read, update and delete appointments.

## Project Requirements
* a many-to-many relationship
  - User has_many lectures, has_many assignments through lectures
* minimum 4 models
  - User, Assignment, Lecture, Appointment
* minimum 5 client-side routes
  - Sign In, Sign Up, New Appointment, New Assignment, View Assignments, Edit Appointment, Edit Assignment
* password protection and authentication
  - password protection: salting and hashing, password_digest
  - authentication in application controller
* full CRUD on minimum 1 model, following REST conventions
  - Assignment, Appointment
* validations and error handling
* new technology not from curriculum
  - rspec test suite
* useContext
* deploy and host project with Heroku