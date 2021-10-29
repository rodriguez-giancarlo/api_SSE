CREATE TABLE `persona` (
  `idpersona` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `sexo` tinyint(1) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `dni` char(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `matricula` (
  `idUsuCurso` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `idpersona` int(11) NOT NULL,
  `idCurso` int(11) NOT NULL,
  `vigencia` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `curso` (
  `idCurso` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `idpersona` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `horaDiaria` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `historial` (
  `idHistorial` int(11) NOT NULL,
  `horInicio` time NOT NULL,
  `horFinal` time NOT NULL,
  `fecha` time NOT NULL,
  `idRecurso` int(11) NOT NULL,
  `idpersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `recurso` (
  `idRecurso` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `fecha` time NOT NULL,
  `archivo` varchar(50) NOT NULL,
  `idTema` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `vigencia` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tema` (
  `idTema` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `idUnidad` int(11) NOT NULL,
  `vigencia` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `unidad` (
  `idUnidad` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `idCurso` int(11) NOT NULL,
  `vigencia` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `usuario` varchar(15) NOT NULL,
  `contraseña` varchar(15) NOT NULL,
  `vigencia` tinyint(4) NOT NULL,
  `idpersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `persona`
  ADD PRIMARY KEY (`idpersona`);

ALTER TABLE `matricula`
  ADD PRIMARY KEY (`idUsuCurso`),
  ADD KEY `idpersona` (`idpersona`),
  ADD KEY `idCurso` (`idCurso`);

ALTER TABLE `curso`
  ADD PRIMARY KEY (`idCurso`),
  ADD KEY `idpersona` (`idpersona`);

ALTER TABLE `historial`
  ADD PRIMARY KEY (`idHistorial`),
  ADD KEY `idRecurso` (`idRecurso`),
  ADD KEY `idpersona` (`idpersona`);


ALTER TABLE `recurso`
  ADD PRIMARY KEY (`idRecurso`),
  ADD KEY `idTema` (`idTema`);

ALTER TABLE `tema`
  ADD PRIMARY KEY (`idTema`),
  ADD KEY `idUnidad` (`idUnidad`);

ALTER TABLE `unidad`
  ADD PRIMARY KEY (`idUnidad`),
  ADD KEY `idCurso` (`idCurso`);

ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD KEY `idpersona` (`idpersona`);

ALTER TABLE `persona`
  MODIFY `idpersona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `matricula`
  MODIFY `idUsuCurso` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `curso`
  MODIFY `idCurso` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `historial`
  MODIFY `idHistorial` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `recurso`
  MODIFY `idRecurso` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `tema`
  MODIFY `idTema` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `unidad`
  MODIFY `idUnidad` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `matricula`
  ADD CONSTRAINT `matricula_ibfk_1` FOREIGN KEY (`idpersona`) REFERENCES `persona` (`idpersona`),
  ADD CONSTRAINT `matricula_ibfk_2` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`idCurso`);

ALTER TABLE `curso`
  ADD CONSTRAINT `curso_ibfk_1` FOREIGN KEY (`idpersona`) REFERENCES `persona` (`idpersona`);

ALTER TABLE `historial`
  ADD CONSTRAINT `historial_ibfk_1` FOREIGN KEY (`idRecurso`) REFERENCES `recurso` (`idRecurso`),
  ADD CONSTRAINT `historial_ibfk_2` FOREIGN KEY (`idpersona`) REFERENCES `persona` (`idpersona`);

ALTER TABLE `recurso`
  ADD CONSTRAINT `recurso_ibfk_1` FOREIGN KEY (`idTema`) REFERENCES `tema` (`idTema`);

ALTER TABLE `tema`
  ADD CONSTRAINT `tema_ibfk_1` FOREIGN KEY (`idUnidad`) REFERENCES `unidad` (`idUnidad`);

ALTER TABLE `unidad`
  ADD CONSTRAINT `unidad_ibfk_1` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`idCurso`);

ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idpersona`) REFERENCES `persona` (`idpersona`);