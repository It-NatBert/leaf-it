import * as React from 'react';

import ButtonRegister from "../../components/Button/ButtonRegister";

const InscriptionConfirmPage = () => {
    return (
        <div className="inscription-confirm-page-container-mobile">
            <h1 className="title">Inscription</h1>

            <div className="display-flex-centered flex-col">
                <p>Vous voilà inscrit sur Leaf-It !</p>
                <p>Il ne vous reste plus qu’à vous connecter !</p>
                <a className="button" href="/connexion">Connexion</a>
            </div>
        </div>
    )
};

export default InscriptionConfirmPage;
