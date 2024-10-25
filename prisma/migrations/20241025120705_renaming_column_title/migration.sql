/*
  Warnings:

  - The primary key for the `Budget` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `item` on the `Budget` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Budget` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Budget` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Budget" DROP CONSTRAINT "Budget_pkey",
DROP COLUMN "item",
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Budget_title_key" ON "Budget"("title");
