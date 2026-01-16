const { kv } = require('@vercel/kv');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const messages = await kv.lrange('messages', 0, -1);
    return res.status(200).json({
      success: true,
      messages: messages.map(msg => JSON.parse(msg)),
    });
  } catch (error) {
    console.error('--- DETAILED ERROR ---');
    console.error('Error retrieving messages:', error);
    console.error('KV_URL is set:', !!process.env.KV_URL);
    console.error('KV_REST_API_TOKEN is set:', !!process.env.KV_REST_API_TOKEN);
    console.error('--- END DETAILED ERROR ---');
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve messages',
      debug_info: {
        kv_url_set: !!process.env.KV_URL,
        kv_rest_api_token_set: !!process.env.KV_REST_API_TOKEN,
        error_message: error.message,
        error_stack: error.stack
      }
    });
  }
};
