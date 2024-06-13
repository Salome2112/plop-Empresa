import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
 
  const chupete1 = await prisma.chupete.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Chupete de Fresa',
      flavor: 'Fresa',
      price: 1.50,
    },
  });

  const chupete2 = await prisma.chupete.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Chupete de Limón',
      flavor: 'Limón',
      price: 1.25,
    },
  });

  const chupete3 = await prisma.chupete.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Chupete de Naranja',
      flavor: 'Naranja',
      price: 1.75,
    },
  });

  console.log({ chupete1, chupete2, chupete3 });
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
 
    await prisma.$disconnect();
  });
