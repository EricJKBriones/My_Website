import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// import { kv } from '@vercel/kv';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Save to Vercel KV
    // const timestamp = new Date().toISOString();
    // await kv.lpush('messages', JSON.stringify({ name, email, subject, message, timestamp }));

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'briones.eric2003@gmail.com',
      subject: `New Message from ${name}: ${subject}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ status: 'Message sent!' });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ status: 'Error processing request' }, { status: 500 });
  }
}