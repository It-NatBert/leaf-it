import React from 'react';
import './styles/app.scss';
import {createRoot} from 'react-dom/client';
import {Salut} from './react/components/Salut/Salut';

const rootEl = document.getElementById('react-root');
if (rootEl) {
    const root = createRoot(rootEl);
    root.render(<Salut/>);
}
