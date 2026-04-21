import React from 'react';
function ErrorMessage({ message, onRetry }) {
    return (
        <div style={{ color: 'red', border: '1px solid red', padding: '15px', borderRadius: '5px' }}>
            <span>⚠️ Error: </span>
            <p>{message}</p>
            {onRetry && (
                <button onClick={onRetry} style={{ marginTop: '10px' }}>
                    Try Again
                </button>
            )}
        </div>
    );
}
export default ErrorMessage;
