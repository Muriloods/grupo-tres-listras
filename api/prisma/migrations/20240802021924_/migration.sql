/*
  Warnings:

  - A unique constraint covering the columns `[instagram]` on the table `requestors` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "requestors_instagram_key" ON "requestors"("instagram");
