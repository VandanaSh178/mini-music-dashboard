// pages/track/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useAuth } from '../../context/AuthContext';
import Spinner from '../../components/Spinner';
import StatusBadge from '../../components/StatusBadge';

export default function TrackDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [track, setTrack] = useState(null);
  const { isLoggedIn, loading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && !isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, authLoading, router]);

  useEffect(() => {
    if (id && isLoggedIn) {
      fetch(`/api/tracks/${id}`)
        .then((res) => res.json())
        .then((data) => setTrack(data));
    }
  }, [id, isLoggedIn]);
  
  if (authLoading || !isLoggedIn || !track) {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  }

  if (track.message) {
    return <div className="container"><p>Track not found.</p></div>;
  }

  return (
    <div className="container">
      <Head>
        <title>{track.title} - Music App</title>
      </Head>
      <Link href="/dashboard" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
        &larr; Back to Dashboard
      </Link>
      <h1>{track.title}</h1>
      <div style={{fontSize: '1.2rem', color: 'var(--subtle-text-color)'}}>{track.artist}</div>
      <div style={{marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <div><strong>Release Date:</strong> {track.releaseDate}</div>
        <div><strong>Genre:</strong> {track.genre}</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><strong>Status:</strong> <StatusBadge status={track.status} /></div>
      </div>
    </div>
  );
}