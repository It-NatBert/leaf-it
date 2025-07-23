import React from 'react';
import './styles/app.css';
import { createRoot } from 'react-dom/client';
import { Salut } from './js/components/Salut';

const rootEl = document.getElementById('react-root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(<Salut />);
}