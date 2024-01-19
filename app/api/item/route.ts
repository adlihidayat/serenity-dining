import { PrismaClient } from '@prisma/client';
import { NextResponse, } from 'next/server';

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const getItems = await prisma.items.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        type: true,
        price: true,
      },
    })
    return NextResponse.json(getItems, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });

  } finally {
    prisma.$disconnect();
  }
};