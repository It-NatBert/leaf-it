import React from 'react';
import './styles/app.scss';
import {createRoot} from 'react-dom/client';
import ConnexionPage from "./react/pages/Connexion/Connexion";
import InscriptionPage from "./react/pages/Inscription/Inscription";
import GestionCompte from "./react/pages/GestionCompte/Gestion";
import PasswordRecoveryConfirmPage from "./react/pages/PasswordRecovery/PasswordRecoveryConfirm";
import PasswordRecoveryPage from "./react/pages/PasswordRecovery/PasswordRecovery";
import InscriptionConfirmPage from "./react/pages/Inscription/InscriptionConfirm";
import NewLeafPage from "./react/pages/NewLeaf/NewLeaf";

const rootEl = document.getElementById('react-root');
if (rootEl) {
    const root = createRoot(rootEl);
    root.render(
        <>
            <GestionCompte pseudo='JohnDoe' email='john.doe@example.com' password='password123'/>
        </>
    );
}

const inscriptionContainer = document.getElementById('inscription-root');
if (inscriptionContainer) {
    const root = createRoot(inscriptionContainer);

    root.render(<InscriptionPage/>);
}

const inscriptionConfirmContainer = document.getElementById('inscription-confirm-root');
if (inscriptionConfirmContainer) {
    const root = createRoot(inscriptionConfirmContainer);

    root.render(<InscriptionConfirmPage/>);
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

const newLeafContainer = document.getElementById('new-leaf-root');
if (newLeafContainer) {

    const user = newLeafContainer.dataset.props ? JSON.parse(newLeafContainer.dataset.props) : null;

    const root = createRoot(newLeafContainer);

    root.render(<NewLeafPage user={user}/>);
}
