-- USE keepr23;

-- CREATE TABLE vaults (
--     id int NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     description VARCHAR(255) NOT NULL,
--     userId VARCHAR(255),
--     INDEX userId (userId),  
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE keeps (
--     id int NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     description VARCHAR(255) NOT NULL,
--     userId VARCHAR(255),
--     img VARCHAR(255),
--     isPrivate TINYINT,
--     views INT DEFAULT 0,
--     shares INT DEFAULT 0,
--     keeps INT DEFAULT 0,
--     INDEX userId (userId),
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE vaultkeeps (
--     id int NOT NULL AUTO_INCREMENT,
--     vaultId int NOT NULL,
--     keepId int NOT NULL,
--     userId VARCHAR(255) NOT NULL,

--     PRIMARY KEY (id),
--     INDEX (vaultId, keepId),
--     INDEX (userId),

--     FOREIGN KEY (vaultId)
--         REFERENCES vaults(id)
--         ON DELETE CASCADE,

--     FOREIGN KEY (keepId)
--         REFERENCES keeps(id)
--         ON DELETE CASCADE
-- )


-- -- -- USE THIS LINE FOR GET KEEPS BY VAULTID
-- SELECT k.* FROM vaultkeeps vk
-- INNER JOIN keeps k ON k.id = vk.keepId 
-- WHERE (vaultId = @vaultId AND vk.userId = @userId) 



-- -- -- USE THIS TO CLEAN OUT YOUR DATABASE
-- DROP TABLE IF EXISTS vaultkeeps;
-- DROP TABLE IF EXISTS vaults;
-- DROP TABLE IF EXISTS keeps;
-- DROP TABLE IF EXISTS users;


-- INSERT INTO keeps 
-- (userId, name, description, img, isPrivate)
-- VALUES
-- ("Fake userId", "Fake Name", "Fake Description", "https://picsum.photos/300/400", 0);

-- INSERT INTO vaults 
-- (userId, name, description)
-- VALUES
-- ("auth0|5e3dcc35fc624b0e8060c777", "new Fake Name", "new Fake Description");

-- INSERT INTO vaultkeeps
-- (userId, keepId, vaultId)
-- VALUES
-- ("Fake userId", 17, 9);

-- SELECT * FROM `keepr23`.`keeps` LIMIT 100;
-- SELECT * FROM `keepr23`.`vaults` LIMIT 100;
-- SELECT * FROM `keepr23`.`vaultkeeps` LIMIT 100;

-- DELETE FROM keeps WHERE id = 83;

-- UPDATE keeps SET name = "Kitchen Designs", img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-kitchen-3-1549042754.jpg", isPrivate = 0, views = @Views, shares = @Shares, keeps = @Keeps
-- WHERE id = 85;