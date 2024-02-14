
export default function handler(req, res) {
    const { method, body } = req;
  
    if (method === 'GET') {
      res.status(200).json({ method, message: 'GET request' });
    } else if (method === 'POST') {
      res.status(200).json({ method, message: 'POST request', body });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  