-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2023 a las 23:48:34
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rrhh_node`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `employee_name` varchar(20) NOT NULL,
  `employee_lastname` varchar(50) NOT NULL,
  `employee_phone` varchar(20) NOT NULL,
  `employee_mail` varchar(50) NOT NULL,
  `employee_dir` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `employee`
--

INSERT INTO `employee` (`employee_id`, `employee_name`, `employee_lastname`, `employee_phone`, `employee_mail`, `employee_dir`) VALUES
(1, 'EDUARDO', 'PINEDA MENDOZA', '4423876754', 'eduardopm@gmail.com', 'AV. LOZANO #126 INT #1, FRACC. JARDINES DEL SOL, QUERETARO, QRO. '),
(2, 'LUIS JOEL', 'ALVAREZ ROJAS', '4423767812', 'lui.joe@gmail.com', 'AV. DE LOS CEDROS #456 INT #4, COL. LA ALBORADA, LEON, GTO.'),
(7, 'PEDRO ALBERTO', 'SANCHEZ MIRAMAR', '4423516578', 'miramar@gmail.com', 'AV. SAUCES #123 INT #3, COL. LA ARBOLEDA, SAN LUIS POTOSI, SLP'),
(8, 'JUAN LUIS', 'PEREZ NERIDA', '2386795069', 'nel.ju@gmail.com', 'CALLE DOMINO #321, COL. SAN LUIS, LEÓN, GTO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_mail` varchar(50) NOT NULL,
  `user_password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_mail`, `user_password`) VALUES
(1, 'Gael Vivas', 'gaelvivas2004@gmail.com', 'g.vivas2023'),
(2, 'Juan Pérez', 'jperez@outlook.com', 'j.perez2023'),
(3, 'admin', 'admin@admin.com', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
