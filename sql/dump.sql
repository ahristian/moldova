-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: ahristian1
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `destination`
--

DROP TABLE IF EXISTS `destination`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `destination` (
  `destinationId` binary(16) NOT NULL,
  `destinationContact` varchar(550) NOT NULL,
  `destinationDescription` varchar(2000) NOT NULL,
  `destinationLocation` varchar(250) NOT NULL,
  `destinationTitle` varchar(128) NOT NULL,
  `destinationImage` varchar(128) NOT NULL,
  PRIMARY KEY (`destinationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `destination`
--

LOCK TABLES `destination` WRITE;
/*!40000 ALTER TABLE `destination` DISABLE KEYS */;
INSERT INTO `destination` VALUES (_binary '\nYfXPfJ1òs$¨\È¨†','+373 22 71 90 29 , +373 22 85 70 79 dendrariu@gmail.com www.dendrariu.md/','Dendrariu is the most beautiful park in Chisinau. If you want to spend the time walking in the park, Dendrariu is one of the best. Dendrariu is a park has more than one thousand types and shapes of woody plants. In different seasons you will have particular types of flowers. The best season is summer, then you will find a lot of roses and design flower arrangements.','str. George Enescu 5, city Chisinau, Republic of Moldova','The Dendrariu','/dendrari2.jpg'),(_binary 'P†™≥C~Æ¡\Î\0\"\Î-','+373 22 382 777; +373 22 382 333 marketing@mm.in.md www.milestii-mici.md','The Milewtii Mici wine cellar was included in the Guinness Book of World Records in 2005 for the largest wine collection in the world, of more than 1.5 million bottles. It is also known as the Golden Collection. It is kept deep below ground and includes many unique Moldovan wines going back to the 1969 vintage. The underground galleries of Miletii Mici are probably the longest in the world, stretching for over 200 kilometres. Visitors can walk through the underground avenues and streets that bear the names of grape varieties, and are large enough to be driven through by car. After experiencing the dramatic cellars, guests are welcomed to the tasting room to sample the wines along with traditional dishes such as sarmale and mamalig with Feta cheese and meat stew.','Milestii Mici village, Ialoveni district, MD-6819,Republic of Moldova','The Milestii Mici','/milesti2.jpg'),(_binary '2ñ¢{˛jDÇΩ\Zä∏\Á\ƒH',' 373 22 20 17 07','Exploring Chisinau could be even more attractive if you find a nice place to have a rest after a long walk around the places of interest throughout the whole capital. If this place is a splendid park that is situated almost in the center of the city, where the mammoths once lived, then you will like it even more. Valea Morilor Park is commonly known by the locals as the Komsomolsky Lake. This park is not only a fascinating place but also has quite interesting stories that will never leave you indifferent.','Street Grigore Alexandrescu, city Chisinau, Republic of Moldova','The Valea Morilor Park (Parcul Valea Morilor)','/valea4.jpg'),(_binary 'F`_2k\ÙIùÆ£¸ˇqª¯','+373 22 604 027 office@cricova.md www.cricova.md','The history of the Cricova Associated Wine Factory begins in 1952. There was a shortage of facilities for the storage and ageing of wines at that time in the Republic of Moldova. And it was decided to use the galleries resulting from building stone extraction as warehouses for the storage of wine. Before long it turned out that the wines produced at the Cricova Associated Wine Factory and aged in the underground silence possessed exceptional qualities. The tunels are around 120km (74miles) long are full with exceptional wine. Because they have created the ideal conditions, with the average temperature is +10  + 12C and the relative humidity of the air is 97-98% all year round.','Strada Petru Ungureanu 1, city Cricova, Republic of Moldova','The Winery Cricova','/cricova3.jpg'),(_binary 'T!cÀó\–O$Üì\ˆ¿Êáª','office@muzeu.md www.muzeulsatuluichisinau.wordpress.com','When entering the city from the airport direction,  you can find an important touristic attraction, and not everyone knows about its existence. We are pleased to relate to you that this is a wooden church, built in 1642, brought from the Hirieni town in order to be restored. It was registered as a branch of the National Museum of Ethnography and Natural History in 1995. The museum has monuments of folk architecture. Opened in May 1995, the Village Museum reconstructs the bessarabian village from the XVIII-XIX centuries.','Street Aeroportului, city Chisinau, Republic of Moldova','Village Museum (Muzeul Satului)','/sat2.jpg'),(_binary 'ÅiL<á*Mõûà+\Ú\Ìf\‘','(+373) 79950290; (+373) 79988642 asconi@asconi.md www.asconi.md','Located only 30 km from Chisinau, Asconi offers everything a tourist could wish for: beautifull landscapes, rustic architecture, tasty food and great wines. Tours include a visit to the winemaking, storage, packaging, bottling and maturation facilities, where visitors can see the full journey of the grapes, how they are processed, fermented and turned into wine. After seeing the technical side of winemaking, visitors are invited to enjoy a guided wine tasting of up to 7 different wines of their choice: red, white or ros, and aged in oak or young fresh styles. Asconi is one of the very few wineries in the country to make three different types of Ice Wine that have all won awards in international competitions. After seeing the modern product on halls, guests head to a relaxing oasis  the stone and clay restaurant and its wooden veranda are perfect for discovering how Asconi wines can partner traditional Moldovan cuisine. The menu is based on recipes from households in the nearby village of Puhoi, passed down from generation to generation','Puhoi, Ialoveni Distict, Republic of Moldova','The Winery Asconi','/asconi2.jpg'),(_binary 'á)6¥1<KoØ0Z¿ózN','+373 68500555 turism@vartely.md www.vartely.md','Chateau Vartely is a modern winery built with the aim of bringing together the best of old world and new world approaches to winemaking. Founded in 2004, the company combines state-of-the-art viticultural techniques and processing of grapes with a passion for production of quality wine. Chteau Vartely is also a culture and leisure resort, with tasting rooms, a restaurant, three unique guesthouses and a cellar that houses 500 oak barrels where wines are aged. The winery is a national and international leader in promoting wines from indigenous grape varieties such as Feteasca Regala, Feteasca Neagra and Rara Neagra. It is a must-see destination for those who want to discover authentic Moldovan wine. Additionally, Chteau Vartely keeps a collection of wines from five continents, the oldest bottle dating back to the 2005 vintage. After a professionally guided wine tasting, tourists can indulge in an excellent gastronomic experience at the winerys restaurant, which combines Moldovan and European cuisine.','Street 170/b Eliberarii, city Orhei, Republic of Moldova','The Chateau Vartely','/vart2.jpg'),(_binary 'á6åœèÉFhßP/ˇï∏q','www.orheiulvechi.com','Old Orhei is a historical and archaeological complex, located in Trebujeni, at 60 km north-east of Chisinau, on river Raut. It is famous for its well preserved cave monasteries. This territory was isolated from the outer world and it is supposed that, at the time when Christians came here, the caves were been already cut in the rocks by prehistoric tribes who had lived in the area. The Christians probably used the existing caves but the expansion of monastic life in the later middle ages and frequent Crimean and Budjak Tatar raids forced the monks to go deeper into inaccessible cliffs. They expanded the existing caves and created new ones. Some caves are well preserved nowadays.','village Trebujeni, Orhei Distict, Republic of Moldova','The Old Orhei (Orheiul Vechi)','/ovechi1.jpg'),(_binary 'áö\Ë∂[êCºã8/æ\’[Ü','+37360877522 manuc.bey22@gmail.com www.manucbey.md','The mansion bears the name of the diplomat and the merchant from Armenian origin Manuc Bei Mirzaian. He died within a short time after the purchase of Hincesti estate. The construction of the mansion began under the management of his son, Murat (Ivan) and it was finished by his nephew, Grigore. They built a castle of an amazing beauty in French style with a winter garden, watchtowers and a big part. In 1993 the mansion got the statute of architectural monument.','str.Mitropolit Varlaam 51, city Hnceti, Republic of Moldova','The Manuc Bey','/manuc1.jpg'),(_binary 'î\Íí\»psG…â5In≤\Ã;ì','+373 025 47 86 00 info@manastirea-saharna.md www.manastirea-saharna.md','The Monastery of Saharna, situated about 110 km north of Chisinau, on the right side of the Nistru River, is considered to be one of the biggest centres for religious pilgrimages in Moldova. Here can be found the unique relics of the Blessed Macarie, and on the top of the high cliff, according to a legend, there is a footprint of St. Maria, the Mother of Jesus. The legend says that a monk from the monastery once saw the shining figure of Saint Maria on the top of a rock. When reaching that spot the monk saw a mark of a footstep on the ground. Near this spot a new wooden church was built and the Holy Trinity monastery founded (1777).','village Saharna, Rezina district, Republica Moldova','The Saharna Monastery (Manastirea Saharna)','/saharna4.jpg'),(_binary 'ù`c,Ω0Eº__≠9\⁄≠','+373 552 48032 +373 779 08728 bendery-fortress@inbox.ru www.bendery-fortress.com','The origin of the Tighina fortress was begun to build in 1538, after Moldova was conquered by Otoman Empire and it was finshied built by otoman architecture Sinan and called Bender Fortress. In 1705-1707 it was made some changes to make it wider and more modernized. Since 2008 has begun the renovation proccess of the fortress.','Strada Panin 2, city Bender, Republic of Moldova','The Tighina Fortress (Bender Fortress)','/bender2.jpg'),(_binary 'µ\ı\√J\ÁA¶Ü–û\‡\◊\‘¢','373 796 24 877','In Tipova on the rocky side of the Nistru river (about 100-km north of Chisinau), is the biggest Orthodox cave monastery in Moldova and in Eastern Europe. Long before the feudal state of Moldova was formed, a community of monks was established here. Some say that in the X-XII c. (according to others in the XVI-XVIII c.) some cells were dug inside the steep cliffs of the Nistru. In 1776 a prosperous period started when the monastery was divided into large parts, separated by massive columns. During the Soviet period the monastery was closed and destroyed. In 1975 the ruins of the Tipova monastery were protected by the State and in 1994 religious services resumed.','Tipova village, district Rezina, Republica of Moldova','The Tipova Monastery (Manastirea Tipova)','/tipova3.jpg'),(_binary '\‹Pê\¬=L-∏∑8ï÷ó\‹H','tel.:+373 2650 1893 office@castelmimi.md www.castelmimi.md','The Mimi wines were introduced to the general public and because of their high quality and memorable flavors they gained popularity fast among wine lovers. The story however begins long before, at the end of XIX century when Constantin Mimi, the last governor of Bessarabia during Russian Empire era, decided to change the way Moldovan wines are made and builds the first and the only true chateau in the country! Also thanks to Mimi Family today we have Aligote in Moldova, one of most beloved varieties! Constantin Mimi\'s Legacy - The Castel alongside secret recipes and hard work standards - was passed intact to future generations of winemakers that pay justice to his memory by continuing to produce high quality beverages.','village Bulboaca, Anenii Noi Distict, Republica Moldova','The Mimi Castel','/mimi2.jpg'),(_binary 'Íì†´†Lç¶\'\Ï\÷6Y(∫','+373 230 22 264 msoroca@mtc.md','The city has its origin in the medieval Genoese trade post of Olchionia, or Alchona. It is known for its well-preserved stronghold, established by the Moldavian Prince Stephen the Great (Stefan cel Mare) in 1499. The original wooden fort, which defended a ford over the Dniester (Moldovan/Romanian: Nistru), was an important link in the chain of fortifications which comprised four forts (e.g. Akkerman and Khotin) on the Dniester, two forts on the Danube and three forts on the north border of medieval Moldova. Between 1543 and 1546 under the rule of Petru Rares, the fortress was rebuilt in stone as a perfect circle with five bastions situated at equal distances. During the Great Turkish War, John Sobieski\'s forces successfully defended the fortress against the Ottomans. It was of vital military importance during the Pruth Campaign of Peter the Great in 1711. The stronghold was sacked by the Russians in the Russo-Turkish War (17351739). The Soroca fortress is an important attraction in Soroca, having preserved cultures and kept the old Soroca in the present day.','street Petru Rares 1, city Soroca, Republic of Moldova','The Soroca Fortress (Cetatea Soroca)','/soroca1.jpg');
/*!40000 ALTER TABLE `destination` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `destinationPhoto`
--

DROP TABLE IF EXISTS `destinationPhoto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `destinationPhoto` (
  `destinationPhotoId` binary(16) NOT NULL,
  `destinationPhotoDestinationId` binary(16) NOT NULL,
  `destinationPhotoUrl` varchar(128) NOT NULL,
  PRIMARY KEY (`destinationPhotoId`),
  KEY `destinationPhotoDestinationId` (`destinationPhotoDestinationId`),
  CONSTRAINT `destinationPhoto_ibfk_1` FOREIGN KEY (`destinationPhotoDestinationId`) REFERENCES `destination` (`destinationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `destinationPhoto`
--

LOCK TABLES `destinationPhoto` WRITE;
/*!40000 ALTER TABLE `destinationPhoto` DISABLE KEYS */;
INSERT INTO `destinationPhoto` VALUES (_binary ')wÑ`\Ó^\Í≠¡B¨\0',_binary '\nYfXPfJ1òs$¨\È¨†','/dendrari1.jpg'),(_binary ')wáX\Ó^\Í≠¡B¨\0',_binary '\nYfXPfJ1òs$¨\È¨†','/dendrari2.jpg'),(_binary ')wâ¶\Ó^\Í≠¡B¨\0',_binary '\nYfXPfJ1òs$¨\È¨†','/dendrari3.jpg'),(_binary ')wäå\Ó^\Í≠¡B¨\0',_binary 'áö\Ë∂[êCºã8/æ\’[Ü','/manuc1.jpg'),(_binary ')wã^\Ó^\Í≠¡B¨\0',_binary 'áö\Ë∂[êCºã8/æ\’[Ü','/manuc2.jpg'),(_binary ')wçf\Ó^\Í≠¡B¨\0',_binary 'áö\Ë∂[êCºã8/æ\’[Ü','/manuc3.jpg'),(_binary ')wè(\Ó^\Í≠¡B¨\0',_binary 'P†™≥C~Æ¡\Î\0\"\Î-','/milesti1.jpg'),(_binary ')wêh\Ó^\Í≠¡B¨\0',_binary 'P†™≥C~Æ¡\Î\0\"\Î-','/milesti2.jpg'),(_binary ')wë0\Ó^\Í≠¡B¨\0',_binary 'P†™≥C~Æ¡\Î\0\"\Î-','/milesti3.jpg'),(_binary ')wíz\Ó^\Í≠¡B¨\0',_binary 'P†™≥C~Æ¡\Î\0\"\Î-','/milesti4.jpg'),(_binary ')wìt\Ó^\Í≠¡B¨\0',_binary '\‹Pê\¬=L-∏∑8ï÷ó\‹H','/mimi1.jpg'),(_binary ')wî\»\Ó^\Í≠¡B¨\0',_binary '\‹Pê\¬=L-∏∑8ï÷ó\‹H','/mimi2.jpg'),(_binary ')wïê\Ó^\Í≠¡B¨\0',_binary '\‹Pê\¬=L-∏∑8ï÷ó\‹H','/mimi3.jpg'),(_binary ')wñº\Ó^\Í≠¡B¨\0',_binary 'á6åœèÉFhßP/ˇï∏q','/ovechi1.jpg'),(_binary ')wö\Ù\Ó^\Í≠¡B¨\0',_binary 'á6åœèÉFhßP/ˇï∏q','/ovechi2.jpg'),(_binary ')wõº\Ó^\Í≠¡B¨\0',_binary 'á6åœèÉFhßP/ˇï∏q','/ovechi4.jpg'),(_binary ')wû\0\Ó^\Í≠¡B¨\0',_binary 'î\Íí\»psG…â5In≤\Ã;ì','/saharna1.jpg'),(_binary ')wü\Ó^\Í≠¡B¨\0',_binary 'î\Íí\»psG…â5In≤\Ã;ì','/saharna2.jpg'),(_binary ')w†î\Ó^\Í≠¡B¨\0',_binary 'î\Íí\»psG…â5In≤\Ã;ì','/saharna3.jpg'),(_binary ')w°¨\Ó^\Í≠¡B¨\0',_binary 'î\Íí\»psG…â5In≤\Ã;ì','/saharna4.jpg'),(_binary ')w£2\Ó^\Í≠¡B¨\0',_binary 'T!cÀó\–O$Üì\ˆ¿Êáª','/sat1.jpg'),(_binary ')w§@\Ó^\Í≠¡B¨\0',_binary 'T!cÀó\–O$Üì\ˆ¿Êáª','/sat2.jpg'),(_binary ')w•º\Ó^\Í≠¡B¨\0',_binary 'Íì†´†Lç¶\'\Ï\÷6Y(∫','/soroca1.jpg'),(_binary ')wßj\Ó^\Í≠¡B¨\0',_binary 'Íì†´†Lç¶\'\Ï\÷6Y(∫','/soroca2.jpg'),(_binary ')w©@\Ó^\Í≠¡B¨\0',_binary 'Íì†´†Lç¶\'\Ï\÷6Y(∫','/soroca4.jpg'),(_binary ')w™û\Ó^\Í≠¡B¨\0',_binary 'µ\ı\√J\ÁA¶Ü–û\‡\◊\‘¢','/tipova1.jpg'),(_binary 'Ef\Œ\ˆ\Ìñ\Í≠¡B¨\0',_binary 'ù`c,Ω0Eº__≠9\⁄≠','/bender2.jpg'),(_binary 'Ef\“p\Ìñ\Í≠¡B¨\0',_binary 'ù`c,Ω0Eº__≠9\⁄≠','/bender3.jpg'),(_binary 'Ef\”B\Ìñ\Í≠¡B¨\0',_binary 'F`_2k\ÙIùÆ£¸ˇqª¯','/cricova1.jpg'),(_binary 'Ef\÷\Ìñ\Í≠¡B¨\0',_binary 'F`_2k\ÙIùÆ£¸ˇqª¯','/cricova2.jpg'),(_binary 'Ef\◊\Ìñ\Í≠¡B¨\0',_binary 'F`_2k\ÙIùÆ£¸ˇqª¯','/cricova3.jpg'),(_binary 'Ef\◊\‘\Ìñ\Í≠¡B¨\0',_binary 'F`_2k\ÙIùÆ£¸ˇqª¯','/cricova4.jpg'),(_binary 'Efÿ∞\Ìñ\Í≠¡B¨\0',_binary 'ÅiL<á*Mõûà+\Ú\Ìf\‘','/asconi1.jpg'),(_binary 'Ef\Ÿn\Ìñ\Í≠¡B¨\0',_binary 'ÅiL<á*Mõûà+\Ú\Ìf\‘','/asconi2.jpg'),(_binary 'Ef\⁄@\Ìñ\Í≠¡B¨\0',_binary 'ÅiL<á*Mõûà+\Ú\Ìf\‘','/asconi3.jpg'),(_binary 'Ef\‹R\Ìñ\Í≠¡B¨\0',_binary 'ÅiL<á*Mõûà+\Ú\Ìf\‘','/asconi4.jpg'),(_binary 'V†$¯\Óa\Í≠¡B¨\0',_binary 'µ\ı\√J\ÁA¶Ü–û\‡\◊\‘¢','/tipova2.jpg'),(_binary 'V†\'2\Óa\Í≠¡B¨\0',_binary 'µ\ı\√J\ÁA¶Ü–û\‡\◊\‘¢','/tipova3.jpg'),(_binary 'V†(\Í\Óa\Í≠¡B¨\0',_binary '2ñ¢{˛jDÇΩ\Zä∏\Á\ƒH','/valea1.jpg'),(_binary 'V†)\Ó\Óa\Í≠¡B¨\0',_binary '2ñ¢{˛jDÇΩ\Zä∏\Á\ƒH','/valea2.jpg'),(_binary 'V†*¿\Óa\Í≠¡B¨\0',_binary '2ñ¢{˛jDÇΩ\Zä∏\Á\ƒH','/valea3.jpg'),(_binary 'V†+à\Óa\Í≠¡B¨\0',_binary '2ñ¢{˛jDÇΩ\Zä∏\Á\ƒH','/valea4.jpg'),(_binary 'V†-\Ã\Óa\Í≠¡B¨\0',_binary 'á)6¥1<KoØ0Z¿ózN','/vart1.jpg'),(_binary 'V†.û\Óa\Í≠¡B¨\0',_binary 'á)6¥1<KoØ0Z¿ózN','/vart2.jpg'),(_binary 'V†/\\\Óa\Í≠¡B¨\0',_binary 'á)6¥1<KoØ0Z¿ózN','/vart3.jpg'),(_binary '\⁄oIèO˝¨\Â∫)\Ê\ÿ\\Ê',_binary 'ù`c,Ω0Eº__≠9\⁄≠','/bender1.jpg');
/*!40000 ALTER TABLE `destinationPhoto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food` (
  `foodId` binary(16) NOT NULL,
  `foodTitle` varchar(128) NOT NULL,
  `foodContent` varchar(1000) NOT NULL,
  `foodImageUrl` varchar(128) NOT NULL,
  PRIMARY KEY (`foodId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (_binary 'FDL<á*Mõûà+\Ú\Ìf\‘','Mamaliga','Mamaliga is known as national special food in Moldova served with steam meat, cottage cheese and sour cream.','/mamaliga.jpg'),(_binary 'ômi¥©D\"ÇØs*ZÜ\ƒ','Moldavian Stuffed Cabbage (Sarmale)','This recipe for Romanian stuffed cabbage, or sarmale, features ground pork, sauerkraut, tomatoes, and dill. Sarmale is enjoyed year-round in Moldova but especially for holidays like Christmas and Easter. Stuffed cabbage is a traditional dish not only in Moldova but across all of Eastern Europe.','/sarmale.png'),(_binary '\€R\‰/\ÓQBôëA<pMÜÄ~','Olivier','Olivier Potato Salad is a classic, homemade Russian potato salad recipe that is easy to prepare. Every bite is a mixture of different ingredients, all chopped into small pieces to deliver that rich outburst of flavors.','/olivie.jpg'),(_binary '\ˆ#–ß,t@I∂\¬†+π\ıl','Moldavian Garlic Chicken Aspic (Piftie sau Racitura)','This dish, whatever you choose to call it, is a staple in Romanian houses on important holidays (like Christmas and Easter) and throughout the cold season.','/racituri.jpg'),(_binary '˛¸c\ÛóGKâ©\ƒ0∏gq¸\ ','Placinte Recipe (Moldavian Brinza)','Placinte is a round flat bread that is commonly stuffed with cheese. It is recognized in the Romanian, Ukrainian and Moldovan Culture.','/placinte.jpg');
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `profileId` binary(16) NOT NULL,
  `profileActivationToken` varchar(250) NOT NULL,
  `profileEmail` varchar(250) NOT NULL,
  `profileHash` varchar(250) NOT NULL,
  `profileUserName` varchar(250) NOT NULL,
  PRIMARY KEY (`profileId`),
  UNIQUE KEY `profileId` (`profileId`),
  UNIQUE KEY `profileEmail` (`profileEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `save`
--

DROP TABLE IF EXISTS `save`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `save` (
  `saveDestinationId` binary(16) NOT NULL,
  `saveFoodId` binary(16) NOT NULL,
  `saveProfileId` binary(16) NOT NULL,
  `saveTraditionId` binary(16) NOT NULL,
  PRIMARY KEY (`saveDestinationId`,`saveFoodId`,`saveProfileId`,`saveTraditionId`),
  KEY `saveDestinationId` (`saveDestinationId`),
  KEY `saveFoodId` (`saveFoodId`),
  KEY `saveProfileId` (`saveProfileId`),
  KEY `saveTraditionId` (`saveTraditionId`),
  CONSTRAINT `save_ibfk_1` FOREIGN KEY (`saveDestinationId`) REFERENCES `destination` (`destinationId`),
  CONSTRAINT `save_ibfk_2` FOREIGN KEY (`saveFoodId`) REFERENCES `food` (`foodId`),
  CONSTRAINT `save_ibfk_3` FOREIGN KEY (`saveProfileId`) REFERENCES `tradition` (`traditionId`),
  CONSTRAINT `save_ibfk_4` FOREIGN KEY (`saveTraditionId`) REFERENCES `profile` (`profileId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `save`
--

LOCK TABLES `save` WRITE;
/*!40000 ALTER TABLE `save` DISABLE KEYS */;
/*!40000 ALTER TABLE `save` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tradition`
--

DROP TABLE IF EXISTS `tradition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tradition` (
  `traditionId` binary(16) NOT NULL,
  `traditionTitle` varchar(128) NOT NULL,
  `traditionContent` varchar(1000) NOT NULL,
  `traditionImageUrl` varchar(128) NOT NULL,
  PRIMARY KEY (`traditionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tradition`
--

LOCK TABLES `tradition` WRITE;
/*!40000 ALTER TABLE `tradition` DISABLE KEYS */;
INSERT INTO `tradition` VALUES (_binary '\r,\ﬁugFDÜ\‰?O\Í	~Y','Christmass','Christmas carols, traditional foods and decorated trees are part of the Christmas traditions. Children start to sing carols during a ceremony in which a white newborn lamb is carried by a child, thus symbolizing religious faith and purity.','/craciun.jpg'),(_binary '7\È:&\Ï%Fk¥‹æ!C-','The FOLK COSTUME DAY','Moldovans celebrate Folkloric Clothing Day, paying homage to authentic costumes representing Romanian folklore and other national ethnicities. The holiday has three key themes: heritage, guest and modern based on traditional customs. The Ia a Romanian blouse, is also widely represented at the festival.','/iProsop.jpg'),(_binary '=\Ê}D/G\˜≥=±≠#\Í,\Ë','The Pentecost Sunday (Duminica Mare)','During this holiday, widely considered the most important Sunday of the year, people decorate their homes with herbs and leaves. Floors are covered with thick grass, wormwood and other field plants. The festival is open to everyone who would like to discover Moldovas ethno-folkloric traditions and craftsmanship.','/DuminicaMare.jpg'),(_binary 'E2L<á*Mõûà+\Ú\Ìf\‘','Martisor','Martisor is a talisman properties and a symbols of love. It is a celebration at the beginning of spring, on March the 1st','/martisor.jpg'),(_binary 'äKzi\0jE\\•s©f=›¢','The Matisor Festival','Martisor is the celebration of the arrival of spring and the name of a red and white tassel pin worn on the chest from March 1 to 31. Moldovas Martisor Festival is an attraction for those who want to discover the rich culture and talented artists of Moldova. Throughout March, music and dance ensembles from Moldova and abroad transform the Nicolae Sulac palace stage displaying the traditional and joyous greetings for the coming of spring. For more than 50 years, the Martisor Festival has paid homage to this romantic tradition through music and dance.','/martisorF.jpg'),(_binary '≠¥Gä~D\Í¢¯#\Ài¥ß','Easter','Lamb, cheese cake, colored eggs and feta cheese make an appearance in every Easter dinner. The egg as a symbol represents the miracle of creation. A ritual coloring of the eggs takes place to express this symbolism. The first egg colored for Easter belongs to the children and it must be colored red. On the first day of Easter, one egg is placed in a pot of water. A silver coin and some fresh basil are added to the water. All household members will wash their faces with this water.','/paste.jpg'),(_binary 'æ	Zü\∆Lª©ª\"D\Œôö','The Chisinau City Day (Ziua Orasului Chisinau)','All the dwellers and guests of the capital meet in the Great National Assembly Square to have fun together. Here you will find fairs, activities for children, masterclasses for children and parents, and on the big stage of the market, throughout the day a concert featuring the most famous artists of the Republic. So, if you are planning a visit to Chisinau in the middle of the fall - you are welcome to this feast!','/ziua.jpg'),(_binary '\Â\núâ©ÑFüø7\ƒ\ÚE\‘s`','The VELOHORA','VeloHora is the largest cycling event in a former-Soviet territory. The joyous event is a celebration for the whole family to share a memorable experience at the festival and enjoy a leisurely bike ride together.','./velohora.jpg'),(_binary '\ıÉ\ÙëHJ\Ô¶\\<^œï†m','News Eve','The carol singers arrive during the afternoon of and evening on Christmas Eve. The well-wishers are expected during the afternoon of New Year\'s Eve, these are groups who extend wishes for a happy life, prosperity and fertility in the coming year. The children, who symbolize purity and hope, usually receive apples, nuts and home-baked bread. The old fertility rite is a poem describing, in a mythical manner, the labors to be performed by the plowman--ranging from seeding to bread making, and including reaping of the harvest.','/anul.jpg'),(_binary '˘$*\€FM¨±b8u)B\√\–','The Wine Festival','Wine producers open up their homes and vineyards to the masses on October 3-4 for National Wine Day, in a country-wide celebration of local hooch. Wine tastings are cheap, and there\'s even a free bus to shuttle you between wineries.','/vin.png');
/*!40000 ALTER TABLE `tradition` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-09  2:55:50
