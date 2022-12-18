import React from 'react';
import { createRoot, CreateRoot } from 'react-dom/client';
import App from './app/App'

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)