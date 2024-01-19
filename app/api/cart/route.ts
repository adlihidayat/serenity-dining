import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const newCart = await prisma.carts.create({
            data: {
                userEmail: body.userEmail,
                itemId: body.itemId,
                quantity: body.quantity,
                price: body.price,
            },
        });

        return NextResponse.json(newCart, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    }
}

export async function GET(req: any) {
    try {
        const queryParams = req.url.includes('?')
            ? Object.fromEntries(new URLSearchParams(req.url.split('?')[1]))
            : {};

        const userEmail = queryParams.userId?.trim();
        const itemId = queryParams.itemId?.trim();


        const existingCart = await prisma.carts.findFirst({
            where: {
                itemId: String(itemId),
                userEmail: userEmail,
            },
        });

        const notFounded = {
            id: "",
            userEmail: "",
            quantity: 0,
            price: 0,
        };

        if (existingCart) {
            return NextResponse.json(existingCart, { status: 200 });
        } else {
            return NextResponse.json(notFounded, { status: 200 });
        }

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });

    } finally {
        prisma.$disconnect();
    }
}
