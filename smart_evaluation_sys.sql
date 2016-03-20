-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 12, 2013 at 03:35 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `smart_evaluation_sys`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE IF NOT EXISTS `department` (
  `Dept_name` varchar(30) NOT NULL,
  `Dept_id` varchar(10) NOT NULL,
  PRIMARY KEY (`Dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`Dept_name`, `Dept_id`) VALUES
('Computer Science', 'CSE02'),
('Electronics and Communication', 'ECE03'),
('Electrical and Electronics', 'EE04'),
('Information Science', 'ISE01'),
('Mechanical', 'MEC05');

-- --------------------------------------------------------

--
-- Table structure for table `evaluator`
--

CREATE TABLE IF NOT EXISTS `evaluator` (
  `Evaluator_name` varchar(25) NOT NULL,
  `Evaluator_id` varchar(10) NOT NULL,
  `Sub_id` varchar(10) NOT NULL,
  PRIMARY KEY (`Evaluator_id`,`Sub_id`),
  UNIQUE KEY `Sub_id` (`Sub_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `evaluator`
--

INSERT INTO `evaluator` (`Evaluator_name`, `Evaluator_id`, `Sub_id`) VALUES
('mr. g joshi', 'cs1', 'csc204'),
('mr. g joshi', 'cs1', 'csc403'),
('ms.uma m', 'ec1', 'ecc201'),
('ms.uma m', 'ec1', 'eec302'),
('mr. arun k', 'ec2', 'ecc301'),
('mr. arun k', 'ec2', 'ecc303'),
('mr. arun k', 'ec2', 'ecc404'),
('mr. srinivas desai', 'evaluator', 'csc404'),
('mr. srinivas desai', 'evaluator', 'ecc304'),
('mr. srinivas desai', 'evaluator', 'isc302'),
('mr.moulahussain', 'is1', 'csc203'),
('mr.moulahussain', 'is1', 'csc303'),
('mr.moulahussain', 'is1', 'isc202'),
('ms.sunitha hiremath', 'is3', 'csc202'),
('ms.sunitha hiremath', 'is3', 'csc302'),
('ms.sunitha hiremath', 'is3', 'isc301'),
('mr.shankar setty', 'shankar', 'csc301'),
('mr.shankar setty', 'shankar', 'isc304');

-- --------------------------------------------------------

--
-- Table structure for table `exam_section`
--

CREATE TABLE IF NOT EXISTS `exam_section` (
  `Paper_id` varchar(15) NOT NULL,
  `Batch_no` int(11) NOT NULL,
  `Sub_id` varchar(10) NOT NULL,
  `USN` varchar(15) NOT NULL,
  `path` varchar(300) NOT NULL,
  PRIMARY KEY (`Paper_id`,`Batch_no`),
  KEY `Sub_id` (`Sub_id`),
  KEY `USN` (`USN`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exam_section`
--

INSERT INTO `exam_section` (`Paper_id`, `Batch_no`, `Sub_id`, `USN`, `path`) VALUES
('cp1', 12, 'csc301', '2bv10cs001', 'E:/family/fest/New folder (3)/2bv10cs001_csc301_cp1.pdf'),
('cp2', 12, 'csc303', '2bv10cs001', 'E:/family/fest/New folder (3)/2bv10cs001_csc303_cp2.pdf'),
('cp3', 12, 'csc301', '2bv10cs002', 'E:/family/fest/New folder (3)/2bv10cs002_csc301_cp3.pdf'),
('cp4', 12, 'csc303', '2bv10cs002', 'E:/family/fest/New folder (3)/2bv10cs002_csc303_cp4.pdf'),
('cp5', 12, 'csc404', '2bv09cs002', 'E:/family/fest/New folder (3)/2bv09cs002_csc404_cp5.pdf'),
('cp6', 12, 'csc404', '2bv09cs003', 'E:/family/fest/New folder (3)/2bv09cs003_csc404_cp6.pdf'),
('ip1', 12, 'isc304', '2bv10is001', 'E:/family/fest/New folder (3)/2bv10is001_isc304_ip1.pdf'),
('ip2', 12, 'isc304', '2bv10is002', 'E:/family/fest/New folder (3)/2bv10is002_isc304_ip2.pdf'),
('ip3', 12, 'isc304', '2bv10is003', 'E:/family/fest/New folder (3)/2bv10is003_isc304_ip3.pdf'),
('ip4', 12, 'isc302', '2bv10is001', 'E:/family/fest/New folder (3)/2bv10is001_isc302_ip4.pdf'),
('ip5', 12, 'isc302', '2bv10is002', 'E:/family/fest/New folder (3)/2bv10is002_isc302_ip5.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `user` varchar(30) NOT NULL,
  `pass` varchar(60) NOT NULL,
  `type` varchar(30) NOT NULL,
  PRIMARY KEY (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`user`, `pass`, `type`) VALUES
('admin', '21232f297a57a5a743894a0e4a801fc3', '1'),
('evaluator', '2eed1fe0db36d674643b5f84d2adf46e ', '3'),
('shankar', 'shankar', '2');

-- --------------------------------------------------------

--
-- Table structure for table `marks`
--

CREATE TABLE IF NOT EXISTS `marks` (
  `USN` varchar(15) NOT NULL,
  `Sub_id` varchar(10) NOT NULL,
  `Marks` int(11) NOT NULL,
  `Paper_id` varchar(30) NOT NULL,
  `Evaluator_id` varchar(20) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`Paper_id`),
  KEY `Sub_id` (`Sub_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `marks`
--

INSERT INTO `marks` (`USN`, `Sub_id`, `Marks`, `Paper_id`, `Evaluator_id`, `status`) VALUES
('2bv10cs001', 'csc301', 0, 'cp1', ' ', 0),
('2bv10cs001', 'csc303', 0, 'cp2', ' ', 0),
('2bv10cs002', 'csc301', 0, 'cp3', ' ', 0),
('2bv10cs002', 'csc303', 0, 'cp4', ' ', 0),
('2bv09cs002', 'csc404', 26, 'cp5', 'evaluator', 1),
('2bv09cs003', 'csc404', 0, 'cp6', ' ', 0),
('2bv10is001', 'isc304', 0, 'ip1', ' ', 0),
('2bv10is002', 'isc304', 0, 'ip2', ' ', 0),
('2bv10is003', 'isc304', 0, 'ip3', ' ', 0),
('2bv10is001', 'isc302', 0, 'ip4', ' ', 0),
('2bv10is002', 'isc302', 0, 'ip5', ' ', 0);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE IF NOT EXISTS `students` (
  `USN` varchar(15) NOT NULL,
  `Stud_name` varchar(25) NOT NULL,
  `Dept_id` varchar(10) NOT NULL,
  `Semester` int(11) NOT NULL,
  `dob` varchar(30) NOT NULL,
  `password` varchar(60) NOT NULL,
  PRIMARY KEY (`USN`),
  KEY `Dept_id` (`Dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`USN`, `Stud_name`, `Dept_id`, `Semester`, `dob`, `password`) VALUES
('', '', 'CSE02', 1, '2000-01-01', ''),
('2bv09cs001', 'raju', 'CSE02', 8, '', ''),
('2bv09cs002', 'ravi', 'CSE02', 8, '', ''),
('2bv09cs003', 'varun', 'CSE02', 8, '', ''),
('2bv09cs007', 'arun', 'ECE03', 1, '2000-01-01', '19af0630fd5b74a3f63a2ac9769b61'),
('2bv09ec001', 'manju', 'ECE03', 8, '', ''),
('2bv09ec002', 'lokesh', 'ECE03', 8, '', ''),
('2bv09ec003', 'teja', 'ECE03', 8, '', ''),
('2bv09ee001', 'shruti', 'EE04', 8, '', ''),
('2bv09ee002', 'suma', 'EE04', 8, '', ''),
('2bv09ee003', 'tarun', 'EE04', 8, '', ''),
('2bv09is001', 'pavankumar', 'ISE01', 8, '', ''),
('2bv09is002', 'pradeep', 'ISE01', 8, '', ''),
('2bv09is003', 'vinay', 'ISE01', 8, '', ''),
('2bv09is062', 'pavan', 'ECE03', 8, '', ''),
('2bv09is116', 'pyati', 'ISE01', 8, '1991-04-16', 'asdfg'),
('2bv09is117', 'vidya', 'CSE02', 1, '2000-01-01', '19af0630fd5b74a3f63a2ac9769b613d'),
('2bv09is178', 'aaaaa', 'ECE03', 3, '2000-01-01', '12345'),
('2bv09is567', 'erty', 'ISE01', 1, '2000-01-01', 'asdfg'),
('2bv09me001', 'ishant', 'MEC05', 8, '', ''),
('2bv09me002', 'jeevan', 'MEC05', 8, '', ''),
('2bv09me003', 'sachin', 'MEC05', 8, '', ''),
('2bv10cs001', 'aditya', 'CSE02', 6, '', ''),
('2bv10cs002', 'ajit', 'CSE02', 6, '1992-01-01', '12345'),
('2bv10cs003', 'reshma', 'CSE02', 6, '', ''),
('2bv10ec001', 'deepak', 'ECE03', 6, '', ''),
('2bv10ec002', 'ganesh', 'ECE03', 6, '', ''),
('2bv10ec003', 'roopa', 'ECE03', 6, '', ''),
('2bv10ee001', 'ruchika', 'EE04', 6, '', ''),
('2bv10ee002', 'sumit', 'EE04', 6, '', ''),
('2bv10ee003', 'tanu', 'EE04', 6, '', ''),
('2bv10is001', 'anand', 'ISE01', 6, '', ''),
('2bv10is002', 'pallavi', 'ISE01', 6, '', ''),
('2bv10is003', 'shashank', 'ISE01', 6, '', ''),
('2bv10me001', 'prakash', 'MEC05', 6, '', ''),
('2bv10me002', 'sudeep', 'MEC05', 6, '', ''),
('2bv10me003', 'vidya', 'MEC05', 6, '', ''),
('2bv11cs001', 'anup', 'CSE02', 4, '', ''),
('2bv11cs002', 'apeksha', 'CSE02', 4, '', ''),
('2bv11cs003', 'ramesh', 'CSE02', 4, '', ''),
('2bv11ec001', 'nikhil', 'ECE03', 4, '', ''),
('2bv11ec002', 'prakash', 'ECE03', 4, '', ''),
('2bv11ec003', 'rakesh', 'ECE03', 4, '', ''),
('2bv11ee001', 'amar', 'EE04', 4, '', ''),
('2bv11ee002', 'amit', 'EE04', 4, '', ''),
('2bv11ee003', 'shiva', 'EE04', 4, '', ''),
('2bv11is001', 'pooja', 'ISE01', 4, '', ''),
('2bv11is002', 'priyanka', 'ISE01', 4, '', ''),
('2bv11is003', 'ravi', 'ISE01', 4, '', ''),
('2bv11me001', 'akshata', 'MEC05', 4, '', ''),
('2bv11me002', 'pavitra', 'MEC05', 4, '', ''),
('2bv11me003', 'soujanya', 'MEC05', 4, '', ''),
('2bv12cs001', 'bhavana', 'CSE02', 2, '', ''),
('2bv12cs002', 'chandru', 'CSE02', 2, '', ''),
('2bv12cs003', 'dev', 'CSE02', 2, '', ''),
('2bv12cs111', 'shirish', 'CSE02', 2, '2013-05-14', 'asdf'),
('2bv12ec001', 'akarsh', 'ECE03', 2, '', ''),
('2bv12ec002', 'devaraj', 'ECE03', 2, '', ''),
('2bv12ec003', 'harish', 'ECE03', 2, '', ''),
('2bv12ee001', 'anita', 'EE04', 2, '', ''),
('2bv12ee002', 'ankit', 'EE04', 2, '', ''),
('2bv12ee003', 'bhanu', 'EE04', 2, '', ''),
('2bv12is001', 'arun', 'ISE01', 2, '', ''),
('2bv12is002', 'ajay', 'ISE01', 2, '', ''),
('2bv12is003', 'kumar', 'ISE01', 2, '', ''),
('2bv12is112', 'abhay', 'ISE01', 1, '2013-05-14', '1234'),
('2bv12me001', 'dinesh', 'MEC05', 2, '', ''),
('2bv12me002', 'shrikant', 'MEC05', 2, '', ''),
('2bv12me003', 'suchet', 'MEC05', 2, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE IF NOT EXISTS `subjects` (
  `Sub_name` varchar(20) NOT NULL,
  `Sub_id` varchar(10) NOT NULL,
  `Dept_id` varchar(10) NOT NULL,
  `Sem` int(11) NOT NULL,
  PRIMARY KEY (`Sub_id`),
  KEY `Dept_id` (`Dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`Sub_name`, `Sub_id`, `Dept_id`, `Sem`) VALUES
('co', 'csc201', 'CSE02', 4),
('ade', 'csc202', 'CSE02', 4),
('ds', 'csc203', 'CSE02', 4),
('unix', 'csc204', 'CSE02', 4),
('dbms', 'csc301', 'CSE02', 6),
('fose', 'csc302', 'CSE02', 6),
('java', 'csc303', 'CSE02', 6),
('sysytem softwae', 'csc304', 'CSE02', 6),
('c#', 'csc401', 'CSE02', 8),
('ir', 'csc402', 'CSE02', 8),
('unix', 'csc403', 'CSE02', 8),
('multimedia', 'csc404', 'CSE02', 8),
('dsp', 'ecc201', 'ECE03', 4),
('micro-controller&es', 'ecc202', 'ECE03', 4),
('analog communication', 'ecc203', 'ECE03', 4),
('electronic circuits', 'ecc204', 'ECE03', 4),
('cmos', 'ecc301', 'ECE03', 6),
('digital vlsi', 'ecc302', 'ECE03', 6),
('microprocessor', 'ecc303', 'ECE03', 6),
('cn', 'ecc304', 'ECE03', 6),
('microwave engg', 'ecc401', 'ECE03', 8),
('optical fiber', 'ecc402', 'ECE03', 8),
('opp using c++', 'ecc403', 'ECE03', 8),
('wireless networks', 'ecc404', 'ECE03', 8),
('material science', 'eec201', 'EE04', 4),
('digital electronics', 'eec202', 'EE04', 4),
('electrical circuits', 'eec203', 'EE04', 4),
('signals and systems', 'eec204', 'EE04', 4),
('electromagnetics', 'eec301', 'EE04', 6),
('digital communicatio', 'eec302', 'EE04', 6),
('control systems', 'eec303', 'EE04', 6),
('sensor and transuduc', 'eec304', 'EE04', 6),
('satellite communicat', 'eec401', 'EE04', 8),
('math modeling', 'eec402', 'EE04', 8),
('electric machinery', 'eec403', 'EE04', 8),
('electrical energy sy', 'eec404', 'EE04', 8),
('ada', 'isc201', 'ISE01', 4),
('c++', 'isc202', 'ISE01', 4),
('flat', 'isc203', 'ISE01', 4),
('micro-controller', 'isc204', 'ISE01', 4),
('ase', 'isc301', 'ISE01', 6),
('cn', 'isc302', 'ISE01', 6),
('compiler design', 'isc303', 'ISE01', 6),
('webtechnology', 'isc304', 'ISE01', 6),
('dwdm', 'isc401', 'ISE01', 8),
('adhoc networks', 'isc402', 'ISE01', 8),
('ria', 'isc403', 'ISE01', 8),
('ssm', 'isc404', 'ISE01', 8);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `evaluator`
--
ALTER TABLE `evaluator`
  ADD CONSTRAINT `evaluator_ibfk_3` FOREIGN KEY (`Sub_id`) REFERENCES `subjects` (`Sub_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `exam_section`
--
ALTER TABLE `exam_section`
  ADD CONSTRAINT `exam_section_ibfk_1` FOREIGN KEY (`Sub_id`) REFERENCES `subjects` (`Sub_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `exam_section_ibfk_2` FOREIGN KEY (`USN`) REFERENCES `students` (`USN`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `marks`
--
ALTER TABLE `marks`
  ADD CONSTRAINT `marks_ibfk_2` FOREIGN KEY (`Sub_id`) REFERENCES `subjects` (`Sub_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`Dept_id`) REFERENCES `department` (`Dept_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`Dept_id`) REFERENCES `department` (`Dept_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
