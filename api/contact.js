const { kv } = require('@vercel/kv');

module.exports = async (req, res) => {
  // Enhanced logging to debug environment variables
  console.log('--- VERCEL ENVIRONMENT ---');
  console.log('VERCEL_ENV:', process.env.VERCEL_ENV);
  console.log('KV_URL is set:', !!process.env.KV_URL);
  console.log('KV_REST_API_TOKEN is set:', !!process.env.KV_REST_API_TOKEN);
  console.log('--- END VERCEL ENVIRONMENT ---');

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
    console.error('--- DETAILED ERROR ---');
    console.error('Error processing message:', error);
    console.error('KV_URL is set:', !!process.env.KV_URL);
    console.error('KV_REST_API_TOKEN is set:', !!process.env.KV_REST_API_TOKEN);
    console.error('--- END DETAILED ERROR ---');
    return res.status(500).json({
      success: false,
      message: 'Failed to process message',
      debug_info: {
        kv_url_set: !!process.env.KV_URL,
        kv_rest_api_token_set: !!process.env.KV_REST_API_TOKEN,
        error_message: error.message,
        error_stack: error.stack
      }
    });
  }
};