const { kv } = require('@vercel/kv');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    const messageData = {
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    };

    await kv.lpush('messages', JSON.stringify(messageData));

    return res.status(200).json({ success: true, message: 'Message received successfully' });
  } catch (error) {
    console.error('--- DETAILED ERROR ---');
    console.error('Error processing message:', error);
    console.error('KV_URL is set:', !!process.env.KV_URL);
    console.error('KV_REST_API_URL is set:', !!process.env.KV_REST_API_URL);
    console.error('KV_REST_API_TOKEN is set:', !!process.env.KV_REST_API_TOKEN);
    console.error('--- END DETAILED ERROR ---');
    return res.status(500).json({
      success: false,
      message: 'Failed to process message',
      debug_info: {
        kv_url_set: !!process.env.KV_URL,
        kv_rest_api_url_set: !!process.env.KV_REST_API_URL,
        kv_rest_api_token_set: !!process.env.KV_REST_API_TOKEN,
        error_message: error.message,
      }
    });
  }
};