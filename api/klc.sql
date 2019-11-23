-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2019 at 04:35 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `klc`
--

-- --------------------------------------------------------

--
-- Table structure for table `evaluasi_pengajar`
--

CREATE TABLE `evaluasi_pengajar` (
  `id_pengajar` int(11) NOT NULL,
  `id_siswa` int(11) NOT NULL,
  `evaluasi` varchar(30) NOT NULL,
  `tanggal` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `evaluasi_siswa`
--

CREATE TABLE `evaluasi_siswa` (
  `id_siswa` varchar(10) NOT NULL,
  `id_pengajar` varchar(10) NOT NULL,
  `evaluasi` varchar(50) NOT NULL,
  `tanggal` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `jadwal`
--

CREATE TABLE `jadwal` (
  `id_kelas` int(11) NOT NULL,
  `id_pengajar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `jadwal_pengajar`
--

CREATE TABLE `jadwal_pengajar` (
  `id_pengajar` int(11) NOT NULL,
  `jadwal` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kelas`
--

CREATE TABLE `kelas` (
  `id_kelas` int(11) NOT NULL,
  `tipe` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mata_pelajaran`
--

CREATE TABLE `mata_pelajaran` (
  `id_pengajar` int(11) NOT NULL,
  `nama_mata_pelajaran` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pengajar`
--

CREATE TABLE `pengajar` (
  `id_pengajar` int(11) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `jenis_kelamin` varchar(1) NOT NULL,
  `universitas` varchar(30) NOT NULL,
  `jurusan` varchar(30) NOT NULL,
  `id_line` varchar(10) NOT NULL,
  `nomor_wa` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `siswa`
--

CREATE TABLE `siswa` (
  `id_siswa` int(11) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `status` varchar(10) NOT NULL,
  `jenis_kelamin` varchar(1) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `asal_sekolah` varchar(30) NOT NULL,
  `jurusan` varchar(30) NOT NULL,
  `kelas` varchar(1) NOT NULL,
  `program` varchar(10) NOT NULL,
  `id_line` varchar(10) NOT NULL,
  `nomor_wa` varchar(12) NOT NULL,
  `email` varchar(30) NOT NULL,
  `no_hp_ortu` varchar(12) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `siswa`
--

INSERT INTO `siswa` (`id_siswa`, `nama`, `status`, `jenis_kelamin`, `alamat`, `asal_sekolah`, `jurusan`, `kelas`, `program`, `id_line`, `nomor_wa`, `email`, `no_hp_ortu`, `password`) VALUES
(1, 'test', 'active', 'L', 'somewhere', 'school', 'ipa', 'X', 'reguler', 'gapunya', '081234567890', 'nothing@nope.com', '081234567891', 'password');

-- --------------------------------------------------------

--
-- Table structure for table `testimoni`
--

CREATE TABLE `testimoni` (
  `id_siswa` int(11) NOT NULL,
  `sekolah_diterima` text NOT NULL,
  `testimoni` text NOT NULL,
  `saran` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `siswa`
--
ALTER TABLE `siswa`
  ADD PRIMARY KEY (`id_siswa`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `siswa`
--
ALTER TABLE `siswa`
  MODIFY `id_siswa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
