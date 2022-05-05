import React from 'react';
import App from './App';

import { createRoot } from 'react-dom/client';

// updated the render method to become able to work with React v.18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab='home' />);
