import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: 'Nik',
    lastName: 'Graf',
    email: 'nik@example.com', 
    password : '123456',
  },
  {
    firstName: 'Nilu',
    lastName: 'Grafi',
    email: 'nilu@example.com',
    password : '123456',
  },
  {
    firstName: 'Gaurav',
    lastName: 'Rai',
    email: 'gaurav@example.com',
    password : '123456',
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })