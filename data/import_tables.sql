-- -----------------------------------------------------
-- Schema oquiz
-- -----------------------------------------------------
BEGIN;

DROP TABLE IF EXISTS 
"level",
"answer", 
"user",
"quiz",
"question",
"tag",
"quiz_has_tag";
-- -----------------------------------------------------
-- Table "level"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "level" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT NOW(),
    "updated_at" timestamptz
);
-- -----------------------------------------------------
-- Table "answer"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "answer" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "description" TEXT NOT NULL,
    "question_id" INTEGER NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT NOW(),
    "updated_at" timestamptz
);
-- -----------------------------------------------------
-- Table "quiz_user"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT NULL,
    "lastname" TEXT NULL,
    "created_at" timestamptz NOT NULL DEFAULT NOW(),
    "updated_at" timestamptz
);
-- -----------------------------------------------------
-- Table "quiz"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "quiz" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL REFERENCES "user" ("id"),
    "created_at" timestamptz NOT NULL DEFAULT NOW(),
    "updated_at" timestamptz
);
-- -----------------------------------------------------
-- Table "question"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "question" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "question" TEXT NOT NULL,
    "anecdote" TEXT NULL,
    "wiki" text NULL,
    "level_id" INTEGER NOT NULL REFERENCES "level" ("id"),
    "answer_id" INTEGER NOT NULL REFERENCES "answer" ("id"),
    "quiz_id" INTEGER NOT NULL REFERENCES "quiz" ("id"),
    "created_at" timestamptz NOT NULL DEFAULT NOW(),
    "updated_at" timestamptz
);
-- -----------------------------------------------------
-- Table "tag"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "tag" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY
    "name" text NOT NULL
    "created_at" timestamptz NOT NULL DEFAULT NOW(),
    "updated_at" timestamptz
);
-- -----------------------------------------------------
-- Table "quiz_has_tag"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "tag" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY
    "quiz_id" INTEGER NOT NULL REFERENCES "quiz" ("id"),
    "tag_id" INTEGER NOT NULL REFERENCES "tag" ("id"),
    "created_at" timestamptz NOT NULL DEFAULT NOW(),
    "updated_at" timestamptz
    UNIQUE ("quiz_id", "tag_id")
);
ALTER TABLE "answer"
    ADD FOREIGN KEY ("question_id") REFERENCES "question" ("id");

COMMIT;




