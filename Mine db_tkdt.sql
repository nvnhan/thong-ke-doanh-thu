-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 19, 2021 lúc 05:02 PM
-- Phiên bản máy phục vụ: 10.4.11-MariaDB
-- Phiên bản PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `db_tkdt`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ban_ra`
--

CREATE TABLE `ban_ra` (
  `id` int(10) UNSIGNED NOT NULL,
  `ngay_thang` date NOT NULL,
  `id_hang_hoa` int(10) UNSIGNED NOT NULL,
  `so_luong` int(11) NOT NULL DEFAULT 1,
  `don_gia_mua` decimal(11,2) NOT NULL,
  `don_gia_ban` decimal(11,2) NOT NULL,
  `id_khach_hang` int(10) UNSIGNED DEFAULT NULL,
  `ngay_thanh_toan` date DEFAULT NULL,
  `ngay_hoan_doi` date DEFAULT NULL,
  `ngay_thanh_toan_hoan_doi` date DEFAULT NULL,
  `id_tai_khoan_tra_hoan_doi` int(10) UNSIGNED DEFAULT NULL,
  `ngay_hoan_doi_xong` date DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thanh_tien_mua` decimal(11,2) GENERATED ALWAYS AS (`so_luong` * `don_gia_mua`) VIRTUAL,
  `thanh_tien_ban` decimal(11,2) GENERATED ALWAYS AS (`so_luong` * `don_gia_ban`) VIRTUAL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `ban_ra`
--

INSERT INTO `ban_ra` (`id`, `ngay_thang`, `id_hang_hoa`, `so_luong`, `don_gia_mua`, `don_gia_ban`, `id_khach_hang`, `ngay_thanh_toan`, `ngay_hoan_doi`, `ngay_thanh_toan_hoan_doi`, `id_tai_khoan_tra_hoan_doi`, `ngay_hoan_doi_xong`, `ghi_chu`, `username`) VALUES
(1, '2020-04-10', 4, 5, '1650000.00', '1750000.00', 148, NULL, NULL, NULL, NULL, NULL, 'fgdf', 'nvn'),
(2, '2020-04-11', 5, 5, '450000.00', '495000.00', 148, '2020-04-15', '2020-04-13', '2020-04-14', 55, NULL, NULL, 'nvn'),
(3, '2021-01-11', 4, 2, '1650000.00', '2350000.00', 148, NULL, NULL, NULL, NULL, NULL, NULL, 'u1'),
(4, '2021-01-11', 6, 10, '250000.00', '250000.00', 151, NULL, NULL, NULL, NULL, NULL, NULL, 'u1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dat_ve`
--

CREATE TABLE `dat_ve` (
  `id` int(10) UNSIGNED NOT NULL,
  `ngay_thang` date NOT NULL,
  `ma_giu_cho` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `so_ve` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hang_bay` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ten_khach` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `loai_tuoi` int(11) DEFAULT NULL,
  `ngay_gio_di` datetime DEFAULT NULL,
  `ngay_gio_ve` datetime DEFAULT NULL,
  `cb_di` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cb_ve` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sb_di` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sb_di1` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sb_ve` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sb_ve1` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gia_net` decimal(11,2) NOT NULL DEFAULT 0.00,
  `phi_san_bay` decimal(11,2) DEFAULT NULL,
  `phu_phi_san_bay` decimal(11,2) DEFAULT NULL,
  `hanh_ly` decimal(11,2) DEFAULT NULL,
  `id_phi_hanh_ly` int(10) UNSIGNED DEFAULT NULL,
  `phu_phi` decimal(11,2) DEFAULT NULL,
  `hoa_hong` decimal(11,2) DEFAULT NULL,
  `tong_tien` decimal(11,2) NOT NULL DEFAULT 0.00,
  `tong_tien_thu_khach` decimal(11,2) NOT NULL DEFAULT 0.00,
  `ngay_thanh_toan` date DEFAULT NULL,
  `id_tai_khoan_mua` int(10) UNSIGNED DEFAULT NULL,
  `id_khach_hang` int(10) UNSIGNED DEFAULT NULL,
  `canh_bao_xuat_ve` datetime DEFAULT NULL,
  `chua_xuat_ve` tinyint(1) NOT NULL DEFAULT 0,
  `ngay_nhac_lich` datetime DEFAULT NULL,
  `dinh_danh` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lai` decimal(11,2) GENERATED ALWAYS AS (`tong_tien_thu_khach` - `tong_tien`) VIRTUAL,
  `vat` decimal(11,2) GENERATED ALWAYS AS (`gia_net` / 10) VIRTUAL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `dat_ve`
--

INSERT INTO `dat_ve` (`id`, `ngay_thang`, `ma_giu_cho`, `so_ve`, `hang_bay`, `ten_khach`, `loai_tuoi`, `ngay_gio_di`, `ngay_gio_ve`, `cb_di`, `cb_ve`, `sb_di`, `sb_di1`, `sb_ve`, `sb_ve1`, `gia_net`, `phi_san_bay`, `phu_phi_san_bay`, `hanh_ly`, `id_phi_hanh_ly`, `phu_phi`, `hoa_hong`, `tong_tien`, `tong_tien_thu_khach`, `ngay_thanh_toan`, `id_tai_khoan_mua`, `id_khach_hang`, `canh_bao_xuat_ve`, `chua_xuat_ve`, `ngay_nhac_lich`, `dinh_danh`, `ghi_chu`, `username`) VALUES
(1, '2020-04-12', 'SDFGBR', '345745634564545', 'QQ', 'Ngo Van A', 0, '2020-04-13 11:30:00', '2020-04-14 16:20:00', 'VN456', 'VN678', 'HAN', 'SGN', 'SGN', 'HAN', '760000.00', '50000.00', '120000.00', '10000.00', 1, NULL, NULL, '1578000.00', '1700000.00', NULL, 53, 148, NULL, 0, NULL, NULL, 'TÊTSTTSE', 'u1'),
(2, '2020-04-13', 'HGFJVM', '65745426834526', 'VJ', 'TRAN THI C', 0, '2020-04-25 09:30:11', NULL, 'VJ672', NULL, 'HPH', 'SGN', NULL, NULL, '765000.00', '120000.00', '50000.00', '30000.00', 2, '10000.00', '20000.00', '1463000.00', '1550000.00', NULL, 58, 150, NULL, 0, NULL, NULL, NULL, 'u1'),
(3, '2020-04-13', 'SWEWDS', '2334658456645', 'BB', 'NGUYEN VAN AN', 0, '2020-04-22 12:30:00', '2020-04-24 17:15:00', 'QH-573', 'QH-453', 'VII', 'HAN', 'HAN', 'VII', '750000.00', '240000.00', '420000.00', '20000.00', 1, '16000.00', '0.00', '1521000.00', '1650000.00', NULL, 61, NULL, NULL, 1, NULL, NULL, 'testse te', 'u1'),
(4, '2020-04-14', 'SDFYTR', '34568456436', 'VN', 'BUI DUC VAN', 0, '2020-04-25 21:40:00', NULL, 'VN-054', NULL, 'HAN', 'JFK', NULL, NULL, '545000.00', '120000.00', '150000.00', '30000.00', 4, '0.00', '0.00', '899500.00', '1250000.00', '2020-04-18', 57, 148, NULL, 0, NULL, NULL, NULL, 'u1'),
(5, '2020-04-15', 'DRGRGD', '34547645', 'Jets', 'DO VAN HA', 0, '2020-04-24 06:00:00', NULL, 'JET342', NULL, 'THD', 'SGN', NULL, NULL, '650000.00', '100000.00', '210000.00', '0.00', NULL, '0.00', '0.00', '1025000.00', '1350000.00', NULL, 55, NULL, NULL, 0, NULL, NULL, NULL, 'u1'),
(6, '2020-04-16', NULL, '456345345', 'Jets', 'TRUONG VAN NAM', 0, '2020-04-18 15:30:56', NULL, 'BL322', NULL, 'DAD', 'HAN', NULL, NULL, '545000.00', '120000.00', '210000.00', '30000.00', 2, '0.00', '0.00', '959500.00', '1150000.00', NULL, 55, 147, NULL, 1, NULL, NULL, 'DFGDRR', 'u1'),
(7, '2020-04-19', NULL, '86866757567575', 'BB', 'PHAN VAN TIEN', 0, '2020-04-23 21:10:53', NULL, 'QH453', NULL, 'THD', 'VCS', NULL, NULL, '545000.00', '100000.00', '210000.00', '30000.00', 2, '0.00', '0.00', '939500.00', '1250000.00', NULL, 62, 147, NULL, 0, NULL, NULL, NULL, 'u1'),
(8, '2020-04-14', 'SDFYTR', '34568456437', 'VN', 'NGUYEN VAN NAM', 0, '2020-04-25 21:40:00', NULL, 'VN-054', NULL, 'HAN', 'JFK', NULL, NULL, '545000.00', '120000.00', '150000.00', '30000.00', 4, '0.00', '0.00', '899500.00', '1340000.00', NULL, 57, 148, NULL, 0, NULL, NULL, NULL, 'u1'),
(20, '2020-05-10', 'BTZJYX', '7382400000000', 'VN', 'HOANG THI HONG NHUNG', 0, '2020-10-21 11:00:00', NULL, 'VN232', NULL, 'SGN', 'HAN', NULL, NULL, '678000.00', NULL, NULL, NULL, NULL, NULL, NULL, '1200000.00', '1350000.00', NULL, 51, 148, NULL, 0, NULL, NULL, NULL, 'u1'),
(21, '2020-05-10', 'BTZJYX', '7382400000000', 'VN', 'NGUYEN THI DIU', 0, '2020-10-21 11:00:00', NULL, 'VN232', NULL, 'SGN', 'HAN', NULL, NULL, '678000.00', NULL, NULL, NULL, NULL, NULL, NULL, '1200000.00', '1350000.00', NULL, 51, 148, NULL, 0, NULL, NULL, NULL, 'u1'),
(116, '2020-05-15', 'JXQMOD', '7382424491087', 'VN', 'TRAN HAI DANG', NULL, NULL, NULL, NULL, NULL, 'SGN', 'SIN', NULL, NULL, '0.00', NULL, NULL, NULL, NULL, NULL, NULL, '2536000.00', '2786000.00', NULL, NULL, NULL, NULL, 0, NULL, '1589558158', NULL, 'u1'),
(117, '2020-05-15', 'YUZDDI', '7382424491456', 'VN', 'TRAN KHA HAN', NULL, NULL, NULL, NULL, NULL, 'CDG', 'SGN', NULL, NULL, '0.00', NULL, NULL, NULL, NULL, NULL, NULL, '1163000.00', '1413000.00', NULL, NULL, NULL, NULL, 0, NULL, '1589558158', NULL, 'u1'),
(118, '2020-05-15', 'GKLWCJ', '7382424497334', 'VN', 'NGUYEN THI HUYEN', NULL, NULL, NULL, NULL, NULL, 'HAN', 'DAD', 'DAD', 'HAN', '0.00', NULL, NULL, NULL, NULL, NULL, NULL, '2158000.00', '2408000.00', NULL, NULL, NULL, NULL, 0, NULL, '1589558158', NULL, 'u1'),
(119, '2020-05-15', 'GKLWCJ', '7382424497335', 'VN', 'NGUYEN QUANG THANH', NULL, NULL, NULL, NULL, NULL, 'HAN', 'DAD', 'DAD', 'HAN', '0.00', NULL, NULL, NULL, NULL, NULL, NULL, '2158000.00', '2408000.00', NULL, NULL, NULL, NULL, 0, NULL, '1589558158', NULL, 'u1'),
(120, '2020-05-15', 'ONHBCG', '7382424507693', 'VN', 'VU THI HANH', NULL, NULL, NULL, NULL, NULL, 'HAN', 'SGN', 'SGN', 'VCS', '0.00', NULL, NULL, NULL, NULL, NULL, NULL, '5109000.00', '5359000.00', NULL, NULL, NULL, NULL, 0, NULL, '1589558158', NULL, 'u1'),
(121, '2020-05-15', 'ONHBCG', '7382424507694', 'VN', 'PHAN DUC THO', NULL, NULL, NULL, NULL, NULL, 'HAN', 'SGN', 'SGN', 'VCS', '0.00', NULL, NULL, NULL, NULL, NULL, NULL, '5109000.00', '5359000.00', NULL, NULL, NULL, NULL, 0, NULL, '1589558158', NULL, 'u1'),
(122, '2020-05-15', 'ONHBCG', '7382424507695', 'VN', 'NGUYEN THI THOA', NULL, NULL, NULL, NULL, NULL, 'HAN', 'SGN', 'SGN', 'VCS', '0.00', NULL, NULL, NULL, NULL, NULL, NULL, '5109000.00', '5359000.00', NULL, NULL, NULL, NULL, 0, NULL, '1589558158', NULL, 'u1'),
(123, '2020-01-31', NULL, 'MYE3FB', 'VJ', 'BUI VAN TUAN', 0, '2020-02-11 18:05:00', NULL, 'VJ245', NULL, 'THD', 'SGN', NULL, NULL, '0.00', NULL, NULL, NULL, NULL, NULL, NULL, '0.00', '0.00', NULL, 52, 148, NULL, 0, NULL, NULL, NULL, 'u1'),
(127, '2019-05-27', 'H22BBN', '8882310845381', 'BB', 'HA THI CHINH TUYET', 0, '2019-05-28 00:00:00', NULL, 'QH 219-Q', NULL, 'HAN', 'SGN', NULL, NULL, '0.00', NULL, NULL, NULL, NULL, NULL, NULL, '1941000.00', '2061000.00', NULL, 52, 147, NULL, 0, NULL, '1589623890', NULL, 'u1'),
(128, '2019-05-27', 'AAEX8K', '8882310845424', 'BB', 'DONG LINH NHI', 0, '2019-05-28 00:00:00', NULL, 'QH 219-T', NULL, 'HAN', 'SGN', NULL, NULL, '0.00', NULL, NULL, NULL, NULL, NULL, NULL, '1781000.00', '1901000.00', NULL, 52, 147, NULL, 0, NULL, '1589623890', NULL, 'u1'),
(129, '2019-05-27', 'AAEX8K', '8882310845425', 'BB', 'NGUYEN THI THEM', 0, '2019-05-28 00:00:00', NULL, 'QH 219-T', NULL, 'HAN', 'SGN', NULL, NULL, '0.00', NULL, NULL, NULL, NULL, NULL, NULL, '1781000.00', '1901000.00', NULL, 52, 147, NULL, 0, NULL, '1589623890', NULL, 'u1'),
(130, '2020-05-13', 'AJKGX2', '9262314655555', 'BB', 'THI XUYEN NGUYEN', 0, '2020-05-21 11:30:00', NULL, 'QH1175', NULL, 'THD', 'SGN', NULL, NULL, '678000.00', NULL, NULL, NULL, NULL, NULL, NULL, '900000.00', '1050000.00', NULL, 51, 148, NULL, 0, NULL, NULL, NULL, 'u1'),
(131, '2020-05-22', 'KSYBJB', '7382439063657', 'VN', 'KHAC HOI NGUYEN', 0, '2020-05-23 20:00:00', NULL, 'VN 283', NULL, 'HAN', 'SGN', NULL, NULL, '685000.00', NULL, NULL, NULL, NULL, NULL, NULL, '1200000.00', '1350000.00', NULL, 54, 150, NULL, 0, NULL, '1590164653', NULL, 'u1'),
(132, '2020-05-13', 'AJKGX2', '9262314655555', 'BB', 'THI XUYEN NGUYEN', 0, '2020-05-21 11:30:00', NULL, 'QH1175', NULL, 'THD', 'SGN', NULL, NULL, '0.00', NULL, NULL, NULL, NULL, NULL, NULL, '0.00', '0.00', NULL, NULL, NULL, NULL, 0, NULL, '1590220883', NULL, 'u1'),
(133, '2020-05-21', NULL, 'RG8ZEA', 'VJ', 'LE THI PHUONG', 0, '2020-05-25 15:40:00', NULL, 'VJ250', NULL, 'SGN', 'THD', NULL, NULL, '684000.00', NULL, NULL, NULL, NULL, NULL, NULL, '1150000.00', '1350000.00', NULL, 56, 148, NULL, 0, NULL, '1590222512', NULL, 'u1'),
(134, '2020-03-09', NULL, 'FJ9S4T', 'Jets', 'LAN LE THI THANH', 0, '2020-04-01 19:00:00', NULL, 'BL324', NULL, 'PQC', 'SGN', NULL, NULL, '540000.00', NULL, NULL, NULL, NULL, NULL, NULL, '908000.00', '1050000.00', NULL, 61, 147, NULL, 0, NULL, '1590227436', NULL, 'u1'),
(135, '2020-03-09', NULL, 'FJ9S4T', 'Jets', 'NHUNG HUYNH THI HONG', 0, '2020-04-01 19:00:00', NULL, 'BL324', NULL, 'PQC', 'SGN', NULL, NULL, '540000.00', NULL, NULL, NULL, NULL, NULL, NULL, '908000.00', '1050000.00', NULL, 61, 147, NULL, 0, NULL, '1590227436', NULL, 'u1'),
(136, '2020-06-09', 'HAXXJG', '7382440131848', 'VN', 'DUC THUC DO', 0, '2020-06-11 16:00:00', NULL, 'VN 7578', NULL, 'DLI', 'HAN', NULL, NULL, '680000.00', '120000.00', '150000.00', NULL, NULL, '0.00', NULL, '1018000.00', '1500000.00', NULL, 54, 150, NULL, 0, NULL, '1591712538', NULL, 'u1'),
(137, '2020-06-09', 'HAXXJG', '7382440131847', 'VN', 'KIM HONG DUONG HOANG', 0, '2020-06-11 16:00:00', NULL, 'VN 7578', NULL, 'DLI', 'HAN', NULL, NULL, '680000.00', '120000.00', '150000.00', NULL, NULL, '0.00', NULL, '1018000.00', '1500000.00', NULL, 54, 150, NULL, 0, NULL, '1591712538', NULL, 'u1'),
(197, '2020-06-27', 'RWWNHP', '7382440537326', 'VN', 'THI LONG NGUYEN', 0, '2020-06-20 14:00:00', NULL, 'VN 1266', NULL, 'SGN', 'VII', NULL, NULL, '990000.00', '120000.00', '150000.00', NULL, NULL, '0.00', NULL, '1359000.00', '1645000.00', NULL, 51, 147, NULL, 0, NULL, NULL, NULL, 'u1'),
(198, '2020-06-27', 'RWWNHP', '7382440537327', 'VN', 'VAN LANG LE', 0, '2020-06-20 14:00:00', NULL, 'VN 1266', NULL, 'SGN', 'VII', NULL, NULL, '990000.00', '120000.00', '150000.00', NULL, NULL, '0.00', NULL, '1359000.00', '1645000.00', NULL, 51, 147, NULL, 0, NULL, NULL, NULL, 'u1'),
(209, '2020-09-25', 'SDFQWQ', '23523423424', 'BB', 'NGO DANG KHOI', 0, '2020-09-26 20:30:21', NULL, 'QH352', NULL, 'HAN', 'SGN', NULL, NULL, '299000.00', '120000.00', '210000.00', '20000.00', 1, '20000.00', '0.00', '698900.00', '850000.00', NULL, 52, 148, '2020-09-25 20:30:15', 1, NULL, NULL, NULL, 'u1'),
(222, '2020-11-14', 'ADAWQR', '7382447024368', 'VN', 'THI HOA NGUYEN', 0, '2020-11-24 09:50:00', NULL, 'VN 1185', NULL, 'HPH', 'SGN', NULL, NULL, '0.00', '120000.00', '150000.00', NULL, NULL, NULL, NULL, '270000.00', '560000.00', NULL, 60, 148, NULL, 0, NULL, '1605364262', NULL, 'u1'),
(223, '2020-11-14', 'ADAWQR', '7382447024370', 'VN', 'BAO CHAU NGUYEN', 0, '2020-11-26 09:50:00', NULL, 'VN 1185', NULL, 'HPH', 'SGN', NULL, NULL, '0.00', '120000.00', '150000.00', NULL, NULL, NULL, NULL, '270000.00', '560000.00', NULL, 60, 148, NULL, 0, NULL, '1605364262', NULL, 'u1'),
(224, '2020-11-14', 'ADAWQR', '7382447024369', 'VN', 'THI GAM PHAM', 0, '2020-11-25 09:50:00', NULL, 'VN 1185', NULL, 'HPH', 'SGN', NULL, NULL, '0.00', '120000.00', '150000.00', NULL, NULL, NULL, NULL, '270000.00', '560000.00', NULL, 60, 148, NULL, 0, NULL, '1605364262', NULL, 'u1'),
(289, '2020-11-25', 'ANRDZ2', '9262317409512', 'BB', 'THI NHUNG DINH, HA CHI PHUNG', 0, '2020-12-20 13:30:00', NULL, 'QH1172', NULL, 'SGN', 'THD', NULL, NULL, '0.00', '120000.00', '210000.00', NULL, NULL, '0.00', NULL, '999999.00', '1111111.00', NULL, 54, 148, NULL, 0, NULL, '2.1606833518', NULL, 'u1'),
(416, '2020-12-03', 'P227PA', '9262317550617', 'BB', 'VAN THAO HOANG', 0, '2020-12-05 13:30:00', NULL, 'QH1172', NULL, 'SGN', 'THD', NULL, NULL, '399000.00', '120000.00', '210000.00', NULL, NULL, '0.00', NULL, '768900.00', '870000.00', NULL, 60, 147, '2020-12-19 23:50:39', 1, NULL, '2.1607009078', NULL, 'u1'),
(417, '2020-12-15', 'UCLNIT', '7382400000000', 'VN', 'DO VAN NAM', 0, '2020-12-23 07:00:00', '2020-12-23 11:55:00', 'VN207', 'VN7206', 'HAN', 'SGN', 'SGN', 'HAN', '0.00', '240000.00', '300000.00', NULL, NULL, '0.00', NULL, '234000.00', '350000.00', NULL, 60, 148, NULL, 0, NULL, '2.1608034497', NULL, 'u1'),
(418, '2020-12-15', 'UCLNIT', '7382400000000', 'VN', 'TANG NGOC ANH', 0, '2020-12-23 07:00:00', '2020-12-23 11:55:00', 'VN207', 'VN7206', 'HAN', 'SGN', 'SGN', 'HAN', '0.00', '240000.00', '300000.00', NULL, NULL, '0.00', NULL, '234000.00', '350000.00', NULL, 60, 148, NULL, 0, NULL, '2.1608034497', NULL, 'u1'),
(419, '2020-12-15', 'UCLNIT', '7382400000000', 'VN', 'HOANG VAN HAI', 0, '2020-12-23 07:00:00', '2020-12-25 11:55:00', 'VN207', 'VN7206', 'HAN', 'AMS', 'AMS', 'HAN', '0.00', '220000.00', '300000.00', NULL, NULL, '0.00', NULL, '234000.00', '350000.00', '2020-12-29', 60, 148, NULL, 0, NULL, '2.1608034497', NULL, 'u1'),
(420, '2020-12-15', 'UCLNIT', '7382400000000', 'VN', 'TRIEU QUOC TUAN', 0, '2020-12-23 07:00:00', '2020-12-23 11:55:00', 'VN207', 'VN7206', 'HAN', 'SGN', 'SGN', 'HAN', '0.00', '240000.00', '300000.00', NULL, NULL, '0.00', NULL, '234000.00', '350000.00', '2020-12-20', 60, 148, NULL, 0, NULL, '2.1608034497', NULL, 'u1'),
(421, '2020-12-15', 'UCLNIT', '7382400000000', 'VN', 'HOANG THI ANH', 1, '2020-12-23 07:00:00', '2020-12-23 11:55:00', 'VN207', 'VN7206', 'HAN', 'SGN', 'SGN', 'HAN', '0.00', '120000.00', '300000.00', NULL, NULL, '0.00', NULL, '234000.00', '350000.00', '2020-12-29', 60, 148, NULL, 0, NULL, '2.1608034497', NULL, 'u1'),
(422, '2020-12-15', 'UCLNIT', '7382400000000', 'VN', 'DO VAN NAM', 0, '2020-12-23 07:00:00', '2020-12-23 11:55:00', 'VN207', 'VN7206', 'HAN', 'SGN', 'SGN', 'HAN', '0.00', '240000.00', '300000.00', NULL, NULL, '0.00', NULL, '290000.00', '359000.00', NULL, 53, 150, NULL, 0, NULL, '2.1608034588', NULL, 'u1'),
(423, '2020-12-15', 'UCLNIT', '7382400000000', 'VN', 'TANG NGOC ANH', 0, '2020-12-23 07:00:00', '2020-12-23 11:55:00', 'VN207', 'VN7206', 'HAN', 'SGN', 'SGN', 'HAN', '0.00', '240000.00', '300000.00', NULL, NULL, '0.00', NULL, '290000.00', '359000.00', NULL, 53, 150, NULL, 0, NULL, '2.1608034588', NULL, 'u1'),
(424, '2020-12-15', 'UCLNIT', '7382400000000', 'VN', 'HOANG VAN HAI', 0, '2020-12-23 07:00:00', '2020-12-23 11:55:00', 'VN207', 'VN7206', 'HAN', 'SGN', 'SGN', 'HAN', '0.00', '240000.00', '300000.00', NULL, NULL, '0.00', NULL, '290000.00', '359000.00', NULL, 53, 150, NULL, 0, NULL, '2.1608034588', NULL, 'u1'),
(425, '2020-12-15', 'UCLNIT', '7382400000000', 'VN', 'TRIEU QUOC TUAN', 0, '2020-12-20 07:00:00', '2020-12-23 11:55:00', 'VN207', 'VN7206', 'HAN', 'SGN', 'SGN', 'HAN', '0.00', '240000.00', '300000.00', NULL, NULL, '0.00', NULL, '290000.00', '359000.00', NULL, 53, 150, NULL, 0, NULL, '2.1608034588', NULL, 'u1'),
(430, '2020-12-12', 'SW7A3R', '7382400000000', 'BB', 'VAN TOAN DO', 0, '2020-12-23 06:10:00', '2020-12-23 06:10:00', 'QH209', 'QH209', 'HAN', 'SGN', 'HAN', 'SGN', '0.00', '240000.00', '420000.00', NULL, NULL, '0.00', NULL, '199000.00', '250000.00', NULL, 52, 150, NULL, 0, NULL, '2.1608040749', NULL, 'u1'),
(431, '2020-12-12', 'SW7A3R', '7382400000000', 'BB', 'VAN HAI DANG', 0, '2020-12-23 06:10:00', '2020-12-23 06:10:00', 'QH209', 'QH209', 'HAN', 'SGN', 'HAN', 'SGN', '0.00', '240000.00', '420000.00', NULL, NULL, '0.00', NULL, '199000.00', '250000.00', NULL, 52, 150, NULL, 0, NULL, '2.1608040749', NULL, 'u1'),
(432, '2020-12-12', 'SW7A3R', '7382400000000', 'BB', 'TUAN ANH HA', 0, '2020-12-23 06:10:00', '2020-12-23 06:10:00', 'QH209', 'QH209', 'HAN', 'SGN', 'HAN', 'SGN', '0.00', '240000.00', '420000.00', NULL, NULL, '0.00', NULL, '199000.00', '250000.00', NULL, 52, 150, NULL, 0, NULL, '2.1608040749', NULL, 'u1'),
(433, '2020-12-12', 'SW7A3R', '7382400000000', 'BB', 'VAN NAM LUONG', 0, '2020-12-23 06:10:00', '2020-12-23 06:10:00', 'QH209', 'QH209', 'HAN', 'SGN', 'HAN', 'SGN', '0.00', '240000.00', '420000.00', NULL, NULL, '0.00', NULL, '199000.00', '250000.00', NULL, 52, 150, NULL, 0, NULL, '2.1608040749', NULL, 'u1'),
(435, '2020-12-08', 'LB5A3R', '9262317619696', 'BB', 'TIEN DUNG DO', 0, '2020-12-18 16:35:00', NULL, 'QH1173', NULL, 'THD', 'SGN', NULL, NULL, '0.00', '100000.00', '210000.00', NULL, NULL, '0.00', NULL, '199000.00', '250000.00', NULL, 52, 150, NULL, 0, NULL, '2.1608041847', NULL, 'u1'),
(436, '2020-12-14', 'FG5A3S', '9262317733067', 'BB', 'THI NGA NONG', 0, '2020-12-24 10:40:00', NULL, 'QH212', NULL, 'SGN', 'HAN', NULL, NULL, '0.00', '120000.00', '210000.00', NULL, NULL, '0.00', NULL, '179000.00', '250000.00', NULL, 56, 150, NULL, 0, NULL, '2.1608048246', NULL, 'u1'),
(437, '2020-12-14', 'FG5A3S', '9262317733067', 'BB', 'NGO BAN AA', 0, '2020-12-24 10:40:00', NULL, 'QH212', NULL, 'SGN', 'HAN', NULL, NULL, '0.00', '120000.00', '210000.00', NULL, NULL, '0.00', NULL, '179000.00', '250000.00', NULL, 56, 150, '2020-12-26 00:00:12', 1, NULL, NULL, NULL, 'u2'),
(446, '2021-01-04', 'BFESLX', '7382405213953', 'VN', 'XUAN KHU VU', 0, '2021-01-04 05:55:00', NULL, 'VN 7245', NULL, 'HAN', 'SGN', NULL, NULL, '400000.00', '120000.00', '150000.00', '20000.00', 3, '9000.00', NULL, '739000.00', '850000.00', NULL, 84, 147, NULL, 0, NULL, '2.1609777175', NULL, 'u1'),
(447, '2021-01-04', 'BFESLX', '7382405213952', 'VN', 'VAN NINH PHUNG', 0, '2021-01-04 05:55:00', NULL, 'VN 7245', NULL, 'HAN', 'SGN', NULL, NULL, '400000.00', '120000.00', '150000.00', '30000.00', 2, '0.00', NULL, '740000.00', '950000.00', NULL, 84, NULL, NULL, 0, NULL, '2.1609777175', NULL, 'u1'),
(455, '2021-01-06', 'DRIWPM', '7382405373535', 'VN', 'ANH NGUYEN TU', 0, '2021-01-06 14:00:00', '2021-01-07 20:00:00', 'VN 214', 'VN 283', 'LPQ', 'HAN', 'HAN', 'SGN', '199000.00', '220000.00', '300000.00', NULL, NULL, '0.00', NULL, '738900.00', '950000.00', NULL, 53, NULL, NULL, 0, NULL, '2.1609948872', NULL, 'u1'),
(456, '2021-01-06', 'SZ5F23', '7382400000000', 'BB', 'THI THU NGHIEM', 0, '2021-01-11 21:00:00', NULL, 'QH286', NULL, 'SGN', 'HAN', NULL, NULL, '199000.00', '120000.00', '210000.00', NULL, NULL, '0.00', NULL, '548900.00', '650000.00', '2021-01-10', 56, 151, NULL, 0, NULL, '2.1610254815', NULL, 'u1'),
(457, '2021-01-17', NULL, 'YUQ96U', 'VJ', 'NGUYEN VAN NAM', 0, '2021-01-22 05:40:00', NULL, 'VJ175', NULL, 'HAN', 'SGN', NULL, NULL, '199000.00', '120000.00', '210000.00', NULL, NULL, '6000.00', NULL, '554900.00', '649000.00', NULL, 60, 150, NULL, 0, NULL, '21.1610891092', NULL, 'u2');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hang_hoa`
--

CREATE TABLE `hang_hoa` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_tai_khoan` int(10) UNSIGNED NOT NULL,
  `ma_hang` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_hang` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phan_loai` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `don_vi` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `don_gia` decimal(11,2) NOT NULL DEFAULT 0.00,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hang_hoa`
--

INSERT INTO `hang_hoa` (`id`, `id_tai_khoan`, `ma_hang`, `ten_hang`, `phan_loai`, `don_vi`, `don_gia`, `ghi_chu`, `username`, `created_at`, `updated_at`) VALUES
(1, 82, 'TTS3223', 'Hàng hóa test 3223', 'Cơm bình dân', 'Mâm', '1200000.00', 'teestt', 'nvn', NULL, '2020-04-07 14:03:07'),
(2, 81, 'TT2', 'Xe 4 chỗ', 'Xe du lịch', 'Xe', '570000.00', 'xxxx', 'nvn', '2020-04-07 14:03:53', '2020-04-07 14:03:53'),
(3, 84, 'TT343', 'Tiệc cưới 10 người', 'Tiệc cưới', 'Bàn', '3500000.00', 'vxcvdssds', 'u1', '2020-04-07 14:05:04', '2020-04-07 14:05:04'),
(4, 60, 'TT453', 'Tiệc 6 người', 'Tiệc cưới', 'Bàn', '1650000.00', NULL, 'u1', '2020-04-07 14:05:56', '2020-04-07 14:05:56'),
(5, 84, 'tte3', 'fsd wr', 'Cơm bình dân', 'mâm', '450000.00', NULL, 'nvn', '2020-04-08 08:01:29', '2020-04-08 08:01:29'),
(6, 81, 'XE32', 'Xe 4 chỗ', 'Xe', 'Chiếc', '250000.00', NULL, 'u1', '2020-12-22 13:57:59', '2020-12-22 13:57:59'),
(7, 82, 'H123', 'Hàng Tesst', 'Tiệc cưới', NULL, '2450000.00', NULL, 'u1', '2021-01-06 14:09:26', '2021-01-06 14:09:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khach_hang`
--

CREATE TABLE `khach_hang` (
  `id` int(10) UNSIGNED NOT NULL,
  `ma_khach_hang` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ho_ten` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `sdt` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dia_chi` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mst` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ma_dai_ly` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phan_loai` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `so_du_ky_truoc` decimal(11,2) NOT NULL DEFAULT 0.00,
  `ngay_tao` date DEFAULT NULL,
  `ngay_nhac` datetime DEFAULT NULL,
  `phi_vn` decimal(11,2) NOT NULL DEFAULT 0.00,
  `phi_vj` decimal(11,2) NOT NULL DEFAULT 0.00,
  `phi_jets` decimal(11,2) NOT NULL DEFAULT 0.00,
  `phi_bb` decimal(11,2) NOT NULL DEFAULT 0.00,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `khach_hang`
--

INSERT INTO `khach_hang` (`id`, `ma_khach_hang`, `ho_ten`, `sdt`, `dia_chi`, `email`, `mst`, `ma_dai_ly`, `phan_loai`, `so_du_ky_truoc`, `ngay_tao`, `ngay_nhac`, `phi_vn`, `phi_vj`, `phi_jets`, `phi_bb`, `ghi_chu`, `username`) VALUES
(147, 'NVN', 'NV Nhan', NULL, NULL, NULL, NULL, NULL, 'Test', '11500000.00', '2018-12-08', '2020-04-18 20:00:06', '0.00', '0.00', '0.00', '0.00', NULL, 'u1'),
(148, '0.2 TTKTĐB', 'TTKTĐB', NULL, NULL, NULL, NULL, NULL, 'Công ty', '0.00', '2018-12-09', NULL, '7000.00', '0.00', '0.00', '0.00', NULL, 'u1'),
(150, '3. TTN', 'TTB', NULL, 'Ha Noi', 'nhanc500@gmail.com', '2345234234', 'nvn123,nvn456', 'Khách lẻ', '0.00', '2018-12-29', '2020-04-01 07:40:00', '0.00', '0.00', '0.00', '0.00', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'u1'),
(151, 'CT23', 'Danh Thanh', NULL, NULL, NULL, NULL, NULL, 'Thu Chi ngoài', '0.00', '2020-12-31', NULL, '0.00', '0.00', '0.00', '0.00', NULL, 'u1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(2, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(3, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(4, '2016_06_01_000004_create_oauth_clients_table', 1),
(5, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(6, '2020_03_26_141527_create_khach_hangs_table', 1),
(7, '2020_03_26_152043_create_ban_ras_table', 1),
(8, '2020_03_26_152112_create_dat_ves_table', 1),
(9, '2020_03_26_152125_create_hang_hoas_table', 1),
(10, '2020_03_26_152142_create_mua_vaos_table', 1),
(11, '2020_03_26_152156_create_phi_hanh_lies_table', 1),
(12, '2020_03_26_152214_create_san_bays_table', 1),
(13, '2020_03_26_152229_create_tai_khoans_table', 1),
(14, '2020_03_26_152248_create_thu_chis_table', 1),
(15, '2020_03_26_152303_create_thu_chi_chi_tiets_table', 1),
(16, '2020_03_26_152318_create_thue_phis_table', 1),
(17, '2020_03_26_152331_create_tours_table', 1),
(18, '2020_03_26_152340_create_tour_chi_tiets_table', 1),
(19, '2020_03_26_152353_create_visas_table', 1),
(20, '2020_03_26_23423_create_users_table', 1),
(21, '2020_03_28_134417_alter_add_foreign_keys', 1),
(22, '2020_04_12_104030_add_thanh_tien_virtual_columns', 2),
(23, '2020_04_12_175050_add_virtual_columns_dat_ve', 3),
(24, '2020_05_31_214502_add_gmail_feilds', 4),
(25, '2020_06_15_205935_add_user_role', 5),
(26, '2020_06_16_211659_add_username_field', 6),
(27, '2020_06_16_213050_add_setting_user', 6),
(28, '2020_06_16_230928_delete_tct_username', 7),
(29, '2020_07_01_222311_add_dinh_danh_thu_chi', 8),
(30, '2020_08_19_095215_add_user_so_ngay_dang_nhap', 9),
(31, '2020_09_20_192453_add_email_user', 10),
(32, '2020_09_23_194409_add_notify_email_user', 11),
(33, '2021_01_10_171853_add_user_zone', 12),
(34, '2021_01_23_220000_add_tool_permission', 13);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `mua_vao`
--

CREATE TABLE `mua_vao` (
  `id` int(10) UNSIGNED NOT NULL,
  `ngay_thang` date NOT NULL,
  `id_hang_hoa` int(10) UNSIGNED NOT NULL,
  `so_luong` int(11) NOT NULL DEFAULT 1,
  `don_gia` decimal(11,2) NOT NULL DEFAULT 0.00,
  `ngay_thanh_toan` date DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thanh_tien` decimal(11,2) GENERATED ALWAYS AS (`so_luong` * `don_gia`) VIRTUAL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `mua_vao`
--

INSERT INTO `mua_vao` (`id`, `ngay_thang`, `id_hang_hoa`, `so_luong`, `don_gia`, `ngay_thanh_toan`, `ghi_chu`, `username`) VALUES
(2, '2020-04-10', 4, 10, '1690000.00', NULL, 'YERTER', 'nvn'),
(3, '2020-04-11', 5, 10, '450000.00', NULL, 'fbdfg', 'nvn'),
(4, '2020-04-07', 4, 7, '1650000.00', NULL, NULL, 'nvn'),
(5, '2020-12-22', 6, 1, '100000.00', NULL, NULL, 'u1'),
(6, '2021-01-10', 6, 25, '250000.00', NULL, NULL, 'u1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('22b0ecc1f17c7cd6c9273d2780bf46c8300cd927a33137bc1b6ad03fe4c0b71a5ac7c2ffdde5f6b4', 2, 1, 'Web API login', '[]', 0, '2021-04-19 14:57:28', '2021-04-19 14:57:28', '2021-04-20 21:57:26'),
('54539a3d3c34a6877c61e518aa3c7b9c1f1f612c80c1e10c6aee582b3987fc8ae173ddea3a2121eb', 1, 1, 'Web API login', '[]', 1, '2021-02-22 14:34:38', '2021-02-22 14:34:38', '2021-02-23 21:34:36'),
('be6ce85838fc040902b70d81b40e7089ee19c711a0c601476a4363a2fd93feb2bff4a1f52d3df0ea', 22, 1, 'Web API login', '[]', 1, '2021-01-13 15:36:53', '2021-01-13 15:36:53', '2021-01-14 22:36:52'),
('eae80e17b1920406848d131b4952e47c76f85fc952da5b1931ba0bd59a99af1d6f473eab72654f30', 23, 1, 'Web API login', '[]', 1, '2020-12-27 14:42:22', '2020-12-27 14:42:22', '2020-12-28 21:42:22'),
('f4e403099a912740fe7e6f96e4a51ef8e6ef95d5cf7dd3ece1e12e993ea528d721c23ef4ded29d5e', 21, 1, 'Web API login', '[]', 0, '2021-01-17 13:28:44', '2021-01-17 13:28:44', '2021-01-18 20:28:44'),
('fe5263c44bb26a49cc74a717afa591e6451c5ce4f6163ed960aa6a292b13187ec6cf34261fc69ece', 1, 1, 'Extension API login', '[]', 0, '2020-08-27 14:46:26', '2020-08-27 14:46:26', '2020-08-28 21:46:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'OJTesOLVRuYcFAjHXnKzSKjfVLSFXZip0hIn1MCV', 'http://localhost', 1, 0, 0, '2020-03-28 07:03:00', '2020-03-28 07:03:00'),
(2, NULL, 'Laravel Password Grant Client', 'Uvv5bvYvedMbVinB3JteEsB7ayrUGYPwlepMQyEN', 'http://localhost', 0, 1, 0, '2020-03-28 07:03:01', '2020-03-28 07:03:01');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2020-03-28 07:03:01', '2020-03-28 07:03:01');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phi_hanh_ly`
--

CREATE TABLE `phi_hanh_ly` (
  `id` int(10) UNSIGNED NOT NULL,
  `hanh_ly` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `muc_phi` decimal(11,2) NOT NULL DEFAULT 0.00,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hang_bay` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `phi_hanh_ly`
--

INSERT INTO `phi_hanh_ly` (`id`, `hanh_ly`, `muc_phi`, `ghi_chu`, `hang_bay`) VALUES
(1, '5kg các hãng', '20000.00', NULL, NULL),
(2, '10kg', '30000.00', NULL, NULL),
(3, '15kg', '20000.00', NULL, NULL),
(4, '20kg', '30000.00', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `san_bay`
--

CREATE TABLE `san_bay` (
  `id` int(10) UNSIGNED NOT NULL,
  `ma_san_bay` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_san_bay` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phan_loai` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `loai_a` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `san_bay`
--

INSERT INTO `san_bay` (`id`, `ma_san_bay`, `ten_san_bay`, `phan_loai`, `loai_a`) VALUES
(1, 'AMS', 'Amsterdam  (AMS)', 'Châu Âu', NULL),
(3, 'ATL', 'Atlanta Hartsfield  (ATL)', 'Hoa Kỳ', NULL),
(4, 'AUS', 'Austin  (AUS)', 'Hoa Kỳ', NULL),
(5, 'BCN', 'Barcelona, Spain  (BCN)', 'Châu Âu', NULL),
(6, 'BJS', 'Beijing  (BJS)', 'Đông Bắc Á', NULL),
(7, 'BKK', 'Bangkok  (BKK)', 'Đông Nam Á', NULL),
(8, 'BMV', 'Ban Me Thuot  (BMV)', 'Việt Nam', 1),
(9, 'BOS', 'Boston, Logan  (BOS)', 'Hoa Kỳ', NULL),
(10, 'CAH', 'Ca Mau  (CAH)', 'Việt Nam', NULL),
(11, 'CAN', 'Guangzhou  (CAN)', 'Đông Bắc Á', NULL),
(12, 'CGK', 'Jakarta  (CGK)', 'Đông Nam Á', NULL),
(13, 'CGO', 'Zhengzhou, China  (CGO)', 'Đông Bắc Á', NULL),
(14, 'CHI', 'Chicago, IL  (CHI)', 'Hoa Kỳ', NULL),
(15, 'CPH', 'Copenhagen, Denmark  (CPH)', 'Châu Âu', NULL),
(16, 'CTU', 'Chengdu  (CTU)', 'Đông Bắc Á', NULL),
(17, 'CXR', 'Nha Trang  (CXR)', 'Việt Nam', 1),
(18, 'CZX', 'Changzhou, China  (CZX)', 'Đông Bắc Á', NULL),
(19, 'DAD', 'Da Nang  (DAD)', 'Việt Nam', 1),
(20, 'DEN', 'Denver  (DEN)', 'Hoa Kỳ', NULL),
(21, 'DFW', 'Dallas/Fort Worth  (DFW)', 'Hoa Kỳ', NULL),
(22, 'DIN', 'Dien Bien  (DIN)', 'Việt Nam', NULL),
(23, 'DLI', 'Da Lat  (DLI)', 'Việt Nam', 1),
(24, 'ETZ', 'Lorraine TGV, France  (ETZ)', 'Châu Âu', NULL),
(25, 'FRA', 'Frankfurt  (FRA)', 'Châu Âu', NULL),
(26, 'FUK', 'Fukuoka  (FUK)', 'Đông Bắc Á', NULL),
(27, 'GVA', 'Geneva, Switzerland  (GVA)', 'Châu Âu', NULL),
(28, 'HAN', 'Ha Noi  (HAN)', 'Việt Nam', 1),
(29, 'HET', 'Hohhot, China  (HET)', 'Đông Bắc Á', NULL),
(30, 'HGH', 'Hangzhou, China  (HGH)', 'Đông Bắc Á', NULL),
(31, 'HKG', 'Hong Kong  (HKG)', 'Đông Bắc Á', NULL),
(32, 'HND', 'Haneda, Tokyo  (HND)', 'Đông Bắc Á', NULL),
(33, 'HNL', 'Honolulu  (HNL)', 'Hoa Kỳ', NULL),
(34, 'HOU', 'Houston  (HOU)', 'Hoa Kỳ', NULL),
(35, 'HPH', 'Hai Phong  (HPH)', 'Việt Nam', 1),
(36, 'HUI', 'Hue  (HUI)', 'Việt Nam', 1),
(37, 'ICN', 'Seoul  (ICN)', 'Đông Bắc Á', NULL),
(38, 'ITM', 'Osaka  (ITM)', 'Đông Bắc Á', NULL),
(39, 'JFK', 'New York, USA  (JFK)', 'Hoa Kỳ', NULL),
(40, 'KHH', 'Kaohsiung  (KHH)', 'Đông Bắc Á', NULL),
(41, 'KMG', 'Kunming, China  (KMG)', 'Đông Bắc Á', NULL),
(42, 'KUL', 'Kuala Lumpur  (KUL)', 'Đông Nam Á', NULL),
(43, 'LAX', 'Los Angeles  (LAX)', 'Hoa Kỳ', NULL),
(44, 'LON', 'London  (LON)', 'Châu Âu', NULL),
(45, 'LPQ', 'Luang Prabang  (LPQ)', 'Đông Dương', NULL),
(46, 'LYS', 'Lyon, France  (LYS)', 'Châu Âu', NULL),
(47, 'MEL', 'Melbourne  (MEL)', 'Châu Úc', NULL),
(48, 'MIA', 'Miami  (MIA)', 'Hoa Kỳ', NULL),
(49, 'MNL', 'Manila  (MNL)', 'Đông Nam Á', NULL),
(50, 'MRS', 'Marseille, France  (MRS)', 'Châu Âu', NULL),
(51, 'MSP', 'Minneapolis/St.Paul  (MSP)', 'Hoa Kỳ', NULL),
(52, 'NCE', 'Nice, France  (NCE)', 'Châu Âu', NULL),
(53, 'NGB', 'Ninhbo, China  (NGB)', 'Đông Bắc Á', NULL),
(54, 'NGO', 'Nagoya  (NGO)', 'Đông Bắc Á', NULL),
(55, 'NKG', 'Nanjing - Lokou, China  (NKG)', 'Đông Bắc Á', NULL),
(56, 'NNG', 'Nanning - Wuxu, China  (NNG)', 'Đông Bắc Á', NULL),
(57, 'NRT', 'Narita, Tokyo  (NRT)', 'Đông Bắc Á', NULL),
(58, 'OSA', 'Osaka  (OSA)', 'Đông Bắc Á', NULL),
(59, 'PAR', 'Paris  (PAR)', 'Châu Âu', NULL),
(60, 'PDX', 'Portland  (PDX)', 'Hoa Kỳ', NULL),
(61, 'PHL', 'Philadelphia  (PHL)', 'Hoa Kỳ', NULL),
(62, 'PNH', 'Phnom Penh  (PNH)', 'Đông Dương', NULL),
(63, 'PQC', 'Phu Quoc  (PQC)', 'Việt Nam', 1),
(64, 'PRG', 'Praque  (PRG)', 'Châu Âu', NULL),
(65, 'PUS', 'Busan  (PUS)', 'Đông Bắc Á', NULL),
(66, 'PXU', 'Pleiku  (PXU)', 'Việt Nam', NULL),
(67, 'QJZ', 'Nantes, France  (QJZ)', 'Châu Âu', NULL),
(68, 'QXB', 'Aix en Provence TGV, France  (QXB)', 'Châu Âu', NULL),
(69, 'QXG', 'Angers St-Laud, France  (QXG)', 'Châu Âu', NULL),
(70, 'QYG', 'Raiway, Germany  (QYG)', 'Châu Âu', NULL),
(71, 'REP', 'Siem Riep  (REP)', 'Đông Dương', NULL),
(72, 'RGN', 'Yangon  (RGN)', 'Đông Nam Á', NULL),
(73, 'RMQ', 'Đài Trung  (RMQ)', 'Đông Bắc Á', NULL),
(74, 'ROM', 'Rome  (ROM)', 'Châu Âu', NULL),
(75, 'SEA', 'Seattle, Tacoma  (SEA)', 'Hoa Kỳ', NULL),
(76, 'SFO', 'San Francisco  (SFO)', 'Hoa Kỳ', NULL),
(77, 'SGN', 'Ho Chi Minh City  (SGN)', 'Việt Nam', 1),
(78, 'SHA', 'Shanghai  (SHA)', 'Đông Bắc Á', NULL),
(79, 'SIN', 'Singapore  (SIN)', 'Đông Nam Á', NULL),
(80, 'STL', 'St Louis, Lambert  (STL)', 'Hoa Kỳ', NULL),
(81, 'SYD', 'Sydney  (SYD)', 'Châu Úc', NULL),
(82, 'TBB', 'Tuy Hoa  (TBB)', 'Việt Nam', NULL),
(83, 'THD', 'Thanh Hoa  (THD)', 'Việt Nam', NULL),
(84, 'TLS', 'Toulouse, France  (TLS)', 'Châu Âu', NULL),
(85, 'TPE', 'Taipei  (TPE)', 'Đông Bắc Á', NULL),
(86, 'TSN', 'Tianjin, China  (TSN)', 'Đông Bắc Á', NULL),
(87, 'TTN', 'Đài Nam  (TTN)', 'Đông Bắc Á', NULL),
(88, 'TYO', 'Tokyo  (TYO)', 'Đông Bắc Á', NULL),
(89, 'UIH', 'Quy Nhon  (UIH)', 'Việt Nam', NULL),
(90, 'VCA', 'Can Tho (VCA)', 'Việt Nam', 1),
(91, 'VCL', 'Chu Lai  (VCL)', 'Việt Nam', NULL),
(92, 'VCS', 'Con Dao  (VCS)', 'Việt Nam', 0),
(93, 'VDH', 'Dong Hoi  (VDH)', 'Việt Nam', NULL),
(94, 'VIE', 'Vienne, Austria  (VIE)', 'Châu Âu', NULL),
(95, 'VII', 'Vinh  (VII)', 'Việt Nam', 1),
(96, 'VKG', 'Rach Gia  (VKG)', 'Việt Nam', NULL),
(97, 'VTE', 'Vientiane  (VTE)', 'Đông Dương', NULL),
(98, 'WAS', 'Washington  (WAS)', 'Hoa Kỳ', NULL),
(99, 'XDB', 'Lille - Europe, France  (XDB)', 'Châu Âu', NULL),
(100, 'XHK', 'Valence RR, France  (XHK)', 'Châu Âu', NULL),
(101, 'XIY', 'Xian, China  (XIY)', 'Đông Bắc Á', NULL),
(102, 'XIZ', 'Champagne TGV, France  (XIZ)', 'Châu Âu', NULL),
(103, 'XOP', 'Poitiers, France  (XOP)', 'Châu Âu', NULL),
(104, 'XPJ', 'Montpellier, France  (XPJ)', 'Châu Âu', NULL),
(105, 'XRF', 'Marseille St Charles, France  (XRF)', 'Châu Âu', NULL),
(106, 'XSH', 'St-Pierre des Corps, France  (XSH)', 'Châu Âu', NULL),
(107, 'XWG', 'Strasbourg, France  (XWG)', 'Châu Âu', NULL),
(108, 'XYD', 'Lyon Part - Dieu, France  (XYD)', 'Châu Âu', NULL),
(109, 'XZN', 'Avignon TGV, France  (XZN)', 'Châu Âu', NULL),
(110, 'XZV', 'Toulon, France  (XZV)', 'Châu Âu', NULL),
(111, 'YVR', 'Vancouver, Canada  (YVR)', 'Hoa Kỳ', NULL),
(112, 'ZFJ', 'Rennes, France  (ZFJ)', 'Châu Âu', NULL),
(113, 'ZFQ', 'Bordeaux St Jean, France  (ZFQ)', 'Châu Âu', NULL),
(114, 'ZLN', 'Le Mans, France  (ZLN)', 'Châu Âu', NULL),
(115, 'ZRH', 'Zurich, Switzerland  (ZRH)', 'Châu Âu', NULL),
(116, 'ZYN', 'Nîmes, France  (ZYN)', 'Châu Âu', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tai_khoan`
--

CREATE TABLE `tai_khoan` (
  `id` int(10) UNSIGNED NOT NULL,
  `ky_hieu` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mo_ta` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `loai` int(11) NOT NULL DEFAULT 0,
  `phan_loai` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `phi_vn` decimal(11,2) NOT NULL DEFAULT 0.00,
  `phi_vj` decimal(11,2) NOT NULL DEFAULT 0.00,
  `phi_jets` decimal(11,2) NOT NULL DEFAULT 0.00,
  `phi_bb` decimal(11,2) NOT NULL DEFAULT 0.00,
  `mst` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dia_chi` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sdt` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `so_du_ky_truoc` decimal(11,2) NOT NULL DEFAULT 0.00,
  `ngay_tao` date DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tai_khoan`
--

INSERT INTO `tai_khoan` (`id`, `ky_hieu`, `mo_ta`, `loai`, `phan_loai`, `phi_vn`, `phi_vj`, `phi_jets`, `phi_bb`, `mst`, `dia_chi`, `email`, `sdt`, `so_du_ky_truoc`, `ngay_tao`, `ghi_chu`, `username`) VALUES
(15, 'NỢ VÉ', 'NỢ VÉ', -1, '', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL, 'u1'),
(24, 'Dư', 'Dư', -1, '', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL, 'u1'),
(50, '1.TM', 'AGRIBANK-THANH', 0, '', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL, 'u1'),
(51, '2. AGR', 'AGRIBANK-THANH', 0, '', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL, 'u1'),
(52, '3. TCB', 'TECKCOMBANK-THANH', 0, '', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL, 'u1'),
(53, '4. A Minh', 'A Minh', 0, '', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL, 'u1'),
(54, '5. TECK -CT', 'TECKCOMBANK-CT', 0, '', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL, 'u1'),
(55, '6. VCB', 'VIETCOMBANK', 0, '', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', '2020-06-03', NULL, 'u1'),
(56, '7. VCB-CT', 'VIETCOMBANK-CT', 0, '', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL, 'u1'),
(57, '8. SACOM', 'SACOMBANK', 0, '', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL, 'u1'),
(58, '9. BIDV', 'BIDV', 0, '', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL, 'u1'),
(60, 'BAO GIA TRAN', 'BẢO GIA TRAN', 1, 'Vé máy bay', '6000.00', '6000.00', '6000.00', '6000.00', 'mstbao3453', 'sdtbao', 'mailbao@sd.com', '24235464564233', '0.00', '2020-09-01', 'tesets', 'u1'),
(61, 'NGOC MAI', 'NGỌC MAI', 1, 'Vé máy bay', '8000.00', '8000.00', '8000.00', '8000.00', NULL, NULL, NULL, '', '0.00', NULL, NULL, 'u1'),
(62, 'DUNG THANH', 'DŨNG THÀNH', 1, 'Vé máy bay', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, '', '0.00', NULL, NULL, 'u1'),
(63, 'KINH BAC', 'KINH BẮC', 1, 'Vé máy bay', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, '', '0.00', NULL, NULL, 'u1'),
(81, 'HOANG HA', 'Nhà xe Hoàng Hà', 1, 'Nhà xe', '0.00', '0.00', '0.00', '0.00', '123244', 'Hà Nội', NULL, '0795834858', '0.00', NULL, NULL, 'u1'),
(82, 'VUON TRAU', 'Nhà Hàng Vườn trầu', 1, 'Nhà hàng', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, '0986376194', '0.00', NULL, NULL, 'u1'),
(84, 'NCC TEST', 'Nhà cung cấp TEST', 1, 'Nhà hàng', '9000.00', '9000.00', '9000.00', '9000.00', NULL, NULL, NULL, NULL, '0.00', '2020-04-07', 'tếtt', 'u1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thue_phi`
--

CREATE TABLE `thue_phi` (
  `id` int(10) UNSIGNED NOT NULL,
  `loai_phi` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `muc_phi` decimal(11,2) NOT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `thue_phi`
--

INSERT INTO `thue_phi` (`id`, `loai_phi`, `muc_phi`, `ghi_chu`) VALUES
(1, 'Phí soi chiếu, an ninh nhóm A | VN | Người lớn', '120000.00', NULL),
(2, 'Phí soi chiếu, an ninh nhóm A | VN | Trẻ em', '60000.00', NULL),
(3, 'Phí soi chiếu, an ninh nhóm A | VJ | Người lớn', '120000.00', NULL),
(4, 'Phí soi chiếu, an ninh nhóm A | VJ | Trẻ em', '60000.00', NULL),
(5, 'Phí soi chiếu, an ninh nhóm A | Jets | Người lớn', '120000.00', NULL),
(6, 'Phí soi chiếu, an ninh nhóm A | Jets | Trẻ em', '60000.00', NULL),
(7, 'Phí soi chiếu, an ninh nhóm B | VN | Người lớn', '100000.00', NULL),
(8, 'Phí soi chiếu, an ninh nhóm B | VN | Trẻ em', '50000.00', NULL),
(9, 'Phí soi chiếu, an ninh nhóm B | VJ | Người lớn', '100000.00', NULL),
(10, 'Phí soi chiếu, an ninh nhóm B | VJ | Trẻ em', '50000.00', NULL),
(11, 'Phí soi chiếu, an ninh nhóm B | Jets | Người lớn', '100000.00', 'tesste'),
(12, 'Phí soi chiếu, an ninh nhóm B | Jets | Trẻ em', '50000.00', NULL),
(13, 'Phí quản trị | VN | Chặng dài', '150000.00', NULL),
(14, 'Phí quản trị | VN | Chặng ngắn', '80000.00', NULL),
(15, 'Phí quản trị | VJ', '210000.00', NULL),
(16, 'Phí quản trị | Jets', '210000.00', NULL),
(17, 'Phí soi chiếu, an ninh nhóm A | BB | Người lớn', '120000.00', NULL),
(18, 'Phí soi chiếu, an ninh nhóm A | BB | Trẻ em', '60000.00', NULL),
(19, 'Phí soi chiếu, an ninh nhóm B | BB | Người lớn', '100000.00', NULL),
(20, 'Phí soi chiếu, an ninh nhóm B | BB | Trẻ em', '50000.00', NULL),
(21, 'Phí quản trị | BB', '210000.00', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thu_chi`
--

CREATE TABLE `thu_chi` (
  `id` int(10) UNSIGNED NOT NULL,
  `ngay_thang` date NOT NULL,
  `hang_muc` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `so_tien` decimal(11,2) NOT NULL DEFAULT 0.00,
  `id_tai_khoan_di` int(10) UNSIGNED DEFAULT NULL,
  `id_tai_khoan_den` int(10) UNSIGNED DEFAULT NULL,
  `id_khach_hang` int(10) UNSIGNED DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dinh_danh` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `thu_chi`
--

INSERT INTO `thu_chi` (`id`, `ngay_thang`, `hang_muc`, `so_tien`, `id_tai_khoan_di`, `id_tai_khoan_den`, `id_khach_hang`, `username`, `dinh_danh`) VALUES
(1, '2020-04-15', 'Test', '2475000.00', NULL, 52, 148, 'u1', NULL),
(2, '2020-04-16', 'Test 2', '500000.00', 53, 60, NULL, 'u1', NULL),
(3, '2020-04-18', 'Thanh toán vé 34568456436', '1250000.00', NULL, 58, 148, 'u1', NULL),
(4, '2020-06-30', 'Sed porttitor lectus nibh.', '100000.00', 52, 54, NULL, 'u1', NULL),
(7, '2020-07-01', 'Test Excel', '100000.00', NULL, 52, 147, 'u1', 'thu-chi.xlsx1593617781'),
(8, '2019-08-16', 'Co huong tra tien ve may bay hn sg / FT19228195912285', '5220000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(9, '2019-08-16', 'CK TECH SANG BIDV / FT19228070454215', '19000000.00', 52, NULL, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(10, '2019-08-16', 'Lan ck / FT19228615709790', '500000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(11, '2019-08-16', 'A hung max / FT19228240003812', '15000000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(12, '2019-08-16', 'Ctv mai hoang hanh ck / FT19228926430683', '3292000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(13, '2019-08-17', 'EM BA DEN CK / FT19229872901100', '5000000.00', 52, NULL, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(14, '2019-08-17', 'THUONG CK TUYET HOA HONG / FT19229484242975', '400000.00', 52, NULL, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(15, '2019-08-17', 'PV ABAYGIARE CK LAI CHI TIEN VE / FT19229223005005', '1600000.00', 52, NULL, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(16, '2019-08-17', 'CHI THUONG CK PHAN MEM CONG NO / FT19229808900709', '1350000.00', 52, NULL, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(17, '2019-08-17', 'Techcombank 19026384143024 CK AGB S ANG TECH / FT19229041543528', '24400000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(18, '2019-08-17', 'CK TECH SANG BIDV / FT19229728201948', '28600000.00', 52, NULL, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(19, '2019-08-17', 'Ctv nga / FT19229817943760', '193000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(20, '2019-08-17', 'PV THANH HANG CK VE MAY BAY / FT19229008044900', '15000000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(21, '2019-08-17', 'CK ACB SANG TECH-170819-13:53:24 / FT19229817564257', '13290000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(22, '2019-08-17', 'Phi doi chang bay Sai gon - Nha tra ng / FT19229817467138', '350000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(23, '2019-08-17', 'PV DV DL THOI DAI MOI CK BD / FT19229806444203', '18400000.00', 52, NULL, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(24, '2019-08-17', 'CK ACB SANG TECH-170819-06:02:07 / FT19229459008354', '8600000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(25, '2019-08-17', 'Co huong tra tien ve may bay nt hn / FT19229990031010', '4167000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(26, '2019-08-19', 'CK TECH SANG BIDV / FT19231291425280', '23000000.00', 52, NULL, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(27, '2019-08-19', 'Techcombank 19026384143024 ck agb s ang tech / FT19231713574263', '5000000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(28, '2019-08-19', 'PV DV DL THOI DAI MOI CK BD / FT19231598595345', '29350000.00', 52, NULL, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(29, '2019-08-19', 'C Ngoc Yen Bai ck / FT19231892000372', '14764000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(30, '2019-08-19', 't nu ky quy / FT19231338988931', '10000000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(31, '2019-08-19', 'Hanh ck / FT19231422892014', '3060000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(32, '2019-08-19', 'A hung max / FT19231500516402', '20000000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(33, '2019-08-19', 'CK TECH SANG BIDV / FT19231553052093', '32000000.00', 52, NULL, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(34, '2019-08-19', 'Vinh ck tien ve may bay / FT19231601037048', '1010000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(35, '2019-08-19', 'Chi linh ck cho thuong tien ve / FT19231400043042', '13000000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(36, '2019-08-19', 'Nguyet ck tien ve / FT19231108675498', '1726000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(37, '2019-08-20', 'Nguyet tt tien ve / FT19232072931088', '1746000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(38, '2019-08-20', 'Phongvehuongdat ck / FT19232276034208', '15000000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(39, '2019-08-20', 'Hang daco ck / FT19232609659363', '10000000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(40, '2019-08-20', 'Chuyen tien ve may bay Sai Gon - Co n Dao / FT19232347993591', '21902000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(41, '2019-08-20', 'pvvepam / FT19232270381874', '6800000.00', NULL, 52, NULL, 'u1', 'NGAN HANG.xlsx1606837464'),
(42, '2020-12-07', 'Test', '100000.00', 52, 51, 150, 'u1', NULL),
(57, '2020-12-27', 'TEST 1', '100000.00', 52, 61, NULL, 'u2', NULL),
(58, '2020-12-28', 'Test', '100000.00', 54, 82, NULL, 'u2', NULL),
(59, '2020-12-29', 'tesst thanh toán đặt vé', '700000.00', 54, NULL, 148, 'u2', NULL),
(60, '2020-12-20', 'test than htoans đv 2', '350000.00', 58, NULL, 148, 'u2', NULL),
(61, '2021-01-04', 'tesst', '1000000.00', 52, 84, NULL, 'u1', NULL),
(62, '2021-01-10', 'teststee', '650000.00', 53, NULL, 151, 'u1', NULL),
(72, '2021-01-17', 'dfgdfgfd', '10000000.00', 56, 81, NULL, 'u2', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thu_chi_chi_tiet`
--

CREATE TABLE `thu_chi_chi_tiet` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_thu_chi` int(10) UNSIGNED NOT NULL,
  `loai_doi_tuong` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `so_tien` decimal(11,2) NOT NULL DEFAULT 0.00,
  `so_tien_goc` decimal(11,2) DEFAULT NULL,
  `id_dat_ve` int(10) UNSIGNED DEFAULT NULL,
  `id_tour` int(10) UNSIGNED DEFAULT NULL,
  `id_tour_chi_tiet` int(10) UNSIGNED DEFAULT NULL,
  `id_mua_vao` int(10) UNSIGNED DEFAULT NULL,
  `id_ban_ra` int(10) UNSIGNED DEFAULT NULL,
  `id_visa` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `thu_chi_chi_tiet`
--

INSERT INTO `thu_chi_chi_tiet` (`id`, `id_thu_chi`, `loai_doi_tuong`, `so_tien`, `so_tien_goc`, `id_dat_ve`, `id_tour`, `id_tour_chi_tiet`, `id_mua_vao`, `id_ban_ra`, `id_visa`) VALUES
(9, 1, 'BR', '2475000.00', NULL, NULL, NULL, NULL, NULL, 2, NULL),
(10, 3, 'ĐV', '1250000.00', NULL, 4, NULL, NULL, NULL, NULL, NULL),
(11, 2, 'TCT', '500000.00', NULL, NULL, NULL, 1, NULL, NULL, NULL),
(15, 42, 'ĐV', '100000.00', NULL, 2, NULL, NULL, NULL, NULL, NULL),
(26, 59, 'ĐV', '350000.00', NULL, 419, NULL, NULL, NULL, NULL, NULL),
(27, 59, 'ĐV', '350000.00', NULL, 421, NULL, NULL, NULL, NULL, NULL),
(28, 60, 'ĐV', '350000.00', NULL, 420, NULL, NULL, NULL, NULL, NULL),
(29, 62, 'ĐV', '650000.00', NULL, 456, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tour`
--

CREATE TABLE `tour` (
  `id` int(10) UNSIGNED NOT NULL,
  `phan_loai` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ma_tour` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_tour` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngay_thang` date NOT NULL,
  `bat_dau` date DEFAULT NULL,
  `ket_thuc` date DEFAULT NULL,
  `gia_ban` decimal(11,2) NOT NULL,
  `so_luong` int(11) NOT NULL DEFAULT 1,
  `id_khach_hang` int(10) UNSIGNED DEFAULT NULL,
  `ngay_thanh_toan` date DEFAULT NULL,
  `hoan_thanh` tinyint(1) NOT NULL DEFAULT 0,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tong_tien_ban` decimal(11,2) GENERATED ALWAYS AS (`so_luong` * `gia_ban`) VIRTUAL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tour`
--

INSERT INTO `tour` (`id`, `phan_loai`, `ma_tour`, `ten_tour`, `ngay_thang`, `bat_dau`, `ket_thuc`, `gia_ban`, `so_luong`, `id_khach_hang`, `ngay_thanh_toan`, `hoan_thanh`, `ghi_chu`, `username`) VALUES
(1, 'Tour quốc nội', 'T4323', 'Tour HN - SG', '2020-04-08', '2020-04-19', '2020-04-21', '9540000.00', 4, 147, NULL, 0, 'teste', 'nvn'),
(2, 'Tour Hà Nội', 'T35', 'Tour HAN - HPH', '2020-04-07', '2020-04-05', '2020-04-07', '1350000.00', 4, 148, NULL, 0, NULL, 'nvn'),
(3, 'Tour quốc nội', 'TO123', 'Tour test', '2021-01-14', '2021-01-23', '2021-01-24', '2150000.00', 1, 150, NULL, 0, NULL, 'u1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tour_chi_tiet`
--

CREATE TABLE `tour_chi_tiet` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_tour` int(10) UNSIGNED NOT NULL,
  `id_hang_hoa` int(10) UNSIGNED NOT NULL,
  `ngay_thang` date NOT NULL,
  `bat_dau` date DEFAULT NULL,
  `ket_thuc` date DEFAULT NULL,
  `don_gia` decimal(11,2) NOT NULL DEFAULT 0.00,
  `so_luong` int(11) NOT NULL DEFAULT 1,
  `ngay_thanh_toan` date DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thanh_tien` decimal(11,2) GENERATED ALWAYS AS (`so_luong` * `don_gia`) VIRTUAL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tour_chi_tiet`
--

INSERT INTO `tour_chi_tiet` (`id`, `id_tour`, `id_hang_hoa`, `ngay_thang`, `bat_dau`, `ket_thuc`, `don_gia`, `so_luong`, `ngay_thanh_toan`, `ghi_chu`) VALUES
(1, 1, 4, '2020-04-09', '2020-04-19', '2020-04-19', '1650000.00', 2, NULL, 'testesse'),
(2, 1, 1, '2020-04-09', '2020-04-19', '2020-04-21', '1200000.00', 1, NULL, 'dfsd sdf sdfsd fsd'),
(3, 3, 6, '2021-01-14', '2021-01-23', '2021-01-24', '250000.00', 1, NULL, NULL),
(4, 3, 4, '2021-01-14', '2021-01-23', '2021-01-24', '1650000.00', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ho_ten` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sdt` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dia_chi` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ngay_het_han` date DEFAULT NULL,
  `actived` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `phan_quyen` int(11) NOT NULL DEFAULT 0,
  `id_nguoi_tao` int(10) UNSIGNED DEFAULT NULL,
  `tour_visa` tinyint(1) NOT NULL DEFAULT 0,
  `ban_hang` tinyint(1) NOT NULL DEFAULT 0,
  `ct_ten` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ct_mst` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ct_sdt` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ct_fax` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ct_email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ct_dia_chi` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dai_ly` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `so_ngay_dang_nhap` int(11) NOT NULL DEFAULT 0,
  `ngay_dang_nhap` date DEFAULT NULL,
  `khong_gioi_han_dang_nhap` tinyint(1) DEFAULT 0,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thong_bao` tinyint(1) NOT NULL DEFAULT 1,
  `user_zone` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `so_ket_qua` int(11) NOT NULL DEFAULT 10,
  `extension` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `ho_ten`, `sdt`, `dia_chi`, `ngay_het_han`, `actived`, `created_at`, `updated_at`, `phan_quyen`, `id_nguoi_tao`, `tour_visa`, `ban_hang`, `ct_ten`, `ct_mst`, `ct_sdt`, `ct_fax`, `ct_email`, `ct_dia_chi`, `dai_ly`, `so_ngay_dang_nhap`, `ngay_dang_nhap`, `khong_gioi_han_dang_nhap`, `email`, `thong_bao`, `user_zone`, `so_ket_qua`, `extension`) VALUES
(1, 'nvn', '$2y$10$JYzf8mgTQUBtnCrbbFWdD.N9DNUhgUUV0yO/x6614Js0hzWxs8Hsa', 'Ngô Văn Nhận', '+84888726113', 'Số 11, ngõ 28 đường Nguyễn Danh Đới', NULL, 1, '2020-04-05 08:16:28', '2021-02-22 14:34:37', 9, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, 'ABC', 8, '2021-02-22', 0, 'nhanc500@gmail.com', 1, '[\"nvn\"]', 10, 0),
(2, 'u1', '$2y$10$ixMw3a.s8xIpWRr3EwOR7.EjHC6P/FaL6SbyKfFf4814vJ.qgZkr6', 'User 1', '234235234', 'Hà Tây 1', '2020-07-31', 1, '2020-04-06 15:19:34', '2021-04-19 14:57:27', 2, 1, 1, 1, 'CÔNG TY TNHH TM & DV DU LỊCH THANH TRANG', '0106919636', '01242345234', '45646345457', 'rewt@gmail.com', 'Xóm Chàng Trũng, Xã Dương Liễu, Huyện Hoài Đức, Thành Phố Hà Nội', 'ABCD', 61, '2021-04-19', 0, 'nhanc500@gmail.com', 1, '[\"u2\",\"u3\",\"u1\"]', 10, 1),
(21, 'u2', '$2y$10$ok/I/5X1COWWVIq4eINV8eY.GPe22L466bumtDZ0SDNvwxOqKk2ge', 'User 2', NULL, NULL, NULL, 1, '2020-12-23 13:56:55', '2021-01-18 04:05:11', 1, 2, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, 'User 2', 84, '2021-01-18', 0, NULL, 1, '[\"u2\",\"u3\",\"u1\"]', 10, 0),
(22, 'u3', '$2y$10$5WUR4neDPCZNnpUN4oQG5O02bheHd9gmSHNlDHIzkp514nGW0E2xS', 'User 3', NULL, NULL, NULL, 1, '2020-12-23 13:59:01', '2021-01-13 15:36:52', 0, 2, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, 'ABC', 94, '2021-01-13', 0, NULL, 1, '[\"u3\"]', 10, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `visa`
--

CREATE TABLE `visa` (
  `id` int(10) UNSIGNED NOT NULL,
  `ngay_thang` date NOT NULL,
  `phan_loai` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ma_visa` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quoc_gia` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ngay_mua` date DEFAULT NULL,
  `gia_mua` decimal(11,2) NOT NULL DEFAULT 0.00,
  `ngay_tra_khach` date DEFAULT NULL,
  `gia_ban` decimal(11,2) NOT NULL DEFAULT 0.00,
  `id_nha_cung_cap` int(10) UNSIGNED DEFAULT NULL,
  `id_khach_hang` int(10) UNSIGNED DEFAULT NULL,
  `ngay_thanh_toan` date DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lai` decimal(11,2) GENERATED ALWAYS AS (`gia_ban` - `gia_mua`) VIRTUAL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `visa`
--

INSERT INTO `visa` (`id`, `ngay_thang`, `phan_loai`, `ma_visa`, `quoc_gia`, `ngay_mua`, `gia_mua`, `ngay_tra_khach`, `gia_ban`, `id_nha_cung_cap`, `id_khach_hang`, `ngay_thanh_toan`, `ghi_chu`, `username`) VALUES
(1, '2020-04-10', 'Châu Á', '23423-2342423-57658-453', 'Trung Quốc', '2020-04-13', '2500000.00', '2020-04-14', '2800000.00', 81, 148, NULL, 'tetse setste tết', 'nvn'),
(2, '2021-01-14', 'Châu Á', '2335352378345634', 'Trung Quốc', '2021-01-14', '990000.00', '2021-01-16', '1200000.00', 63, 150, NULL, NULL, 'u1');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `ban_ra`
--
ALTER TABLE `ban_ra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ban_ra_id_khach_hang_foreign` (`id_khach_hang`),
  ADD KEY `ban_ra_id_tai_khoan_tra_hoan_doi_foreign` (`id_tai_khoan_tra_hoan_doi`),
  ADD KEY `ban_ra_id_hang_hoa_foreign` (`id_hang_hoa`);

--
-- Chỉ mục cho bảng `dat_ve`
--
ALTER TABLE `dat_ve`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dat_ve_id_khach_hang_foreign` (`id_khach_hang`),
  ADD KEY `dat_ve_id_tai_khoan_mua_foreign` (`id_tai_khoan_mua`),
  ADD KEY `dat_ve_id_phi_hanh_ly_foreign` (`id_phi_hanh_ly`);

--
-- Chỉ mục cho bảng `hang_hoa`
--
ALTER TABLE `hang_hoa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hang_hoa_id_tai_khoan_foreign` (`id_tai_khoan`);

--
-- Chỉ mục cho bảng `khach_hang`
--
ALTER TABLE `khach_hang`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `mua_vao`
--
ALTER TABLE `mua_vao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mua_vao_id_hang_hoa_foreign` (`id_hang_hoa`);

--
-- Chỉ mục cho bảng `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `phi_hanh_ly`
--
ALTER TABLE `phi_hanh_ly`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `san_bay`
--
ALTER TABLE `san_bay`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tai_khoan`
--
ALTER TABLE `tai_khoan`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `thue_phi`
--
ALTER TABLE `thue_phi`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `thu_chi`
--
ALTER TABLE `thu_chi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `thu_chi_id_khach_hang_foreign` (`id_khach_hang`),
  ADD KEY `thu_chi_id_tai_khoan_di_foreign` (`id_tai_khoan_di`),
  ADD KEY `thu_chi_id_tai_khoan_den_foreign` (`id_tai_khoan_den`);

--
-- Chỉ mục cho bảng `thu_chi_chi_tiet`
--
ALTER TABLE `thu_chi_chi_tiet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `thu_chi_chi_tiet_id_thu_chi_foreign` (`id_thu_chi`),
  ADD KEY `thu_chi_chi_tiet_id_dat_ve_foreign` (`id_dat_ve`),
  ADD KEY `thu_chi_chi_tiet_id_tour_foreign` (`id_tour`),
  ADD KEY `thu_chi_chi_tiet_id_tour_chi_tiet_foreign` (`id_tour_chi_tiet`),
  ADD KEY `thu_chi_chi_tiet_id_mua_vao_foreign` (`id_mua_vao`),
  ADD KEY `thu_chi_chi_tiet_id_ban_ra_foreign` (`id_ban_ra`),
  ADD KEY `thu_chi_chi_tiet_id_visa_foreign` (`id_visa`);

--
-- Chỉ mục cho bảng `tour`
--
ALTER TABLE `tour`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tour_id_khach_hang_foreign` (`id_khach_hang`);

--
-- Chỉ mục cho bảng `tour_chi_tiet`
--
ALTER TABLE `tour_chi_tiet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tour_chi_tiet_id_hang_hoa_foreign` (`id_hang_hoa`),
  ADD KEY `tour_chi_tiet_id_tour_foreign` (`id_tour`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- Chỉ mục cho bảng `visa`
--
ALTER TABLE `visa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `visa_id_khach_hang_foreign` (`id_khach_hang`),
  ADD KEY `visa_id_nha_cung_cap_foreign` (`id_nha_cung_cap`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `ban_ra`
--
ALTER TABLE `ban_ra`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `dat_ve`
--
ALTER TABLE `dat_ve`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=502;

--
-- AUTO_INCREMENT cho bảng `hang_hoa`
--
ALTER TABLE `hang_hoa`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `khach_hang`
--
ALTER TABLE `khach_hang`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT cho bảng `mua_vao`
--
ALTER TABLE `mua_vao`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `phi_hanh_ly`
--
ALTER TABLE `phi_hanh_ly`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `san_bay`
--
ALTER TABLE `san_bay`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT cho bảng `tai_khoan`
--
ALTER TABLE `tai_khoan`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT cho bảng `thue_phi`
--
ALTER TABLE `thue_phi`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `thu_chi`
--
ALTER TABLE `thu_chi`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT cho bảng `thu_chi_chi_tiet`
--
ALTER TABLE `thu_chi_chi_tiet`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `tour`
--
ALTER TABLE `tour`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `tour_chi_tiet`
--
ALTER TABLE `tour_chi_tiet`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `visa`
--
ALTER TABLE `visa`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `ban_ra`
--
ALTER TABLE `ban_ra`
  ADD CONSTRAINT `ban_ra_id_hang_hoa_foreign` FOREIGN KEY (`id_hang_hoa`) REFERENCES `hang_hoa` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ban_ra_id_khach_hang_foreign` FOREIGN KEY (`id_khach_hang`) REFERENCES `khach_hang` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `ban_ra_id_tai_khoan_tra_hoan_doi_foreign` FOREIGN KEY (`id_tai_khoan_tra_hoan_doi`) REFERENCES `tai_khoan` (`id`);

--
-- Các ràng buộc cho bảng `dat_ve`
--
ALTER TABLE `dat_ve`
  ADD CONSTRAINT `dat_ve_id_khach_hang_foreign` FOREIGN KEY (`id_khach_hang`) REFERENCES `khach_hang` (`id`),
  ADD CONSTRAINT `dat_ve_id_phi_hanh_ly_foreign` FOREIGN KEY (`id_phi_hanh_ly`) REFERENCES `phi_hanh_ly` (`id`),
  ADD CONSTRAINT `dat_ve_id_tai_khoan_mua_foreign` FOREIGN KEY (`id_tai_khoan_mua`) REFERENCES `tai_khoan` (`id`);

--
-- Các ràng buộc cho bảng `hang_hoa`
--
ALTER TABLE `hang_hoa`
  ADD CONSTRAINT `hang_hoa_id_tai_khoan_foreign` FOREIGN KEY (`id_tai_khoan`) REFERENCES `tai_khoan` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `mua_vao`
--
ALTER TABLE `mua_vao`
  ADD CONSTRAINT `mua_vao_id_hang_hoa_foreign` FOREIGN KEY (`id_hang_hoa`) REFERENCES `hang_hoa` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `thu_chi`
--
ALTER TABLE `thu_chi`
  ADD CONSTRAINT `thu_chi_id_khach_hang_foreign` FOREIGN KEY (`id_khach_hang`) REFERENCES `khach_hang` (`id`),
  ADD CONSTRAINT `thu_chi_id_tai_khoan_den_foreign` FOREIGN KEY (`id_tai_khoan_den`) REFERENCES `tai_khoan` (`id`),
  ADD CONSTRAINT `thu_chi_id_tai_khoan_di_foreign` FOREIGN KEY (`id_tai_khoan_di`) REFERENCES `tai_khoan` (`id`);

--
-- Các ràng buộc cho bảng `thu_chi_chi_tiet`
--
ALTER TABLE `thu_chi_chi_tiet`
  ADD CONSTRAINT `thu_chi_chi_tiet_id_ban_ra_foreign` FOREIGN KEY (`id_ban_ra`) REFERENCES `ban_ra` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `thu_chi_chi_tiet_id_dat_ve_foreign` FOREIGN KEY (`id_dat_ve`) REFERENCES `dat_ve` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `thu_chi_chi_tiet_id_mua_vao_foreign` FOREIGN KEY (`id_mua_vao`) REFERENCES `mua_vao` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `thu_chi_chi_tiet_id_thu_chi_foreign` FOREIGN KEY (`id_thu_chi`) REFERENCES `thu_chi` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `thu_chi_chi_tiet_id_tour_chi_tiet_foreign` FOREIGN KEY (`id_tour_chi_tiet`) REFERENCES `tour_chi_tiet` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `thu_chi_chi_tiet_id_tour_foreign` FOREIGN KEY (`id_tour`) REFERENCES `tour` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `thu_chi_chi_tiet_id_visa_foreign` FOREIGN KEY (`id_visa`) REFERENCES `visa` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tour`
--
ALTER TABLE `tour`
  ADD CONSTRAINT `tour_id_khach_hang_foreign` FOREIGN KEY (`id_khach_hang`) REFERENCES `khach_hang` (`id`);

--
-- Các ràng buộc cho bảng `tour_chi_tiet`
--
ALTER TABLE `tour_chi_tiet`
  ADD CONSTRAINT `tour_chi_tiet_id_hang_hoa_foreign` FOREIGN KEY (`id_hang_hoa`) REFERENCES `hang_hoa` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tour_chi_tiet_id_tour_foreign` FOREIGN KEY (`id_tour`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `visa`
--
ALTER TABLE `visa`
  ADD CONSTRAINT `visa_id_khach_hang_foreign` FOREIGN KEY (`id_khach_hang`) REFERENCES `khach_hang` (`id`),
  ADD CONSTRAINT `visa_id_nha_cung_cap_foreign` FOREIGN KEY (`id_nha_cung_cap`) REFERENCES `tai_khoan` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
