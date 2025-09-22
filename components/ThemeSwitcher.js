// components/ThemeSwitcher.js
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const buttonStyle = {
    background: 'none',
    border: '1px solid var(--border-color)',
    borderRadius: '9999px',
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    lineHeight: 1,
  };

  return (
    <button onClick={toggleTheme} style={buttonStyle} title="Toggle Theme">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}