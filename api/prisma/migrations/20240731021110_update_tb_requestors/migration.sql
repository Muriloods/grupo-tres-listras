/*
  Warnings:

  - Added the required column `name` to the `requestors` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_requestors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "is_follower" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_requestors" ("email", "id", "instagram", "is_follower") SELECT "email", "id", "instagram", "is_follower" FROM "requestors";
DROP TABLE "requestors";
ALTER TABLE "new_requestors" RENAME TO "requestors";
CREATE UNIQUE INDEX "requestors_id_key" ON "requestors"("id");
CREATE UNIQUE INDEX "requestors_email_key" ON "requestors"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
