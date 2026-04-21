import React from 'react';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from './shared/LoadingSpinner';
import ErrorMessage from './shared/ErrorMessage';

function PostList() {
    const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Community Posts (via Custom Hook)</h2>
            {posts.map(post => (
                <div key={post.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
                    <h4>{post.title}</h4>
                </div>
            ))}
        </div>
    );
}

export default PostList;
