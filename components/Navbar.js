// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the router
import ThemeSwitcher from './ThemeSwitcher';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const { logout } = useAuth();
  const router = useRouter(); // Get the router instance

  return (
    <nav className={styles.navbar}>
      <Link href="/dashboard" className={styles.brand}>
        🎵 MusicDistro
      </Link>
      <div className={styles.navLinks}>
        {/* Add active class if the path matches */}
        <Link href="/dashboard" className={router.pathname === '/dashboard' ? styles.active : ''}>
          Dashboard
        </Link>
        <Link href="/upload" className={router.pathname === '/upload' ? styles.active : ''}>
          Upload Track
        </Link>
        <button onClick={logout} className={styles.logoutButton}>Logout</button>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}