CREATE DATABASE  IF NOT EXISTS `dados20192d`  /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `dados20192d`

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


--
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `atletas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `atletas` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `atl_nome` varchar(30) DEFAULT NULL,
  `atl_apelido` varchar(15) DEFAULT NULL,
  `atl_sexo` char(1) DEFAULT NULL,
  `atl_cpf` varchar(15) DEFAULT NULL,
  `aut_telefone` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `atletas` WRITE;
/*!40000 ALTER TABLE `atletas` DISABLE KEYS */;
INSERT INTO `atletas` VALUES (1,'Rodrigo Fernandes','Rodriguinho','M', '11546587974','16-9205-4907'),(2,'Marta Gomes','Martinha','F', '55041798574','16-9874-9969'),(3,'Carlos de Andrade','Kaka','M','85899678545','17-9875-9965'),(4,'Willian Stallings','Stallings','M','55898744585','12-5478969');
/*!40000 ALTER TABLE `atletas` ENABLE KEYS */;
UNLOCK TABLES;

SELECT * FROM `atletas`
--
-- Table structure for table `modalidades`
--

DROP TABLE IF EXISTS `modalidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modalidades` (
  `mod_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `mod_descricao` varchar(15) DEFAULT NULL,
  `mod_tipo` varchar(15) DEFAULT NULL,
  `mod_federacao` varchar(15) DEFAULT NULL,
  `mod_coletivo` varchar(15) DEFAULT NULL,
  `codigo` int(11) NOT NULL,
  PRIMARY KEY (`mod_codigo`),
  KEY `fk_atletas_codigo_idx` (`codigo`),
  CONSTRAINT `fk_modalidades_atletas` FOREIGN KEY (`codigo`) REFERENCES `atletas` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `modalidades` WRITE;
/*!40000 ALTER TABLE `modalidades` DISABLE KEYS */;
INSERT INTO `modalidades` VALUES (6, 'Boxe', 'de rua', 'Nacional', 'individual', 1),(2,'Salto','Atletismo', 'R','Individual', 1), (3,'Boxe','Luta', 'E','individual', 4), (4,'Volei','Quadra', 'N','coletivo', 1);
INSERT INTO `modalidades` VALUES (5,'Corrida','Atletismo', 'N','individual', 1);
/*!40000 ALTER TABLE `modalidades` ENABLE KEYS */;
UNLOCK TABLES;

select * from modalidades
--
-- Dumping routines for database 'dados'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-25 16:26:13
