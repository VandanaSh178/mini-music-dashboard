// pages/api/tracks.js
import { tracks } from '../../lib/mockData';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(tracks);
  } else if (req.method === 'POST') {
    const newTrack = {
      id: Date.now(),
      title: req.body.title,
      artist: req.body.artist,
      releaseDate: req.body.releaseDate,
      genre: req.body.genre,
      status: 'Submitted',
    };
    tracks.push(newTrack);
    res.status(201).json(newTrack);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}