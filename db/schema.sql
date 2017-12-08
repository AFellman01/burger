DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  -- This sets up the first 'id' column, which appears to be standard procedure
  burger_name VARCHAR (45) NOT NULL,
  -- sets up a column that allows for 45 characters of any sort.
  devoured BOOLEAN NOT NULL DEFAULT 0,
  -- looks for a true/false value, defaulting to false
  date TIMESTAMP not null,
  -- apparently, this sets a timestamp.
  PRIMARY KEY (id)
  -- sets the id as the primary key, which is also necessary in order to allow for the auto increment function to work.
)

-- I'm actually kind of proud of this one. I made it by guesswork, and I got it. I think I'm learning! Slowly.
