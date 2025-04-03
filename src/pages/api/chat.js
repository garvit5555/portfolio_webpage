import { sendMessageToGroq } from '../../utils/groq';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    // We don't need to add systemContext here as it's now handled in sendMessageToGroq function
    const response = await sendMessageToGroq(messages);
    return res.status(200).json({ response });
  } catch (error) {
    console.error('Error in chat API:', error);
    return res.status(500).json({ error: 'Failed to get a response' });
  }
} 