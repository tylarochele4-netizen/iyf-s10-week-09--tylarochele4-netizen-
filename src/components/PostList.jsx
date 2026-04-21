import { useState, useEffect } from 'react';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                // Fetching from the API
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
                
                if (!response.ok) {
                    throw new Error('Something went wrong while fetching data.');
                }
                
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchPosts();
    }, []); // Empty array ensures it only fetches once when the page loads

    if (loading) return <div style={{ textAlign: 'center' }}>🔄 Loading awesome posts...</div>;
    if (error) return <div style={{ color: 'red' }}>⚠️ Error: {error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Latest Community Posts</h2>
            <div style={{ display: 'grid', gap: '15px' }}>
                {posts.map(post => (
                    <div key={post.id} style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
                        <h3 style={{ textTransform: 'capitalize' }}>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostList;
