-- CreateTable
CREATE TABLE "contractors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "is_commerce" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "requestors" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "is_follower" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contractor_id" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "folder_url" TEXT,
    "description" TEXT NOT NULL,
    "is_private" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "events_contractor_id_fkey" FOREIGN KEY ("contractor_id") REFERENCES "contractors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "event_photos" (
    "id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    CONSTRAINT "event_photos_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "music_requests" (
    "id" TEXT NOT NULL,
    "requestor_id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "music_name" TEXT NOT NULL,
    CONSTRAINT "music_requests_requestor_id_fkey" FOREIGN KEY ("requestor_id") REFERENCES "requestors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "music_requests_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "requestor_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    CONSTRAINT "contacts_requestor_id_fkey" FOREIGN KEY ("requestor_id") REFERENCES "requestors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "contractors_id_key" ON "contractors"("id");

-- CreateIndex
CREATE UNIQUE INDEX "requestors_id_key" ON "requestors"("id");

-- CreateIndex
CREATE UNIQUE INDEX "requestors_email_key" ON "requestors"("email");

-- CreateIndex
CREATE UNIQUE INDEX "events_id_key" ON "events"("id");

-- CreateIndex
CREATE UNIQUE INDEX "event_photos_id_key" ON "event_photos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "music_requests_id_key" ON "music_requests"("id");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_id_key" ON "contacts"("id");
