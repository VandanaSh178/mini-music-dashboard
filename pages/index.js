// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const { login, isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/dashboard');
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    // Add the custom class for the background image
    document.body.classList.add('login-page');
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login();
    } else {
      alert('Please enter a username.');
    }
  };

  return (
    <div>
      <Head>
        <title>Login - Music Dashboard</title>
      </Head>
      {/* Use the new glass-container style */}
      <main className="glass-container">
        <h1>Welcome</h1>
        <form onSubmit={handleLogin} className="login-form" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem'}}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password (mock)" 
          />
          <button type="submit">Login</button>
        </form>
      </main>
    </div>
  );
}