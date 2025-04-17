-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2019 at 08:09 AM
-- Server version: 5.5.0-m2-community
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `xteembot`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pupvote`
--

CREATE TABLE IF NOT EXISTS `tbl_pupvote` (
  `nUID` bigint(11) NOT NULL AUTO_INCREMENT,
  `sAuthor` text NOT NULL,
  `sPermlink` text NOT NULL,
  `nGroup` int(11) NOT NULL,
  `nStatus` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`nUID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1711 ;

--
-- Dumping data for table `tbl_pupvote`
--

INSERT INTO `tbl_pupvote` (`nUID`, `sAuthor`, `sPermlink`, `nGroup`, `nStatus`) VALUES
(7, 'ilodz24hd', 'mapamieciprzybywacorazwicejpunktw-8h8rlzo0j6', 1, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
