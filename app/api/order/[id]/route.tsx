import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const editStatus = await prisma.orders.update({
      where: {
        id: params.id,
      },
      data: {
        status: true,
      },
    });

    return NextResponse.json({ status: "order complete" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const findCart = await prisma.orders.findMany({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(findCart, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
}
