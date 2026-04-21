import { useState, useEffect } from 'react';
import PostList from './components/PostList';

function App() {
  // State for all 17.1 Exercises
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [seconds, setSeconds] = useState(0);
  const [theme, setTheme] = useState(() => {
    // Pattern 3: Get initial state from localStorage
    return localStorage.getItem('theme') || 'light';
  });

  // Exercise 1: document.title sync (Runs when count changes)
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Exercise 2 - Pattern 2: Window Resize Listener
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Exercise 2 - Pattern 3: localStorage sync
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme; // Applies 'light' or 'dark' class to body
  }, [theme]);

  // Exercise 1 - Cleanup: The Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      padding: '40px', 
      minHeight: '100vh',
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
      transition: 'all 0.3s ease' 
    }}>
      <h1>Task 17.1: All Exercises Complete</h1>
      
      <section style={{ border: '1px solid #888', margin: '10px 0', padding: '15px' }}>
        <h3>1. Counter & Title Sync</h3>
        <button onClick={() => setCount(count + 1)}>Increment ({count})</button>
      </section>

      <section style={{ border: '1px solid #888', margin: '10px 0', padding: '15px' }}>
        <h3>2. Window Width & Timer (Cleanup)</h3>
        <p>Width: {windowWidth}px | Time on Page: {seconds}s</p>
      </section>

      <section style={{ border: '1px solid #888', margin: '10px 0', padding: '15px' }}>
        <h3>3. Theme Toggle (LocalStorage)</h3>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </section>
    </div>
  );
}

export default App;
