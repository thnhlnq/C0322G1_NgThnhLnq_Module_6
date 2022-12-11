-- Phần I --
-- 1. Đưa ra thông tin gồm mã số, họ tên và tên khoa của tất cả các giảng viên -- 
SELECT 
    instructor.instructor_id,
    instructor.instructor_name,
    faculty.faculty_name
FROM instructor
JOIN faculty ON faculty.faculty_id = instructor.faculty_id;

-- 2. Đưa ra thông tin gồm mã số, họ tên và tên khoa của các giảng viên của khoa ‘DIA LY va QLTN’ --
SELECT 
    instructor.instructor_id,
    instructor.instructor_name,
    faculty.faculty_name
FROM instructor
JOIN faculty ON faculty.faculty_id = instructor.faculty_id
WHERE faculty.faculty_name = 'DIA LY va QLTN';

-- 3. Cho biết số sinh viên của khoa ‘CONG NGHE SINH HOC’ --
SELECT 
    COUNT(faculty.faculty_name) AS 'Số Sinh Viên Khoa CNSH'
FROM faculty
JOIN student ON student.faculty_id = faculty.faculty_id
WHERE faculty.faculty_name = 'CONG NGHE SINH HOC';

-- 4. Đưa ra danh sách gồm mã số, họ tên và tuổi của các sinh viên khoa ‘TOAN’ -- 
SELECT 
    student.student_id,
    student.student_name,
    YEAR(CURRENT_DATE()) - student.date_of_birth AS 'tuoi',
    faculty.faculty_name
FROM student
JOIN faculty ON faculty.faculty_id = student.faculty_id
WHERE faculty.faculty_name = 'TOAN';

-- 5. Cho biết số giảng viên của khoa ‘CONG NGHE SINH HOC’ --
SELECT 
    COUNT(faculty.faculty_name) AS 'Số Giảng Viên Khoa CNSH'
FROM faculty
JOIN instructor ON instructor.faculty_id = faculty.faculty_id
WHERE faculty.faculty_name = 'CONG NGHE SINH HOC';

-- 6. Cho biết thông tin về sinh viên không tham gia thực tập --
SELECT student.*
FROM student
LEFT JOIN instructor_student ON instructor_student.student_id = student.student_id
LEFT JOIN project ON project.project_id = instructor_student.project_id
WHERE project.project_id IS NULL; 

-- 7. Đưa ra mã khoa, tên khoa và số giảng viên của mỗi khoa --
SELECT 
    faculty.faculty_id,
    faculty.faculty_name,
    COUNT(instructor.instructor_id) AS 'Số GV'
FROM faculty
JOIN instructor ON instructor.faculty_id = faculty.faculty_id
GROUP BY faculty.faculty_id;

-- 8. Cho biết số điện thoại của khoa mà sinh viên có tên ‘Le van son’ đang theo học --
SELECT student.student_name, faculty.phone
FROM student
JOIN faculty ON faculty.faculty_id = student.faculty_id
WHERE student.student_name = 'Le van son';

-- Phần II --
-- 1. Cho biết mã số và tên của các đề tài do giảng viên ‘Tran son’ hướng dẫn --
SELECT project.project_id, project.project_name
FROM project
JOIN instructor_student ON instructor_student.project_id = project.project_id
JOIN instructor ON instructor.instructor_id = instructor_student.instructor_id
WHERE instructor.instructor_name = 'Tran son';

-- 2. Cho biết tên đề tài không có sinh viên nào thực tập --
SELECT project.*
FROM project
LEFT JOIN instructor_student ON instructor_student.project_id = project.project_id
LEFT JOIN student ON student.student_id = instructor_student.student_id
WHERE student.student_id IS NULL;

-- 3. Cho biết mã số, họ tên, tên khoa của các giảng viên hướng dẫn từ 3 sinh viên trở lên. --
SELECT 
    instructor.instructor_id,
    instructor.instructor_name,
    faculty.faculty_name,
    COUNT(student.student_id) AS 'Số SV'
FROM instructor
JOIN faculty ON faculty.faculty_id = instructor.faculty_id
JOIN instructor_student ON instructor_student.instructor_id = instructor.instructor_id
JOIN student ON student.student_id = instructor_student.student_id
GROUP BY instructor.instructor_id
HAVING COUNT(student.student_id) > 3;

-- 4. Cho biết mã số, tên đề tài của đề tài có kinh phí cao nhất --
SELECT project.project_id, project.project_name, project.expense
FROM project
WHERE project.expense = (SELECT MAX(project.expense) FROM project);

-- 5. Cho biết mã số và tên các đề tài có nhiều hơn 2 sinh viên tham gia thực tập --
SELECT 
    project.project_id,
    project.project_name,
    COUNT(student.student_id) AS 'Số SV TT'
FROM project
JOIN instructor_student ON instructor_student.project_id = project.project_id
JOIN student ON student.student_id = instructor_student.student_id
GROUP BY project.project_id;

-- 6. Đưa ra mã số, họ tên và điểm của các sinh viên khoa ‘DIALY và QLTN’ --
SELECT 
    student.student_id,
    student.student_name,
    instructor_student.grade,
    faculty.faculty_name
FROM student
JOIN faculty ON faculty.faculty_id = student.faculty_id
JOIN instructor_student ON instructor_student.student_id = student.student_id
WHERE faculty.faculty_name LIKE '%DIA LY và QLTN%';

-- 7. Đưa ra tên khoa, số lượng sinh viên của mỗi khoa --
SELECT 
    faculty.faculty_name, COUNT(student.student_id) AS 'Số SV'
FROM faculty
JOIN student ON student.faculty_id = faculty.faculty_id
GROUP BY faculty.faculty_name;

-- 8. Cho biết thông tin về các sinh viên thực tập tại quê nhà --
SELECT student.*
FROM student
JOIN instructor_student ON instructor_student.student_id = student.student_id
JOIN project ON project.project_id = instructor_student.project_id
WHERE student.place_of_birth = project.place_of_intern;

-- 9. Hãy cho biết thông tin về những sinh viên chưa có điểm thực tập --
SELECT student.*, instructor_student.grade
FROM student
JOIN instructor_student ON instructor_student.student_id = student.student_id
WHERE instructor_student.grade IS NULL;

-- 10. Đưa ra danh sách gồm mã số, họ tên các sinh viên có điểm thực tập bằng 0 --
SELECT student.*, instructor_student.grade
FROM student
JOIN instructor_student ON instructor_student.student_id = student.student_id
WHERE instructor_student.grade = 0;
