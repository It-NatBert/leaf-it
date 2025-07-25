import * as React from 'react';
import ButtonConnexion from "../../components/Button/ButtonConnexion";
import ButtonRegister from "../../components/Button/ButtonRegister";

const InscriptionPage = () => {
    return (
        <div className="inscription-page-container-mobile">
            <h1 className="title">Inscription</h1>
            <form className="credential-form">
                <label id="userName" className="label-connexion-mobile"> <span
                    className="labels">Nom d'utilisateur</span>
                    <input type={"text"} name={"userName"}/>
                </label>

                <label id="mail" className="label-connexion-mobile"> <span className="labels">Adresse mail</span>
                    <input type={"email"} name={"mail"}/>
                </label>

                <label id="password" className="label-connexion-mobile"> <span className="labels">Mot de passe</span>
                    <input type={"password"} name={"password"}/>
                </label>

                <label id="passwordVerif" className="label-connexion-mobile"> <span className="labels">Entrez de nouveau le mot de passe</span>
                    <input type={"password"} name={"passwordVerif"}/>
                </label>

                <label id="dateOfBirth" className="label-connexion-mobile"> <span
                    className="labels">Date de naissance</span>
                    <input type={"date"} name={"dateOfBirth"}/>
                </label>
            </form>

            <ButtonRegister pseudo="" email="" password=""/>

            <p>Déjà inscrit ? <a href="/connexion" className="bold-text">Me connecter</a></p>
        </div>
    )
        ;
};

export default InscriptionPage;
