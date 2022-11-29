create database if not exists demo_where_having;

use demo_where_having;

CREATE TABLE customer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    gender VARCHAR(45),
    city VARCHAR(45),
    sales_amount INT
);

insert into customer(gender, city, sales_amount) values 
('Nam',	'Hà Nội', 200000),
('Nam',	'Hồ Chí Minh', 315000),
('Nữ', 'Hà Nội', 160000),
('Nữ', 'Hà Nội', 120000),
('Nam', 'Hồ Chí Minh', 125000),
('Nữ', 'Đà Nẵng', 185000),
('Nam', 'Đà Nẵng', 316000),
('Nữ', 'Hải Phòng', 295000);

-- where --
SELECT *
FROM customer
WHERE sales_amount > 200000;

-- having --
SELECT city, SUM(sales_amount) AS Total_Sales
FROM customer
GROUP BY city
HAVING SUM(sales_amount) > 450000;
