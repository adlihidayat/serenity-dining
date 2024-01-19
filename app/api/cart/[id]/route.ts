import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const body = await request.json();

        const updateCart = await prisma.carts.update({
            where: {
                id: (params.id)
            },
            data: {
                quantity: body.quantity,
                price: body.price,
            },
        });

        return NextResponse.json(updateCart, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    } finally {
        prisma.$disconnect();
    }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const findCart = await prisma.carts.findMany({
            where: {
                userEmail: (params.id)
            },
            select: {
                item: {
                    select: {
                        name: true,
                        type: true,
                        description: true,
                        price: true,
                    },
                },
                id: true,
                userEmail: true,
                quantity: true,
                price: true,
            },
        });

        return NextResponse.json(findCart, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });

    } finally {
        prisma.$disconnect();
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const deleteFood = await prisma.carts.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ "status": "cart deleted" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        prisma.$disconnect();
    }
}