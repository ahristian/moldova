DROP TABLE IF EXISTS `like`;
DROP TABLE IF EXISTS tradition;
DROP TABLE IF EXISTS food;
DROP TABLE IF EXISTS destination;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
                        profileId BINARY(16) NOT NULL,
                        profileActivationToken VARCHAR(250) NOT NULL,
                        profileEmail VARCHAR(250) NOT NULL,
                        profileHash VARCHAR(250) NOT NULL,
                        profileUserName VARCHAR(250) NOT NULL,
                        UNIQUE KEY (profileId),
                        UNIQUE KEY (profileEmail),
                        PRIMARY KEY (profileId)
);

CREATE TABLE destination (
                       destinationId BINARY(16) NOT NULL,
                       destinationContact VARCHAR(550) NOT NULL,
                       destinationDescription VARCHAR(2000) NOT NULL,
                       destinationLocation VARCHAR(250) NOT NULL,
                       destinationTitle VARCHAR(128) NOT NULL,
                       destinationImage VARCHAR(128) NOT NULL ,
                       PRIMARY KEY(destinationId)
);

CREATE TABLE food (
                       foodId BINARY(16) NOT NULL,
                       foodTitle VARCHAR(128) NOT NULL,
                       foodContent VARCHAR(1000) NOT NULL,
                       foodImageUrl VARCHAR(128) NOT NULL,
                       PRIMARY KEY (foodId)
);

CREATE TABLE tradition (
                        traditionId BINARY(16) NOT NULL,
                        traditionTitle VARCHAR(128) NOT NULL,
                        traditionContent VARCHAR(1000) NOT NULL,
                        traditionImageUrl VARCHAR(128) NOT NULL,
                        PRIMARY KEY(traditionId)
);
CREATE TABLE destinationPhoto (
                            destinationPhotoId BINARY(16) NOT NULL,
                            destinationPhotoDestinationId BINARY(16) NOT NULL,
                            destinationPhotoUrl VARCHAR(128) NOT NULL,
                            FOREIGN KEY (destinationPhotoDestinationId) REFERENCES destination(destinationId),
                            PRIMARY KEY(destinationPhotoId)
);
CREATE TABLE `save` (
                        saveDestinationId BINARY(16) NOT NULL,
                        saveProfileId BINARY(16) NOT NULL,
                        INDEX(saveDestinationId),
                        INDEX(saveProfileId),
                        FOREIGN KEY(saveDestinationId) REFERENCES destination(destinationId),
                        FOREIGN KEY(saveProfileId) REFERENCES profile(profileId),
                        PRIMARY KEY(saveDestinationId, saveProfileId)
);