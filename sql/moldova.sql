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
                             UNIQUE KEY  (profileEmail),
                             PRIMARY KEY(profileId)
);


CREATE TABLE destination (
                       destinationId BINARY(16) NOT NULL,
                       destinationContact VARCHAR(550) NOT NULL,
                       destinationDescription VARCHAR(2000) NOT NULL,
                       destinationLocation VARCHAR(250) NOT NULL,
                       destinationTitle VARCHAR(128) NOT NULL,
                       destinationImageUrl VARCHAR(128) NOT NULL,
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

CREATE TABLE `save` (
                        saveDestinationId BINARY(16) NOT NULL,
                        saveFoodId BINARY(16) NOT NULL,
                        saveProfileId BINARY(16) NOT NULL,
                        saveTraditionId BINARY(16) NOT NULL,
                        INDEX(saveDestinationId),
                        INDEX(saveFoodId),
                        INDEX(saveProfileId),
                        INDEX(saveTraditionId),
                        FOREIGN KEY(saveDestinationId) REFERENCES destination(destinationId),
                        FOREIGN KEY(saveFoodId) REFERENCES food(foodId),
                        FOREIGN KEY(saveProfileId) REFERENCES tradition(traditionId),
                        FOREIGN KEY(saveTraditionId) REFERENCES profile(profileId),
                        PRIMARY KEY(saveDestinationId, saveFoodId, saveProfileId, saveTraditionId)
);