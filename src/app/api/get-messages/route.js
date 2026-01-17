import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET() {
  try {
    const messages = await kv.lrange('messages', 0, -1);
    const parsedMessages = messages.map(msg => JSON.parse(msg).message);
    return NextResponse.json({ messages: parsedMessages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ messages: [] }, { status: 500 });
  }
}