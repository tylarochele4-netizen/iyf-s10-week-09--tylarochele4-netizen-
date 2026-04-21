import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 1. Update the tab title whenever 'count' changes
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(`The count is now: ${count}`);
  }, [count]);

  // 2. Event Listener: Track window width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup: This removes the listener if the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array means this setup only runs ONCE on mount

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Week 09: React Advanced</h1>
      <hr />
      
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Task 17.1: useEffect & State</h2>
        <p>Current Count: <strong>{count}</strong></p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Increment Count
        </button>
        <p><small>(Check the browser tab title as you click!)</small></p>
      </div>

      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>
        <h2>Window Width Tracker</h2>
        <p>Your current window width is: <strong>{windowWidth}px</strong></p>
        <p><small>Try resizing your browser window to see this update live.</small></p>
      </div>
    </div>
  );
}

export default App;
