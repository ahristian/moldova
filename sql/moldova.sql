
DROP TABLE IF EXISTS tradition;
DROP TABLE IF EXISTS food;
DROP TABLE IF EXISTS destination;
DROP TABLE IF EXISTS county;

CREATE TABLE county (
                         countyId BINARY(16) NOT NULL,
                         countyName  VARCHAR(255) NOT NULL,
                         UNIQUE(countyName),
                         PRIMARY KEY(countyId)
);

CREATE TABLE destination (
                       destinationId BINARY(16) NOT NULL,
                       destinationCountyId BINARY(16) NOT NULL,
                       destinationTitle VARCHAR(128) NOT NULL,
                       destinationDescription VARCHAR(1000) NOT NULL,
                       destinationImageUrl VARCHAR(128) NOT NULL,
                       FOREIGN KEY(destinationCountyId) REFERENCES county(countyId),
                       PRIMARY KEY(destinationId)
);

CREATE TABLE food (
                       foodId BINARY(16) NOT NULL,
                       foodCountyId BINARY(16) NOT NULL,
                       foodTitle VARCHAR(128) NOT NULL,
                       foodContent VARCHAR(1000) NOT NULL,
                       foodImageUrl VARCHAR(128) NOT NULL,
                       FOREIGN KEY(foodCountyId) REFERENCES county(countyId),
                       PRIMARY KEY (foodId)
);

CREATE TABLE tradition (
                        traditionId BINARY(16) NOT NULL,
                        traditionCountyId BINARY(16) NOT NULL,
                        traditionTitle VARCHAR(128) NOT NULL,
                        traditionContent VARCHAR(1000) NOT NULL,
                        traditionImageUrl VARCHAR(128) NOT NULL,
                        FOREIGN KEY(traditionCountyId) REFERENCES county(countyId),
                        PRIMARY KEY(traditionId)
);