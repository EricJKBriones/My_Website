const { kv } = require('@vercel/kv');

module.exports = async (req, res) => {
  console.log('Contact function invoked.');
  console.log('Request method:', req.method);

  if (req.method !== 'POST') {
    console.log('Method not allowed');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log('Request body:', req.body);
  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    console.log('Validation failed: Missing fields.');
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('Validation failed: Invalid email.');
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    console.log('Attempting to save message to KV store.');
    const messageData = {
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    };

    const result = await kv.lpush('messages', JSON.stringify(messageData));
    console.log('Message saved to KV store. Result:', result);

    return res.status(200).send('OK');
  } catch (error) {
    console.error('Error processing message:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process message'
    });
  }
};