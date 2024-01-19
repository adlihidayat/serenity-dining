import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

const stripe = require("stripe")(process.env.STRIPE_SECRET);
const getActiveProducts = async () => {
    const checkProducts = await stripe.products.list();
    const availableProducts = checkProducts.data.filter(
        (product: any) => product.active === true
    );
    return availableProducts;
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const newCart = await prisma.orders.create({
            data: {
                userEmail: body.userEmail,
                name: body.name,
                price: body.price,
                items: body.items,
                type: body.type,
                place: body.place,
                Date: body.Date,
                paid: body.paid,
                status: false
            },
        });

        let activeProducts = await getActiveProducts();
        try {
            for (const product of body.data) {
                const stripeProduct = activeProducts?.find(
                    (stripeProduct: any) =>
                        stripeProduct?.name?.toLowerCase() == product?.name?.toLowerCase()
                );

                if (stripeProduct == undefined) {
                    const prod = await stripe.products.create({
                        name: product.name,
                        default_price_data: {
                            unit_amount: product.price * 100,
                            currency: "usd",
                        },
                    });
                }
            }
        } catch (error) {
            console.error("Error in creating a new product", error);
            throw error;
        }

        activeProducts = await getActiveProducts();
        let stripeItems: any = [];

        for (const product of body.data) {
            const stripeProduct = activeProducts?.find(
                (prod: any) => prod?.name?.toLowerCase() == product?.name?.toLowerCase()
            );

            if (stripeProduct) {
                stripeItems.push({
                    price: stripeProduct?.default_price,
                    quantity: product?.quantity,
                });
            }
        }
        console.log(newCart.id)
        const session = await stripe.checkout.sessions.create({
            line_items: stripeItems,
            mode: "payment",
            success_url: `http://localhost:3000/paymentSuccess?id=${newCart.id}`,
            cancel_url: "http://localhost:3000/cancel",
        });

        console.log(session.url)
        return NextResponse.json(session.url, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });

    }
}