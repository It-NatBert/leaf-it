import React from 'react';
import './styles/app.scss';
import {createRoot} from 'react-dom/client';
import {Salut} from './react/components/Salut/Salut';
import Searchbar from './react/components/SearchBar/SearchBar';
import ButtonRedaction from './react/components/Button/ButtonRedaction';
import ButtonConnexion from './react/components/Button/ButtonConnexion';
import ButtonRegister from './react/components/Button/ButtonRegister';
import ConnexionPage from "./react/pages/Connexion/Connexion";
import ButtonAddTrees from './react/components/Button/ButtonAddTrees';
import Feed from './react/pages/Feed/Feed';

const rootEl = document.getElementById('react-root');
if (rootEl) {
    const root = createRoot(rootEl);
    root.render(
        <>
            {/* <Salut /> */}
            {/* <Searchbar /> */}
            {/* <ButtonRedaction /> */}
            {/* <ButtonConnexion /> */}
            {/* <ButtonRegister /> */}
            {/* <ButtonAddTrees /> */}
            <Feed />
        </>
    );
}

const connexionContainer = document.getElementById('connexion-root');

if (connexionContainer) {
    const root = createRoot(connexionContainer);

    root.render(<ConnexionPage/>);
}
