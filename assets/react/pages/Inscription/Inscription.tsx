import * as React from 'react';
import { useState } from 'react';

import ButtonRegister from "../../components/Button/ButtonRegister";

const InscriptionPage = () => {

    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerif, setPasswordVerif] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    return (
        <div className="inscription-page-container-mobile">
            <h1 className="title">Inscription</h1>
            <form className="credential-form">
                <label id="userName" className="label-connexion-mobile"> <span
                    className="labels">Nom d'utilisateur</span>
                    <input type={"text"} name={"userName"} value={pseudo} onChange={(e) => setPseudo(e.target.value)}/>
                </label>

                <label id="mail" className="label-connexion-mobile"> <span className="labels">Adresse mail</span>
                    <input type={"email"} name={"mail"} value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <label id="password" className="label-connexion-mobile"> <span className="labels">Mot de passe</span>
                    <input type={"password"} name={"password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <label id="passwordVerif" className="label-connexion-mobile"> <span className="labels">Entrez de nouveau le mot de passe</span>
                    <input type={"password"} name={"passwordVerif"} value={passwordVerif} onChange={(e) => setPasswordVerif(e.target.value)}/>
                </label>

                <label id="dateOfBirth" className="label-connexion-mobile"> <span
                    className="labels">Date de naissance</span>
                    <input type={"date"} name={"dateOfBirth"} value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
                </label>
            </form>

            <ButtonRegister pseudo={pseudo} email={email} password={password}/>

            <p>Déjà inscrit ? <a href="/connexion" className="bold-text">Me connecter</a></p>
        </div>
    )
        ;
};

export default InscriptionPage;
