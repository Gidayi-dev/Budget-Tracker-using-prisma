-- CreateTable
CREATE TABLE "Budget" (
    "item" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("item")
);
