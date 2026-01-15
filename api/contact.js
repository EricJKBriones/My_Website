const { kv } = require('@vercel/kv');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate email format
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

    return res.status(200).json({
      success: true,
      message: 'Message received successfully'
    });
  } catch (error) {
    console.error('Error processing message:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process message'
    });
  }
};

