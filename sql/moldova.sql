DROP TABLE IF EXISTS `like`;
DROP TABLE IF EXISTS tradition;
DROP TABLE IF EXISTS food;
DROP TABLE IF EXISTS destination;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
                             profileId BINARY(16) NOT NULL,
                             profileActivationToken VARCHAR(250) NOT NULL,
                             profileAtHandle VARCHAR(250) NOT NULL,
                             profileEmail VARCHAR(250) NOT NULL,
                             profileHash VARCHAR(250) NOT NULL,
                             profileName VARCHAR(250) NOT NULL,
                             UNIQUE KEY (profileId),
                             UNIQUE KEY  (profileEmail),
                             PRIMARY KEY(profileId)
);

INSERT INTO profile (profileId, profileActivationToken,profileAtHandle, profileEmail,profileHash,profileName) VALUES (UUID_TO_BIN('81694c3c-872a-4d9b-9e88-2b1333ed66d4'), 'password', 'profileAtHandle', 'ahristian1@cnm.edu', 'dadadadaddad', 'Andrei Hristian');
CREATE TABLE destination (
                       destinationId BINARY(16) NOT NULL,
                       destinationContact VARCHAR(550) NOT NULL,
                       destinationDescription BLOB NOT NULL,
                       destinationLocation VARCHAR(250) NOT NULL,
                       destinationTitle VARCHAR(128) NOT NULL,
                       destinationImageUrl VARCHAR(128) NOT NULL,
                       PRIMARY KEY(destinationId)
);

INSERT INTO destination (destinationId, destinationContact, destinationDescription, destinationLocation,
destinationTitle, destinationImageUrl) VALUES (UUID_TO_BIN('81694c3c-872a-4d9b-9e88-2b17f2ed66d4'),
'(+373) 79950290; (+373) 79988642 asconi@asconi.md www.asconi.md','Located only 30 km from Chișinău, Asconi offers
everything a tourist could wish for: beautifull landscapes, rustic architecture, tasty food and great wines. Tours
include a visit to the winemaking, storage, packaging, bottling and maturation facilities, where visitors can see the
 full journey of the grapes, how they are processed, fermented and turned into wine. After seeing the technical side of
 winemaking, visitors are invited to enjoy a guided wine tasting of up to 7 different wines of their choice: red, white
or rosé, and aged in oak or young fresh styles. Asconi is one of the very few wineries in the country to make three
different types of Ice Wine that have all won awards in international competitions. After seeing the modern product
on halls, guests head to a relaxing oasis – the stone and clay restaurant and its wooden veranda are perfect for
discovering how Asconi wines can partner traditional Moldovan cuisine. The menu is based on recipes from households in
the nearby village of Puhoi, passed down from generation to generation', 'Puhoi, Ialoveni, Republic of Moldova',
'The Winery Asconi', '../sql/image/asconi1.jpg');


CREATE TABLE food (
                       foodId BINARY(16) NOT NULL,
                       foodTitle VARCHAR(128) NOT NULL,
                       foodContent VARCHAR(1000) NOT NULL,
                       foodImageUrl VARCHAR(128) NOT NULL,
                       PRIMARY KEY (foodId)
);

INSERT INTO food (foodId, foodTitle, foodContent, foodImageUrl) VALUES (UUID_TO_BIN('46444c3c-872a-4d9b-9e88-2b17f2ed66d4'),
 'Mamaliga', 'Mamaliga is known as national special food in Moldova served with steam meat, cottage cheese and sour cream.', '../../sql/images/mamaliga');

CREATE TABLE tradition (
                        traditionId BINARY(16) NOT NULL,
                        traditionTitle VARCHAR(128) NOT NULL,
                        traditionContent VARCHAR(1000) NOT NULL,
                        traditionImageUrl VARCHAR(128) NOT NULL,
                        PRIMARY KEY(traditionId)
);


INSERT INTO tradition (traditionId, traditionTitle, traditionContent, traditionImageUrl) VALUES (UUID_TO_BIN('45324c3c-872a-4d9b-9e88-2b17f2ed66d4'),
'Martisor', 'Martisor is a talisman properties and a symbols of love. It is a celebration at the beginning of spring, on March the 1st', '../../sql/images/martisor');

CREATE TABLE `like` (
                        likeDestinationId BINARY(16) NOT NULL,
                        likeFoodId BINARY(16) NOT NULL,
                        likeTraditionId BINARY(16) NOT NULL,
                        likeProfileId BINARY(16) NOT NULL,
                        likeDate DATETIME(6) NOT NULL,
                        INDEX(likeProfileId),
                        INDEX(likeDestinationId),
                        INDEX(likeFoodId),
                        INDEX(likeTraditionId),
                        FOREIGN KEY(likeDestinationId) REFERENCES destination(destinationId),
                        FOREIGN KEY(likeFoodId) REFERENCES food(foodId),
                        FOREIGN KEY(likeTraditionId) REFERENCES tradition(traditionId),
                        FOREIGN KEY(likeProfileId) REFERENCES profile(profileId),
                        PRIMARY KEY(likeProfileId, likeDestinationId, likeFoodId, likeTraditionId)
);