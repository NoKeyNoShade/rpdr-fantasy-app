CREATE TABLE league (
	id SERIAL NOT NULL PRIMARY KEY,
	label VARCHAR(255),
	active BOOLEAN NOT NULL DEFAULT 'f',
	week INT NOT NULL DEFAULT 1,
	season_id VARCHAR(255) NOT NULL,
	created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
	deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE "user" (
  id SERIAL NOT NULL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255),
  salt VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
	deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE user_league_role (
  "type" VARCHAR(255) PRIMARY KEY
);

INSERT INTO user_league_role ("type")
  VALUES ('default'), ('admin');

CREATE TABLE user_league (
  league_id INT REFERENCES league(id),
  "user_id" INT REFERENCES "user"(id),
  "role" VARCHAR(255) REFERENCES user_league_role("type"),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
	deleted_at TIMESTAMP WITH TIME ZONE
);