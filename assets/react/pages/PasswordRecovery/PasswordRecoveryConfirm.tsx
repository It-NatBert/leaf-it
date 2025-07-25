import * as React from 'react';

const PasswordRecoveryConfirmPage = ({email}: { email: string }) => {
    return (
        <div className="password-recov-confirm-page-container-mobile">
            <h1 className="title">Mot de passe oublié</h1>

            <div className="display-flex-centered flex-col">
                <p>Un mail contenant votre mot de passe vous a été envoyé à :</p>
                <p className="bold-text dark-green-text">{email}</p>
                <a className="button" href="/connexion">Connexion</a>
            </div>
        </div>
    )
};

export default PasswordRecoveryConfirmPage;
