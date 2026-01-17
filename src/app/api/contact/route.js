import { kv } from '@vercel/kv';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ message: 'Message is required' }, { status: 400 });
    }

    // 1. Save message to Vercel KV
    await kv.lpush('messages', message);

    // 2. Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or another service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'New Message from Your Website',
      text: message,
    });

    return NextResponse.json({ status: "Message sent and saved!" }, { status: 200 });

  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json({ message: 'Failed to send or save message', error: error.message }, { status: 500 });
  }
}
