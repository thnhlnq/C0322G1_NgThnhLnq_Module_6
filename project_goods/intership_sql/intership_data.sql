DROP DATABASE IF EXISTS internship;
CREATE DATABASE internship;

USE internship;

-- KHOA
CREATE TABLE faculty (
    faculty_id CHAR(10) PRIMARY KEY, 
    faculty_name CHAR(30),
    phone CHAR(10)
);

-- GIANG VIEN
CREATE TABLE instructor (
    instructor_id INT PRIMARY KEY,
    instructor_name CHAR(30),
    salary DECIMAL(5, 2),
    faculty_id CHAR(10),
    FOREIGN KEY (faculty_id) REFERENCES faculty (faculty_id)
);

-- SINH VIEN
CREATE TABLE student (
    student_id INT PRIMARY KEY,
    student_name CHAR(40),
    faculty_id CHAR(10),
    date_of_birth INT,
    place_of_birth CHAR(30),
    FOREIGN KEY (faculty_id) REFERENCES faculty (faculty_id)
);

-- DE TAI
CREATE TABLE project (
    project_id CHAR(10) PRIMARY KEY,
    project_name CHAR(30),
    expense INT,
    place_of_intern CHAR(30)
);

-- HUONG DAN THUC TAP
CREATE TABLE instructor_student (
    student_id INT PRIMARY KEY,
    project_id CHAR(10),
    instructor_id INT,
    grade DECIMAL(5, 2),
    FOREIGN KEY (student_id) REFERENCES student (student_id),
    FOREIGN KEY (project_id) REFERENCES project (project_id),
    FOREIGN KEY (instructor_id) REFERENCES instructor (instructor_id)
);

INSERT INTO faculty VALUES
('Geo', 'Dia ly va QLTN', 3855413), 
('Math', 'Toan', 3855411), 
('Bio', 'Cong nghe Sinh hoc', 3855412);

INSERT INTO instructor VALUES
(11, 'Thanh Binh', 700, 'Geo'),     
(12, 'Thu Huong', 500, 'Math'), 
(13, 'Chu Vinh', 650, 'Geo'), 
(14, 'Le Thi Ly', 500, 'Bio'), 
(15, 'Tran Son', 900, 'Math');

INSERT INTO student VALUES
(1, 'Le Van Son', 'Bio', 1990, 'Nghe An'), 
(2, 'Nguyen Thi Mai', 'Geo', 1990, 'Thanh Hoa'), 
(3, 'Bui Xuan Duc', 'Math', 1992, 'Ha Noi'), 
(4, 'Nguyen Van Tung', 'Bio', null, 'Ha Tinh'), 
(5, 'Le Khanh Linh', 'Bio', 1989, 'Ha Nam'), 
(6, 'Tran Khac Trong', 'Geo', 1991, 'Thanh Hoa'), 
(7, 'Le Thi Van', 'Math', null, 'null'), 
(8, 'Hoang Van Duc', 'Bio', 1992, 'Nghe An');

INSERT INTO project VALUES
('PRJ01', 'GIS', 100, 'Nghe An'), 
('PRJ02', 'ARC GIS', 500, 'Nam Dinh'), 
('PRJ03', 'Spatial DB', 100,  'Ha Tinh'), 
('PRJ04', 'MAP', 300, 'Quang Binh');

INSERT INTO instructor_student VALUES
(1, 'PRJ01', 13, 8), 
(2, 'PRJ03', 14, 0), 
(3, 'PRJ03', 12, 10), 
(5, 'PRJ04', 14, 7), 
(6, 'PRJ01', 13, null), 
(7, 'PRJ04', 11, 10), 
(8, 'PRJ03', 15, 6);