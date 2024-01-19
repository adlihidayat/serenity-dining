import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  try {
    const deleteFood = await prisma.carts.deleteMany({
      where: { userEmail: params.email },
    });

    return NextResponse.json({ status: "cart deleted" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
}
