import React from 'react';

export default function Error({ error }) {
    return (
        <div className="container">
        <div className="error-container">
            <h1 className="header">{error}</h1>
        </div>
        </div>
    );
}
