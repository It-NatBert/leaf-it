import React from 'react';
import './styles/app.scss';
import {createRoot} from 'react-dom/client';
import {Salut} from './react/components/Salut/Salut';
import Searchbar from './react/components/SearchBar/SearchBar';
import ButtonPublish from './react/components/Button/ButtonPublish';
import ButtonConnexion from './react/components/Button/ButtonConnexion';
import ButtonRegister from './react/components/Button/ButtonRegister';

const rootEl = document.getElementById('react-root');
if (rootEl) {
    const root = createRoot(rootEl);
    root.render(
        <>
            {/* <Salut /> */}
            {/* <Searchbar /> */}
            {/* <ButtonPublish /> */}
            {/* <ButtonConnexion /> */}
            <ButtonRegister />
        </>
    );
   
}
