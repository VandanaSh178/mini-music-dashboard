// pages/dashboard.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import StatusBadge from '../components/StatusBadge';
import Spinner from '../components/Spinner';

export default function DashboardPage() {
  // ... (all the existing state and useEffect hooks remain the same)
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { isLoggedIn, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, authLoading, router]);

  useEffect(() => {
    if (isLoggedIn) {
      fetch('/api/tracks')
        .then((res) => res.json())
        .then((data) => {
          setTracks(data);
          setIsLoading(false);
        });
    }
  }, [isLoggedIn]);

  const filteredTracks = tracks.filter(track =>
    track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (authLoading || isLoading || !isLoggedIn) {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>Dashboard</title>
      </Head>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h1>Music Dashboard</h1>
        <Link href="/upload" className="action-link">
          + Upload New Track
        </Link>
      </div>

      {/* UPDATED: Search Input is now wrapped */}
      <div className="search-box-wrapper">
        <input
          type="text"
          id="search-box"
          placeholder="Search by title or artist..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTracks.map((track) => (
            <tr key={track.id}>
              <td>
                <Link href={`/track/${track.id}`}>{track.title}</Link>
              </td>
              <td>{track.artist}</td>
              <td>
                <StatusBadge status={track.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}