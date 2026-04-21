import React from 'react';
function LoadingSpinner({ text = "Loading..." }) {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <div className="spinner">🔄</div> {/* You can add a CSS spinner later */}
            <p>{text}</p>
        </div>
    );
}
export default LoadingSpinner;
