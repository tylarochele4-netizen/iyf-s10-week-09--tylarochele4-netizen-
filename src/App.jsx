import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage'; // Import your custom hook
import Home from './pages/Home';
import About from './pages/About';
import CreatePost from './pages/CreatePost';
import PostList from './components/PostList';
import Button from './components/shared/Button';

function App() {
  // Use your custom hook from Task 18.1
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const appStyle = {
    minHeight: '100vh',
    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#000000',
    fontFamily: 'sans-serif',
    transition: 'all 0.3s ease'
  };

  return (
    <Router>
      <div style={appStyle}>
        <nav style={{ padding: '20px', borderBottom: '1px solid #444', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Link to="/" style={{ marginRight: '15px', color: 'inherit' }}>Home</Link>
            <Link to="/posts" style={{ marginRight: '15px', color: 'inherit' }}>Posts</Link>
            <Link to="/create" style={{ marginRight: '15px', color: 'inherit' }}>Create</Link>
            <Link to="/about" style={{ color: 'inherit' }}>About</Link>
          </div>
          
          {/* Using your custom hook logic here */}
          <Button onClick={toggleTheme} variant="secondary">
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </Button>
        </nav>

        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
