import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Retrieve all messages. They are stored as simple strings.
    const messages = await kv.lrange('messages', 0, -1);
    return NextResponse.json({ messages: messages }, { status: 200 });
  } catch (error) {
    console.error('Error retrieving messages from KV:', error);
    return NextResponse.json({ message: 'Failed to retrieve messages', error: error.message }, { status: 500 });
  }
}
