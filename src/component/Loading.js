import React from 'react';

const Loading = () => (
    <div className="container">
    <div className="loading loading-container" >
        <h1 className="header">Loading</h1>
        <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube" />
            <div className="sk-cube2 sk-cube" />
            <div className="sk-cube4 sk-cube" />
            <div className="sk-cube3 sk-cube" />
        </div>
    </div>
    </div>
);

export default Loading;