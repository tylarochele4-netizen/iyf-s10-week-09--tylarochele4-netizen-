import { useState, useEffect } from 'react';
import LoadingSpinner from './shared/LoadingSpinner';
import ErrorMessage from './shared/ErrorMessage';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchPosts = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
            
            if (!response.ok) {
                throw new Error('Failed to fetch posts from the server.');
            }
            
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchPosts();
    }, []);

    // Using our new shared components
    if (loading) return <LoadingSpinner text="Fetching latest posts..." />;
    if (error) return <ErrorMessage message={error} onRetry={fetchPosts} />;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Latest Community Posts</h2>
            {posts.map(post => (
                <div key={post.id} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd' }}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;
