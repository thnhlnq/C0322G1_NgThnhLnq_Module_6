drop database if exists book_store;

create database book_store;

use book_store;

CREATE TABLE `author` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `category` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `discount` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `percent` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `book` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(255) DEFAULT NULL,
    `description` LONGTEXT,
    `dimension` VARCHAR(255) DEFAULT NULL,
    `image` LONGTEXT,
    `name` VARCHAR(255) DEFAULT NULL,
    `price` DOUBLE DEFAULT NULL,
    `publisher` VARCHAR(255) DEFAULT NULL,
    `quantity` INT DEFAULT NULL,
    `release_date` VARCHAR(255) DEFAULT NULL,
    `status` BIT(1) DEFAULT NULL,
    `total_page` INT DEFAULT NULL,
    `translator` VARCHAR(255) DEFAULT NULL,
    `author_id` INT DEFAULT NULL,
    `category_id` INT DEFAULT NULL,
    `discount_id` INT DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`category_id`)
        REFERENCES `category` (`id`),
    FOREIGN KEY (`discount_id`)
        REFERENCES `discount` (`id`),
    FOREIGN KEY (`author_id`)
        REFERENCES `author` (`id`)
);
CREATE TABLE `users` (
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) DEFAULT NULL,
    `flag` BIT(1) NOT NULL,
    PRIMARY KEY (`username`)
);
CREATE TABLE `customer` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(255) DEFAULT NULL,
    `birthday` VARCHAR(255) DEFAULT NULL,
    `email` VARCHAR(255) DEFAULT NULL,
    `gender` INT DEFAULT NULL,
    `name` VARCHAR(255) DEFAULT NULL,
    `phone` VARCHAR(255) DEFAULT NULL,
    `status` BIT(1) DEFAULT NULL,
    `username` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`username`)
        REFERENCES `users` (`username`)
);
CREATE TABLE `cart` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `date_create` VARCHAR(255) DEFAULT NULL,
    `status` BIT(1) DEFAULT NULL,
    `customer_id` INT DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`customer_id`)
        REFERENCES `customer` (`id`)
);
CREATE TABLE `cart_detail` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `quantity` INT DEFAULT NULL,
    `book_id` INT DEFAULT NULL,
    `cart_id` INT DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`book_id`)
        REFERENCES `book` (`id`),
    FOREIGN KEY (`cart_id`)
        REFERENCES `cart` (`id`)
);
CREATE TABLE `roles` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `user_role` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `role` INT DEFAULT NULL,
    `username` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`username`)
        REFERENCES `users` (`username`),
    FOREIGN KEY (`role`)
        REFERENCES `roles` (`id`)
);
