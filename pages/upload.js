// pages/upload.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useAuth } from '../context/AuthContext';
import Spinner from '../components/Spinner';

export default function UploadPage() {
  const [trackTitle, setTrackTitle] = useState('');
  const [artistName, setArtistName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [genre, setGenre] = useState('');
  const router = useRouter();
  const { isLoggedIn, loading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && !isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, authLoading, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTrackData = { title: trackTitle, artist: artistName, releaseDate, genre };
    await fetch('/api/tracks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTrackData),
    });
    router.push('/dashboard');
  };
  
  if (authLoading || !isLoggedIn) {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>Upload New Track</title>
      </Head>
      <h1>Upload New Track</h1>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem'}}>
        <input type="text" placeholder="Track Title" value={trackTitle} onChange={(e) => setTrackTitle(e.target.value)} required />
        <input type="text" placeholder="Artist Name" value={artistName} onChange={(e) => setArtistName(e.target.value)} required />
        <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />
        <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        <button type="submit">Upload Track</button>
      </form>
    </div>
  );
}