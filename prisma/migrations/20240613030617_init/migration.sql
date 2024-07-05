--Create table 
CREATE TABLE "chupete" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "flavor" TEXT NOT NULL,
    "price" NUMERIC(10, 2) NOT NULL
);

