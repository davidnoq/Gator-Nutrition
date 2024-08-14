import { NextResponse } from 'next/server';
import { contactForm } from './actions';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const data = await req.json();

        if (data.action === 'contactForm') {
            const response = await contactForm(
                data.firstName,
                data.lastName,
                data.email,
                data.message
            );
            
            if (response === null) {
                console.error('Error submitting contact form.');
                return NextResponse.json({ message: 'Error submitting contact form.' }, { status: 400 });
            }

            return NextResponse.json({ message: response }, { status: 200 });
        } else if (data.action === 'subscribe') {
            const existingUser = await prisma.user.findUnique({
                where: { email: data.email },
            });

            if (existingUser) {
                return NextResponse.json({ message: 'Email is already subscribed.' }, { status: 400 });
            }

            await prisma.user.create({
                data: {
                    firstName: data.firstName,
                    email: data.email,
                },
            });
            
            return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });
        }

        return NextResponse.json({ message: 'Invalid action.' }, { status: 400 });
    } catch (error) {
        console.error('Error in POST request:', error);
        return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
    }
}
