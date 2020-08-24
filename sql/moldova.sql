
DROP TABLE IF EXISTS tradition;
DROP TABLE IF EXISTS food;
DROP TABLE IF EXISTS destination;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
                             profileId BINARY(16) NOT NULL,
                             profileActivationToken VARCHAR(250) NOT NULL,
                             profileEmail VARCHAR(250) NOT NULL,
                             profileHandle VARCHAR(250) NOT NULL,
                             profileName VARCHAR(250) NOT NULL,
                             UNIQUE KEY (profileId),
                             UNIQUE KEY  (profileEmail),
                             PRIMARY KEY(profileId)
);

CREATE TABLE destination (
                       destinationId BINARY(16) NOT NULL,
                       destinationProfileId BINARY(16) NOT NULL,
                       destinationContact VARCHAR(250) NOT NULL,
                       destinationDescription VARCHAR(1000) NOT NULL,
                       destinationLocation VARCHAR(250) NOT NULL,
                       destinationTitle VARCHAR(128) NOT NULL,
                       destinationImageUrl VARCHAR(128) NOT NULL,
                       INDEX (destinationProfileId),
                       FOREIGN KEY(destinationProfileId) REFERENCES profile(profileId),
                       PRIMARY KEY(destinationId)
);

CREATE TABLE food (
                       foodId BINARY(16) NOT NULL,
                       foodProfileId BINARY(16) NOT NULL,
                       foodTitle VARCHAR(128) NOT NULL,
                       foodContent VARCHAR(1000) NOT NULL,
                       foodImageUrl VARCHAR(128) NOT NULL,
                       INDEX (foodProfileId),
                       FOREIGN KEY(foodProfileId) REFERENCES profile(profileId),
                       PRIMARY KEY (foodId)
);

CREATE TABLE tradition (
                        traditionId BINARY(16) NOT NULL,
                        traditionProfileId BINARY(16) NOT NULL,
                        traditionTitle VARCHAR(128) NOT NULL,
                        traditionContent VARCHAR(1000) NOT NULL,
                        traditionImageUrl VARCHAR(128) NOT NULL,
                        INDEX (traditionProfileId),
                        FOREIGN KEY(traditionProfileId) REFERENCES profile(profileId),
                        PRIMARY KEY(traditionId)
);