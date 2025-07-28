import React from 'react';
import './styles/app.scss';
import {createRoot} from 'react-dom/client';
import ConnexionPage from "./react/pages/Connexion/Connexion";
import LeftMenu from './react/components/LeftMenu/LeftMenu';
import InscriptionPage from "./react/pages/Inscription/Inscription";

import PasswordRecoveryConfirmPage from "./react/pages/PasswordRecovery/PasswordRecoveryConfirm";
import PasswordRecoveryPage from "./react/pages/PasswordRecovery/PasswordRecovery";

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
            {/* <ButtonAddTrees /> */}
            <LeftMenu/>
        </>
    );
}

const connexionContainer = document.getElementById('connexion-root');
if (connexionContainer) {
    const root = createRoot(connexionContainer);

    root.render(<ConnexionPage/>);
}

const inscriptionContainer = document.getElementById('inscription-root');
if (inscriptionContainer) {
    const root = createRoot(inscriptionContainer);

    root.render(<InscriptionPage/>);
}

const passwordRecovContainer = document.getElementById('password-recovery-root');
if (passwordRecovContainer) {
    const root = createRoot(passwordRecovContainer);

    root.render(<PasswordRecoveryPage email="monSuperMail@mail.com"/>);
}

const passwordRecovConfirmContainer = document.getElementById('password-recovery-confirmed-root');
if (passwordRecovConfirmContainer) {
    const root = createRoot(passwordRecovConfirmContainer);

    root.render(<PasswordRecoveryConfirmPage email="monSuperMail@mail.com"/>);
}

