-- AlterTable
ALTER TABLE "music_requests" ADD COLUMN "dedication" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_requestors" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "instagram" TEXT,
    "is_follower" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_requestors" ("email", "id", "instagram", "is_follower", "name") SELECT "email", "id", "instagram", "is_follower", "name" FROM "requestors";
DROP TABLE "requestors";
ALTER TABLE "new_requestors" RENAME TO "requestors";
CREATE UNIQUE INDEX "requestors_id_key" ON "requestors"("id");
CREATE UNIQUE INDEX "requestors_email_key" ON "requestors"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
