import * as React from 'react';
import ButtonConnexion from "../../components/Button/ButtonConnexion";

const ConnexionPage = () => {
    return (
        <div className="connexion-page-container-mobile">
            <h1 className="title">Connexion</h1>
            <form>
                <label id="mail" className="label-connexion-mobile"> <span className="labels">Adresse mail</span>
                    <input type={"text"} name={"mail"}/>
                </label>

                <label id="password" className="label-connexion-mobile"> <span className="labels">Mot de passe</span>
                    <input type={"password"} name={"password"}/>
                    <a href="/password-recovery">J'ai oublié mon mot de passe</a>
                </label>
            </form>

            <ButtonConnexion email="test@mail.com" password="1234"/>
        </div>
    );
};

export default ConnexionPage;
