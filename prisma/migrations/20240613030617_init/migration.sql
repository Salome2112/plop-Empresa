-- CreateTable
CREATE TABLE "chupete" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "flavor" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "chupete_pkey" PRIMARY KEY ("id")
);
