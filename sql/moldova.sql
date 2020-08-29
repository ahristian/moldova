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


CREATE TABLE destination (
                       destinationId BINARY(16) NOT NULL,
                       destinationContact VARCHAR(550) NOT NULL,
                       destinationDescription BLOB NOT NULL,
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