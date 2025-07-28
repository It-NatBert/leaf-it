import * as React from 'react';
import ButtonConnexion from "../../components/Button/ButtonConnexion";

const PasswordRecoveryPage = ({email}: { email: string }) => {
    return (
        <div className="password-recov-page-container-mobile">
            <h1 className="title">Mot de passe oublié</h1>

            <div className="display-flex-centered flex-col sub-container">
                <form>
                    <label id="mail" className="label-connexion-mobile"> <span className="labels">Adresse mail</span>
                        <input type={"text"} name={"mail"}/>
                    </label>
                </form>

                <a className="button">Récupérer</a>
            </div>

        </div>
    )
};

export default PasswordRecoveryPage;
