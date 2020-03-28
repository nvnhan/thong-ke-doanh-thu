-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2020 at 03:30 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_tkdt`
--

-- --------------------------------------------------------

--
-- Table structure for table `ban_ra`
--

CREATE TABLE `ban_ra` (
  `id` int(10) UNSIGNED NOT NULL,
  `ngay_thang` date NOT NULL,
  `id_hang_hoa` int(10) UNSIGNED NOT NULL,
  `so_luong` int(11) NOT NULL DEFAULT '1',
  `don_gia_mua` decimal(11,2) NOT NULL,
  `don_gia_ban` decimal(11,2) NOT NULL,
  `id_khach_hang` int(10) UNSIGNED DEFAULT NULL,
  `ngay_thanh_toan` date DEFAULT NULL,
  `id_tai_khoan` int(10) UNSIGNED DEFAULT NULL,
  `ngay_hoan_doi` date DEFAULT NULL,
  `ngay_thanh_toan_hoan_doi` date DEFAULT NULL,
  `id_tai_khoan_tra_hoan_doi` int(10) UNSIGNED DEFAULT NULL,
  `ngay_hoan_doi_xong` date DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dat_ve`
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
  `gia_net` decimal(11,2) NOT NULL DEFAULT '0.00',
  `phi_san_bay` decimal(11,2) DEFAULT NULL,
  `phu_phi_san_bay` decimal(11,2) DEFAULT NULL,
  `hanh_ly` decimal(11,2) DEFAULT NULL,
  `id_phi_hanh_ly` int(10) UNSIGNED DEFAULT NULL,
  `vat` decimal(11,2) DEFAULT NULL,
  `phu_phi` decimal(11,2) DEFAULT NULL,
  `hoa_hong` decimal(11,2) DEFAULT NULL,
  `tong_tien` decimal(11,2) NOT NULL DEFAULT '0.00',
  `phi_dich_vu` decimal(11,2) DEFAULT NULL,
  `phi_cong_tac_vien` decimal(11,2) DEFAULT NULL,
  `tong_tien_thu_khach` decimal(11,2) NOT NULL DEFAULT '0.00',
  `ngay_thanh_toan` date DEFAULT NULL,
  `id_tai_khoan` int(10) UNSIGNED DEFAULT NULL,
  `id_tai_khoan_mua` int(10) UNSIGNED DEFAULT NULL,
  `id_khach_hang` int(10) UNSIGNED DEFAULT NULL,
  `canh_bao_xuat_ve` datetime DEFAULT NULL,
  `chua_xuat_ve` tinyint(1) NOT NULL DEFAULT '0',
  `nhac_lich_bay` tinyint(1) NOT NULL DEFAULT '0',
  `ngay_nhac_lich` datetime DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hang_hoa`
--

CREATE TABLE `hang_hoa` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_tai_khoan` int(10) UNSIGNED NOT NULL,
  `ma_hang` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_hang` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phan_loai` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `don_vi` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `don_gia` decimal(11,2) NOT NULL DEFAULT '0.00',
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `khach_hang`
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
  `so_du_ky_truoc` decimal(11,2) NOT NULL DEFAULT '0.00',
  `ngay_tao` date DEFAULT NULL,
  `ngay_nhac` date DEFAULT NULL,
  `phi_vn` decimal(11,2) NOT NULL DEFAULT '0.00',
  `phi_vj` decimal(11,2) NOT NULL DEFAULT '0.00',
  `phi_jets` decimal(11,2) NOT NULL DEFAULT '0.00',
  `phi_bb` decimal(11,2) NOT NULL DEFAULT '0.00',
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `khach_hang`
--

INSERT INTO `khach_hang` (`id`, `ma_khach_hang`, `ho_ten`, `sdt`, `dia_chi`, `email`, `mst`, `ma_dai_ly`, `phan_loai`, `so_du_ky_truoc`, `ngay_tao`, `ngay_nhac`, `phi_vn`, `phi_vj`, `phi_jets`, `phi_bb`, `ghi_chu`) VALUES
(147, '2', '2', NULL, NULL, NULL, NULL, NULL, '2', '11500000.00', '2018-12-08', NULL, '0.00', '0.00', '0.00', '0.00', NULL),
(148, '0.2 TTKTĐB', 'TTKTĐB', NULL, NULL, NULL, NULL, NULL, 'công ty', '0.00', '2018-12-09', NULL, '0.00', '0.00', '0.00', '0.00', NULL),
(150, 'tessst', 'tesssst', NULL, NULL, NULL, NULL, NULL, 'Khách lẻ', '0.00', '2018-12-27', NULL, '0.00', '0.00', '0.00', '0.00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
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
(21, '2020_03_28_134417_alter_add_foreign_keys', 1);

-- --------------------------------------------------------

--
-- Table structure for table `mua_vao`
--

CREATE TABLE `mua_vao` (
  `id` int(10) UNSIGNED NOT NULL,
  `ngay_thang` date NOT NULL,
  `id_hang_hoa` int(10) UNSIGNED NOT NULL,
  `so_luong` int(11) NOT NULL DEFAULT '1',
  `don_gia` decimal(11,2) NOT NULL DEFAULT '0.00',
  `ngay_thanh_toan` date DEFAULT NULL,
  `id_tai_khoan` int(10) UNSIGNED DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
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
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'OJTesOLVRuYcFAjHXnKzSKjfVLSFXZip0hIn1MCV', 'http://localhost', 1, 0, 0, '2020-03-28 07:03:00', '2020-03-28 07:03:00'),
(2, NULL, 'Laravel Password Grant Client', 'Uvv5bvYvedMbVinB3JteEsB7ayrUGYPwlepMQyEN', 'http://localhost', 0, 1, 0, '2020-03-28 07:03:01', '2020-03-28 07:03:01');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2020-03-28 07:03:01', '2020-03-28 07:03:01');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `phi_hanh_ly`
--

CREATE TABLE `phi_hanh_ly` (
  `id` int(10) UNSIGNED NOT NULL,
  `hanh_ly` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phi` decimal(11,2) NOT NULL DEFAULT '0.00',
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hang_bay` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `phi_hanh_ly`
--

INSERT INTO `phi_hanh_ly` (`id`, `hanh_ly`, `phi`, `ghi_chu`, `hang_bay`) VALUES
(1, '5kg', '50000.00', NULL, NULL),
(2, '10kg', '80000.00', NULL, NULL),
(3, '15kg', '100000.00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `san_bay`
--

CREATE TABLE `san_bay` (
  `ma_san_bay` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_san_bay` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phan_loai` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `loai_a` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `san_bay`
--

INSERT INTO `san_bay` (`ma_san_bay`, `ten_san_bay`, `phan_loai`, `loai_a`) VALUES
('AMS', 'Amsterdam  (AMS)', 'Châu Âu', NULL),
('ATL', 'Atlanta Hartsfield  (ATL)', 'Hoa Kỳ', NULL),
('AUS', 'Austin  (AUS)', 'Hoa Kỳ', NULL),
('BCN', 'Barcelona, Spain  (BCN)', 'Châu Âu', NULL),
('BJS', 'Beijing  (BJS)', 'Đông Bắc Á', NULL),
('BKK', 'Bangkok  (BKK)', 'Đông Nam Á', NULL),
('BMV', 'Ban Me Thuot  (BMV)', 'Việt Nam', 1),
('BOS', 'Boston, Logan  (BOS)', 'Hoa Kỳ', NULL),
('CAH', 'Ca Mau  (CAH)', 'Việt Nam', NULL),
('CAN', 'Guangzhou  (CAN)', 'Đông Bắc Á', NULL),
('CGK', 'Jakarta  (CGK)', 'Đông Nam Á', NULL),
('CGO', 'Zhengzhou, China  (CGO)', 'Đông Bắc Á', NULL),
('CHI', 'Chicago, IL  (CHI)', 'Hoa Kỳ', NULL),
('CPH', 'Copenhagen, Denmark  (CPH)', 'Châu Âu', NULL),
('CTU', 'Chengdu  (CTU)', 'Đông Bắc Á', NULL),
('CXR', 'Nha Trang  (CXR)', 'Việt Nam', 1),
('CZX', 'Changzhou, China  (CZX)', 'Đông Bắc Á', NULL),
('DAD', 'Da Nang  (DAD)', 'Việt Nam', 1),
('DEN', 'Denver  (DEN)', 'Hoa Kỳ', NULL),
('DFW', 'Dallas/Fort Worth  (DFW)', 'Hoa Kỳ', NULL),
('DIN', 'Dien Bien  (DIN)', 'Việt Nam', NULL),
('DLI', 'Da Lat  (DLI)', 'Việt Nam', 1),
('ETZ', 'Lorraine TGV, France  (ETZ)', 'Châu Âu', NULL),
('FRA', 'Frankfurt  (FRA)', 'Châu Âu', NULL),
('FUK', 'Fukuoka  (FUK)', 'Đông Bắc Á', NULL),
('GVA', 'Geneva, Switzerland  (GVA)', 'Châu Âu', NULL),
('HAN', 'Ha Noi  (HAN)', 'Việt Nam', 1),
('HET', 'Hohhot, China  (HET)', 'Đông Bắc Á', NULL),
('HGH', 'Hangzhou, China  (HGH)', 'Đông Bắc Á', NULL),
('HKG', 'Hong Kong  (HKG)', 'Đông Bắc Á', NULL),
('HND', 'Haneda, Tokyo  (HND)', 'Đông Bắc Á', NULL),
('HNL', 'Honolulu  (HNL)', 'Hoa Kỳ', NULL),
('HOU', 'Houston  (HOU)', 'Hoa Kỳ', NULL),
('HPH', 'Hai Phong  (HPH)', 'Việt Nam', 1),
('HUI', 'Hue  (HUI)', 'Việt Nam', 1),
('ICN', 'Seoul  (ICN)', 'Đông Bắc Á', NULL),
('ITM', 'Osaka  (ITM)', 'Đông Bắc Á', NULL),
('JFK', 'New York, USA  (JFK)', 'Hoa Kỳ', NULL),
('KHH', 'Kaohsiung  (KHH)', 'Đông Bắc Á', NULL),
('KMG', 'Kunming, China  (KMG)', 'Đông Bắc Á', NULL),
('KUL', 'Kuala Lumpur  (KUL)', 'Đông Nam Á', NULL),
('LAX', 'Los Angeles  (LAX)', 'Hoa Kỳ', NULL),
('LON', 'London  (LON)', 'Châu Âu', NULL),
('LPQ', 'Luang Prabang  (LPQ)', 'Đông Dương', NULL),
('LYS', 'Lyon, France  (LYS)', 'Châu Âu', NULL),
('MEL', 'Melbourne  (MEL)', 'Châu Úc', NULL),
('MIA', 'Miami  (MIA)', 'Hoa Kỳ', NULL),
('MNL', 'Manila  (MNL)', 'Đông Nam Á', NULL),
('MRS', 'Marseille, France  (MRS)', 'Châu Âu', NULL),
('MSP', 'Minneapolis/St.Paul  (MSP)', 'Hoa Kỳ', NULL),
('NCE', 'Nice, France  (NCE)', 'Châu Âu', NULL),
('NGB', 'Ninhbo, China  (NGB)', 'Đông Bắc Á', NULL),
('NGO', 'Nagoya  (NGO)', 'Đông Bắc Á', NULL),
('NKG', 'Nanjing - Lokou, China  (NKG)', 'Đông Bắc Á', NULL),
('NNG', 'Nanning - Wuxu, China  (NNG)', 'Đông Bắc Á', NULL),
('NRT', 'Narita, Tokyo  (NRT)', 'Đông Bắc Á', NULL),
('OSA', 'Osaka  (OSA)', 'Đông Bắc Á', NULL),
('PAR', 'Paris  (PAR)', 'Châu Âu', NULL),
('PDX', 'Portland  (PDX)', 'Hoa Kỳ', NULL),
('PHL', 'Philadelphia  (PHL)', 'Hoa Kỳ', NULL),
('PNH', 'Phnom Penh  (PNH)', 'Đông Dương', NULL),
('PQC', 'Phu Quoc  (PQC)', 'Việt Nam', 1),
('PRG', 'Praque  (PRG)', 'Châu Âu', NULL),
('PUS', 'Busan  (PUS)', 'Đông Bắc Á', NULL),
('PXU', 'Pleiku  (PXU)', 'Việt Nam', NULL),
('QJZ', 'Nantes, France  (QJZ)', 'Châu Âu', NULL),
('QXB', 'Aix en Provence TGV, France  (QXB)', 'Châu Âu', NULL),
('QXG', 'Angers St-Laud, France  (QXG)', 'Châu Âu', NULL),
('QYG', 'Raiway, Germany  (QYG)', 'Châu Âu', NULL),
('REP', 'Siem Riep  (REP)', 'Đông Dương', NULL),
('RGN', 'Yangon  (RGN)', 'Đông Nam Á', NULL),
('RMQ', 'Đài Trung  (RMQ)', 'Đông Bắc Á', NULL),
('ROM', 'Rome  (ROM)', 'Châu Âu', NULL),
('SEA', 'Seattle, Tacoma  (SEA)', 'Hoa Kỳ', NULL),
('SFO', 'San Francisco  (SFO)', 'Hoa Kỳ', NULL),
('SGN', 'Ho Chi Minh City  (SGN)', 'Việt Nam', 1),
('SHA', 'Shanghai  (SHA)', 'Đông Bắc Á', NULL),
('SIN', 'Singapore  (SIN)', 'Đông Nam Á', NULL),
('STL', 'St Louis, Lambert  (STL)', 'Hoa Kỳ', NULL),
('SYD', 'Sydney  (SYD)', 'Châu Úc', NULL),
('TBB', 'Tuy Hoa  (TBB)', 'Việt Nam', NULL),
('THD', 'Thanh Hoa  (THD)', 'Việt Nam', NULL),
('TLS', 'Toulouse, France  (TLS)', 'Châu Âu', NULL),
('TPE', 'Taipei  (TPE)', 'Đông Bắc Á', NULL),
('TSN', 'Tianjin, China  (TSN)', 'Đông Bắc Á', NULL),
('TTN', 'Đài Nam  (TTN)', 'Đông Bắc Á', NULL),
('TYO', 'Tokyo  (TYO)', 'Đông Bắc Á', NULL),
('UIH', 'Quy Nhon  (UIH)', 'Việt Nam', NULL),
('VCA', 'Can Tho (VCA)', 'Việt Nam', 1),
('VCL', 'Chu Lai  (VCL)', 'Việt Nam', NULL),
('VCS', 'Con Dao  (VCS)', 'Việt Nam', 0),
('VDH', 'Dong Hoi  (VDH)', 'Việt Nam', NULL),
('VIE', 'Vienne, Austria  (VIE)', 'Châu Âu', NULL),
('VII', 'Vinh  (VII)', 'Việt Nam', 1),
('VKG', 'Rach Gia  (VKG)', 'Việt Nam', NULL),
('VTE', 'Vientiane  (VTE)', 'Đông Dương', NULL),
('WAS', 'Washington  (WAS)', 'Hoa Kỳ', NULL),
('XDB', 'Lille - Europe, France  (XDB)', 'Châu Âu', NULL),
('XHK', 'Valence RR, France  (XHK)', 'Châu Âu', NULL),
('XIY', 'Xian, China  (XIY)', 'Đông Bắc Á', NULL),
('XIZ', 'Champagne TGV, France  (XIZ)', 'Châu Âu', NULL),
('XOP', 'Poitiers, France  (XOP)', 'Châu Âu', NULL),
('XPJ', 'Montpellier, France  (XPJ)', 'Châu Âu', NULL),
('XRF', 'Marseille St Charles, France  (XRF)', 'Châu Âu', NULL),
('XSH', 'St-Pierre des Corps, France  (XSH)', 'Châu Âu', NULL),
('XWG', 'Strasbourg, France  (XWG)', 'Châu Âu', NULL),
('XYD', 'Lyon Part - Dieu, France  (XYD)', 'Châu Âu', NULL),
('XZN', 'Avignon TGV, France  (XZN)', 'Châu Âu', NULL),
('XZV', 'Toulon, France  (XZV)', 'Châu Âu', NULL),
('YVR', 'Vancouver, Canada  (YVR)', 'Hoa Kỳ', NULL),
('ZFJ', 'Rennes, France  (ZFJ)', 'Châu Âu', NULL),
('ZFQ', 'Bordeaux St Jean, France  (ZFQ)', 'Châu Âu', NULL),
('ZLN', 'Le Mans, France  (ZLN)', 'Châu Âu', NULL),
('ZRH', 'Zurich, Switzerland  (ZRH)', 'Châu Âu', NULL),
('ZYN', 'Nîmes, France  (ZYN)', 'Châu Âu', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tai_khoan`
--

CREATE TABLE `tai_khoan` (
  `id` int(10) UNSIGNED NOT NULL,
  `ky_hieu` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mo_ta` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `loai` int(11) NOT NULL DEFAULT '0',
  `phan_loai` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phi_vn` decimal(11,2) NOT NULL DEFAULT '0.00',
  `phi_vj` decimal(11,2) NOT NULL DEFAULT '0.00',
  `phi_jets` decimal(11,2) NOT NULL DEFAULT '0.00',
  `phi_bb` decimal(11,2) NOT NULL DEFAULT '0.00',
  `mst` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dia_chi` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sdt` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `so_du_ky_truoc` decimal(11,2) NOT NULL DEFAULT '0.00',
  `ngay_tao` date DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tai_khoan`
--

INSERT INTO `tai_khoan` (`id`, `ky_hieu`, `mo_ta`, `loai`, `phan_loai`, `phi_vn`, `phi_vj`, `phi_jets`, `phi_bb`, `mst`, `dia_chi`, `email`, `sdt`, `so_du_ky_truoc`, `ngay_tao`, `ghi_chu`) VALUES
(15, 'NỢ VÉ', 'NỢ VÉ', -1, NULL, '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL),
(24, 'Dư', 'Dư', -1, NULL, '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL),
(50, '1.TM', 'AGRIBANK-THANH', 0, NULL, '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL),
(51, 'AGR', 'AGRIBANK-THANH', 0, NULL, '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL),
(52, 'TCB', 'TECKCOMBANK-THANH', 0, NULL, '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL),
(53, '4. A Minh', 'A Minh', 0, NULL, '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL),
(54, '5. TECK -CT', 'TECKCOMBANK-CT', 0, NULL, '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL),
(55, 'VCB', 'VIETCOMBANK', 0, NULL, '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', '2018-06-01', NULL),
(56, '7. VCB-CT', 'VIETCOMBANK-CT', 0, NULL, '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL),
(57, '8. SACOM', 'SACOMBANK', 0, NULL, '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL),
(58, 'BIDV', 'BIDV', 0, NULL, '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL),
(59, '10. VIETIN', 'VIETINBANK-THANH', 0, NULL, '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, NULL, '0.00', NULL, NULL),
(60, 'BAO GIA TRAN', 'BẢO GIA TRAN', 1, 'Vé máy bay', '6000.00', '6000.00', '6000.00', '6000.00', 'mstbao', 'sdtbao', 'mailbao', '', '0.00', NULL, NULL),
(61, 'NGOC MAI', 'NGỌC MAI', 1, 'Vé máy bay', '8000.00', '8000.00', '8000.00', '8000.00', NULL, NULL, NULL, '', '0.00', NULL, NULL),
(62, 'DUNG THANH', 'DŨNG THÀNH', 1, 'Vé máy bay', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, '', '0.00', NULL, NULL),
(63, 'KINH BAC', 'KINH BẮC', 1, 'Vé máy bay', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, '', '0.00', NULL, NULL),
(81, 'HOANG HA', 'Nhà xe Hoàng Hà', 1, 'Nhà xe', '0.00', '0.00', '0.00', '0.00', '123244', 'Hà Nội', NULL, '0795834858', '0.00', NULL, NULL),
(82, 'VUON TRAU', 'Nhà Hàng Vườn trầu', 1, 'Nhà hàng', '0.00', '0.00', '0.00', '0.00', NULL, NULL, NULL, '0986376194', '0.00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `thue_phi`
--

CREATE TABLE `thue_phi` (
  `id` int(10) UNSIGNED NOT NULL,
  `loai_phi` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `muc_phi` decimal(11,2) DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `thue_phi`
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
(11, 'Phí soi chiếu, an ninh nhóm B | Jets | Người lớn', '100000.00', NULL),
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
-- Table structure for table `thu_chi`
--

CREATE TABLE `thu_chi` (
  `id` int(10) UNSIGNED NOT NULL,
  `ngay_thang` date NOT NULL,
  `hang_muc` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `so_tien` decimal(11,2) NOT NULL DEFAULT '0.00',
  `id_tai_khoan_di` int(10) UNSIGNED DEFAULT NULL,
  `id_tai_khoan_den` int(10) UNSIGNED DEFAULT NULL,
  `id_khach_hang` int(10) UNSIGNED DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `thu_chi_chi_tiet`
--

CREATE TABLE `thu_chi_chi_tiet` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_thu_chi` int(10) UNSIGNED NOT NULL,
  `loai_doi_tuong` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `so_tien` decimal(11,2) NOT NULL DEFAULT '0.00',
  `so_tien_goc` decimal(11,2) DEFAULT NULL,
  `id_dat_ve` int(10) UNSIGNED DEFAULT NULL,
  `id_tour` int(10) UNSIGNED DEFAULT NULL,
  `id_tour_chi_tiet` int(10) UNSIGNED DEFAULT NULL,
  `id_mua_vao` int(10) UNSIGNED DEFAULT NULL,
  `id_ban_ra` int(10) UNSIGNED DEFAULT NULL,
  `id_visa` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tour`
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
  `so_luong` int(11) NOT NULL DEFAULT '1',
  `id_khach_hang` int(10) UNSIGNED DEFAULT NULL,
  `ngay_thanh_toan` date DEFAULT NULL,
  `id_tai_khoan` int(10) UNSIGNED DEFAULT NULL,
  `hoan_thanh` tinyint(1) NOT NULL DEFAULT '0',
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tour_chi_tiet`
--

CREATE TABLE `tour_chi_tiet` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_tour` int(10) UNSIGNED NOT NULL,
  `id_hang_hoa` int(10) UNSIGNED NOT NULL,
  `ngay_thang` date NOT NULL,
  `bat_dau` date DEFAULT NULL,
  `ket_thuc` date DEFAULT NULL,
  `don_gia` decimal(11,2) NOT NULL DEFAULT '0.00',
  `so_luong` int(11) NOT NULL DEFAULT '1',
  `id_tai_khoan` int(10) UNSIGNED DEFAULT NULL,
  `ngay_thanh_toan` date DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ho_ten` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sdt` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dia_chi` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `visa`
--

CREATE TABLE `visa` (
  `id` int(10) UNSIGNED NOT NULL,
  `ngay_thang` date NOT NULL,
  `phan_loai` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ma_visa` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quoc_gia` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ngay_mua` date DEFAULT NULL,
  `gia_mua` decimal(11,2) NOT NULL,
  `ngay_tra_khach` date DEFAULT NULL,
  `gia_ban` decimal(11,2) NOT NULL,
  `id_nha_cung_cap` int(10) UNSIGNED DEFAULT NULL,
  `id_khach_hang` int(10) UNSIGNED DEFAULT NULL,
  `id_tai_khoan` int(10) UNSIGNED DEFAULT NULL,
  `ngay_thanh_toan` date DEFAULT NULL,
  `ghi_chu` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ban_ra`
--
ALTER TABLE `ban_ra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ban_ra_id_hang_hoa_foreign` (`id_hang_hoa`),
  ADD KEY `ban_ra_id_khach_hang_foreign` (`id_khach_hang`),
  ADD KEY `ban_ra_id_tai_khoan_foreign` (`id_tai_khoan`),
  ADD KEY `ban_ra_id_tai_khoan_tra_hoan_doi_foreign` (`id_tai_khoan_tra_hoan_doi`);

--
-- Indexes for table `dat_ve`
--
ALTER TABLE `dat_ve`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dat_ve_id_khach_hang_foreign` (`id_khach_hang`),
  ADD KEY `dat_ve_id_tai_khoan_foreign` (`id_tai_khoan`),
  ADD KEY `dat_ve_id_tai_khoan_mua_foreign` (`id_tai_khoan_mua`);

--
-- Indexes for table `hang_hoa`
--
ALTER TABLE `hang_hoa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hang_hoa_id_tai_khoan_foreign` (`id_tai_khoan`);

--
-- Indexes for table `khach_hang`
--
ALTER TABLE `khach_hang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mua_vao`
--
ALTER TABLE `mua_vao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mua_vao_id_hang_hoa_foreign` (`id_hang_hoa`),
  ADD KEY `mua_vao_id_tai_khoan_foreign` (`id_tai_khoan`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phi_hanh_ly`
--
ALTER TABLE `phi_hanh_ly`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `san_bay`
--
ALTER TABLE `san_bay`
  ADD PRIMARY KEY (`ma_san_bay`);

--
-- Indexes for table `tai_khoan`
--
ALTER TABLE `tai_khoan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `thue_phi`
--
ALTER TABLE `thue_phi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `thu_chi`
--
ALTER TABLE `thu_chi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `thu_chi_id_khach_hang_foreign` (`id_khach_hang`),
  ADD KEY `thu_chi_id_tai_khoan_di_foreign` (`id_tai_khoan_di`),
  ADD KEY `thu_chi_id_tai_khoan_den_foreign` (`id_tai_khoan_den`);

--
-- Indexes for table `thu_chi_chi_tiet`
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
-- Indexes for table `tour`
--
ALTER TABLE `tour`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tour_id_khach_hang_foreign` (`id_khach_hang`),
  ADD KEY `tour_id_tai_khoan_foreign` (`id_tai_khoan`);

--
-- Indexes for table `tour_chi_tiet`
--
ALTER TABLE `tour_chi_tiet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tour_chi_tiet_id_hang_hoa_foreign` (`id_hang_hoa`),
  ADD KEY `tour_chi_tiet_id_tour_foreign` (`id_tour`),
  ADD KEY `tour_chi_tiet_id_tai_khoan_foreign` (`id_tai_khoan`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- Indexes for table `visa`
--
ALTER TABLE `visa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `visa_id_khach_hang_foreign` (`id_khach_hang`),
  ADD KEY `visa_id_tai_khoan_foreign` (`id_tai_khoan`),
  ADD KEY `visa_id_nha_cung_cap_foreign` (`id_nha_cung_cap`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ban_ra`
--
ALTER TABLE `ban_ra`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dat_ve`
--
ALTER TABLE `dat_ve`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hang_hoa`
--
ALTER TABLE `hang_hoa`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `khach_hang`
--
ALTER TABLE `khach_hang`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `mua_vao`
--
ALTER TABLE `mua_vao`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `phi_hanh_ly`
--
ALTER TABLE `phi_hanh_ly`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tai_khoan`
--
ALTER TABLE `tai_khoan`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `thue_phi`
--
ALTER TABLE `thue_phi`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `thu_chi`
--
ALTER TABLE `thu_chi`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `thu_chi_chi_tiet`
--
ALTER TABLE `thu_chi_chi_tiet`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tour`
--
ALTER TABLE `tour`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tour_chi_tiet`
--
ALTER TABLE `tour_chi_tiet`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `visa`
--
ALTER TABLE `visa`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ban_ra`
--
ALTER TABLE `ban_ra`
  ADD CONSTRAINT `ban_ra_id_hang_hoa_foreign` FOREIGN KEY (`id_hang_hoa`) REFERENCES `hang_hoa` (`id`),
  ADD CONSTRAINT `ban_ra_id_khach_hang_foreign` FOREIGN KEY (`id_khach_hang`) REFERENCES `khach_hang` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `ban_ra_id_tai_khoan_foreign` FOREIGN KEY (`id_tai_khoan`) REFERENCES `tai_khoan` (`id`),
  ADD CONSTRAINT `ban_ra_id_tai_khoan_tra_hoan_doi_foreign` FOREIGN KEY (`id_tai_khoan_tra_hoan_doi`) REFERENCES `tai_khoan` (`id`);

--
-- Constraints for table `dat_ve`
--
ALTER TABLE `dat_ve`
  ADD CONSTRAINT `dat_ve_id_khach_hang_foreign` FOREIGN KEY (`id_khach_hang`) REFERENCES `khach_hang` (`id`),
  ADD CONSTRAINT `dat_ve_id_tai_khoan_foreign` FOREIGN KEY (`id_tai_khoan`) REFERENCES `tai_khoan` (`id`),
  ADD CONSTRAINT `dat_ve_id_tai_khoan_mua_foreign` FOREIGN KEY (`id_tai_khoan_mua`) REFERENCES `tai_khoan` (`id`);

--
-- Constraints for table `hang_hoa`
--
ALTER TABLE `hang_hoa`
  ADD CONSTRAINT `hang_hoa_id_tai_khoan_foreign` FOREIGN KEY (`id_tai_khoan`) REFERENCES `tai_khoan` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `mua_vao`
--
ALTER TABLE `mua_vao`
  ADD CONSTRAINT `mua_vao_id_hang_hoa_foreign` FOREIGN KEY (`id_hang_hoa`) REFERENCES `hang_hoa` (`id`),
  ADD CONSTRAINT `mua_vao_id_tai_khoan_foreign` FOREIGN KEY (`id_tai_khoan`) REFERENCES `tai_khoan` (`id`);

--
-- Constraints for table `thu_chi`
--
ALTER TABLE `thu_chi`
  ADD CONSTRAINT `thu_chi_id_khach_hang_foreign` FOREIGN KEY (`id_khach_hang`) REFERENCES `khach_hang` (`id`),
  ADD CONSTRAINT `thu_chi_id_tai_khoan_den_foreign` FOREIGN KEY (`id_tai_khoan_den`) REFERENCES `tai_khoan` (`id`),
  ADD CONSTRAINT `thu_chi_id_tai_khoan_di_foreign` FOREIGN KEY (`id_tai_khoan_di`) REFERENCES `tai_khoan` (`id`);

--
-- Constraints for table `thu_chi_chi_tiet`
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
-- Constraints for table `tour`
--
ALTER TABLE `tour`
  ADD CONSTRAINT `tour_id_khach_hang_foreign` FOREIGN KEY (`id_khach_hang`) REFERENCES `khach_hang` (`id`),
  ADD CONSTRAINT `tour_id_tai_khoan_foreign` FOREIGN KEY (`id_tai_khoan`) REFERENCES `tai_khoan` (`id`);

--
-- Constraints for table `tour_chi_tiet`
--
ALTER TABLE `tour_chi_tiet`
  ADD CONSTRAINT `tour_chi_tiet_id_hang_hoa_foreign` FOREIGN KEY (`id_hang_hoa`) REFERENCES `hang_hoa` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tour_chi_tiet_id_tai_khoan_foreign` FOREIGN KEY (`id_tai_khoan`) REFERENCES `tai_khoan` (`id`),
  ADD CONSTRAINT `tour_chi_tiet_id_tour_foreign` FOREIGN KEY (`id_tour`) REFERENCES `tour` (`id`);

--
-- Constraints for table `visa`
--
ALTER TABLE `visa`
  ADD CONSTRAINT `visa_id_khach_hang_foreign` FOREIGN KEY (`id_khach_hang`) REFERENCES `khach_hang` (`id`),
  ADD CONSTRAINT `visa_id_nha_cung_cap_foreign` FOREIGN KEY (`id_nha_cung_cap`) REFERENCES `tai_khoan` (`id`),
  ADD CONSTRAINT `visa_id_tai_khoan_foreign` FOREIGN KEY (`id_tai_khoan`) REFERENCES `tai_khoan` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
