import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { kv } from '@vercel/kv';

export async function POST(request) {
  try {
    const { message } = await request.json();

    // Save to Vercel KV
    const timestamp = new Date().toISOString();
    await kv.lpush('messages', JSON.stringify({ message, timestamp }));

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'briones.eric2003@gmail.com',
      subject: 'New Message from Portfolio Contact Form',
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ status: 'Message sent and saved!' });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ status: 'Error processing request' }, { status: 500 });
  }
}