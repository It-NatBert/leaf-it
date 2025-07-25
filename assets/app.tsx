import React from 'react';
import './styles/app.scss';
import {createRoot} from 'react-dom/client';
import {Salut} from './react/components/Salut/Salut';
import Searchbar from './react/components/SearchBar/SearchBar';
import ButtonPublish from './react/components/Button/ButtonPublish';
import ButtonConnexion from './react/components/Button/ButtonConnexion';
import ButtonRegister from './react/components/Button/ButtonRegister';
import ConnexionPage from "./react/pages/Connexion/Connexion";
import ButtonAddTrees from './react/components/Button/ButtonAddTrees';
import LeftMenu from './react/components/Left-Menu/LeftMenu';

const rootEl = document.getElementById('react-root');
if (rootEl) {
    const root = createRoot(rootEl);
    root.render(
        <>
            {/* <Salut /> */}
            {/* <Searchbar /> */}
            {/* <ButtonPublish /> */}
            {/* <ButtonConnexion /> */}
            {/* <ButtonRegister /> */}
            <ButtonAddTrees />
            <LeftMenu />
        </>
    );
}

const connexionContainer = document.getElementById('connexion-root');

if (connexionContainer) {
    const root = createRoot(connexionContainer);

    root.render(<ConnexionPage/>);
}
