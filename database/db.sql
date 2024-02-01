-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2024 a las 05:49:26
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cv`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `about_me`
--

CREATE TABLE `about_me` (
  `id` int(11) NOT NULL,
  `id_curri` int(11) NOT NULL,
  `nombre` varchar(120) NOT NULL,
  `apellido` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `cp` varchar(15) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `foto` text NOT NULL,
  `ocupacion` varchar(200) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `competencias`
--

CREATE TABLE `competencias` (
  `id` int(11) NOT NULL,
  `id_curri` int(11) NOT NULL,
  `habilidad` varchar(120) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curri`
--

CREATE TABLE `curri` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `educacion`
--

CREATE TABLE `educacion` (
  `id` int(11) NOT NULL,
  `id_curri` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `institucion` varchar(200) NOT NULL,
  `localidad` varchar(200) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencia`
--

CREATE TABLE `experiencia` (
  `id` int(11) NOT NULL,
  `id_curri` int(11) NOT NULL,
  `puesto` varchar(200) NOT NULL,
  `empresa` varchar(200) NOT NULL,
  `localidad` varchar(200) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` varchar(80) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idioma`
--

CREATE TABLE `idioma` (
  `id` int(11) NOT NULL,
  `id_curri` int(11) NOT NULL,
  `idioma` varchar(120) NOT NULL,
  `nivel` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pasatiempos`
--

CREATE TABLE `pasatiempos` (
  `id` int(11) NOT NULL,
  `id_curri` int(11) NOT NULL,
  `pasatiempo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL,
  `contra` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `about_me`
--
ALTER TABLE `about_me`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curri_id_curri:about_me` (`id_curri`);

--
-- Indices de la tabla `competencias`
--
ALTER TABLE `competencias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curri_id_curri_competencias` (`id_curri`);

--
-- Indices de la tabla `curri`
--
ALTER TABLE `curri`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id_user_curri` (`id_user`);

--
-- Indices de la tabla `educacion`
--
ALTER TABLE `educacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curri_id_curri_educacion` (`id_curri`);

--
-- Indices de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curri_id_curri_experiencia` (`id_curri`);

--
-- Indices de la tabla `idioma`
--
ALTER TABLE `idioma`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curri_id_curri_idioma` (`id_curri`);

--
-- Indices de la tabla `pasatiempos`
--
ALTER TABLE `pasatiempos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curri_id_curri_pasatiempos` (`id_curri`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `about_me`
--
ALTER TABLE `about_me`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `competencias`
--
ALTER TABLE `competencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `curri`
--
ALTER TABLE `curri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `educacion`
--
ALTER TABLE `educacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `idioma`
--
ALTER TABLE `idioma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pasatiempos`
--
ALTER TABLE `pasatiempos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `about_me`
--
ALTER TABLE `about_me`
  ADD CONSTRAINT `curri_id_curri:about_me` FOREIGN KEY (`id_curri`) REFERENCES `curri` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `competencias`
--
ALTER TABLE `competencias`
  ADD CONSTRAINT `curri_id_curri_competencias` FOREIGN KEY (`id_curri`) REFERENCES `curri` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `curri`
--
ALTER TABLE `curri`
  ADD CONSTRAINT `users_id_user_curri` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `educacion`
--
ALTER TABLE `educacion`
  ADD CONSTRAINT `curri_id_curri_educacion` FOREIGN KEY (`id_curri`) REFERENCES `curri` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `experiencia`
--
ALTER TABLE `experiencia`
  ADD CONSTRAINT `curri_id_curri_experiencia` FOREIGN KEY (`id_curri`) REFERENCES `curri` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `idioma`
--
ALTER TABLE `idioma`
  ADD CONSTRAINT `curri_id_curri_idioma` FOREIGN KEY (`id_curri`) REFERENCES `curri` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `pasatiempos`
--
ALTER TABLE `pasatiempos`
  ADD CONSTRAINT `curri_id_curri_pasatiempos` FOREIGN KEY (`id_curri`) REFERENCES `curri` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
