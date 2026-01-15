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
    console.error('Error retrieving messages:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve messages',
    });
  }
};
