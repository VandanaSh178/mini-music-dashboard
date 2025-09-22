// pages/api/tracks/[id].js
import { tracks } from '../../../lib/mockData';

export default function handler(req, res) {
  const { id } = req.query;
  const track = tracks.find((t) => t.id === parseInt(id));

  if (req.method === 'GET') {
    if (track) {
      res.status(200).json(track);
    } else {
      res.status(404).json({ message: `Track with id: ${id} not found.` });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}