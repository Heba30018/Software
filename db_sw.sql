-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 29, 2023 at 07:18 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sw`
--
CREATE DATABASE IF NOT EXISTS `db_sw` ;
USE `db_sw`;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `stock`) VALUES
(1, 'update_Product', 'update', 209),
(12, 'added product2', 'added product2', 16),
(13, 'laptop', 'new laptop', 21),
(14, 'mobile', 'new laptop', 21),
(15, 'TV', 'new TV', 300),
(16, 'Tablet', 'new Tablet', 930),
(17, 'Playstation', 'new Playstation', 311);

-- --------------------------------------------------------

--
-- Table structure for table `product_warehouse`
--

DROP TABLE IF EXISTS `product_warehouse`;
CREATE TABLE IF NOT EXISTS `product_warehouse` (
  `product_id` int NOT NULL,
  `warehouse_id` int NOT NULL,
  `warehouse_stock` int NOT NULL,
  KEY `product_id` (`product_id`),
  KEY `warehouse_id` (`warehouse_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_warehouse`
--

INSERT INTO `product_warehouse` (`product_id`, `warehouse_id`, `warehouse_stock`) VALUES
(12, 4, 84),
(14, 4, 10),
(17, 3, 12),
(17, 4, 100),
(16, 4, 14),
(1, 1, 70),
(12, 1, 20),
(13, 1, 20),
(16, 1, 20),
(17, 1, 20),
(15, 3, 10),
(16, 3, 22),
(12, 3, 25),
(14, 3, 30),
(13, 3, 23),
(13, 4, 20),
(1, 4, 20),
(15, 4, 20);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `phone`, `type`) VALUES
(1, 'admin@gmail.com', '123', '012343', 'admin'),
(2, 'super2@gmail.com', '12345', '01005345', 'supervisor'),
(3, 'super3@gmail.com', '123456', '09283', 'supervisor'),
(5, 'supervisor5@yahoo.com', '12345', '02298321', 'supervisor');

-- --------------------------------------------------------

--
-- Table structure for table `warehouses`
--

DROP TABLE IF EXISTS `warehouses`;
CREATE TABLE IF NOT EXISTS `warehouses` (
  `warehouse_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `supervisor_id` int DEFAULT NULL,
  PRIMARY KEY (`warehouse_id`),
  KEY `supervisor_id` (`supervisor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `warehouses`
--

INSERT INTO `warehouses` (`warehouse_id`, `name`, `location`, `supervisor_id`) VALUES
(1, 'warehouse1', 'cairo', 1),
(3, 'warehouse3', 'Haram', 3),
(4, 'new_warehouse44', 'Egypt', 2);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product_warehouse`
--
ALTER TABLE `product_warehouse`
  ADD CONSTRAINT `product_warehouse_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `product_warehouse_ibfk_2` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`warehouse_id`);

--
-- Constraints for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD CONSTRAINT `warehouses_ibfk_1` FOREIGN KEY (`supervisor_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
