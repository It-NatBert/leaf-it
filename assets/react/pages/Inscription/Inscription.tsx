import * as React from 'react';
import { useState } from 'react';

import ButtonRegister from "../../components/Button/ButtonRegister";

const InscriptionPage = () => {

    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerif, setPasswordVerif] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [displayAlertPassword, setDisplayAlertPassword] = useState(false);
    const [ageRequis, setAgeRequis] = useState(true);
    const [alertAge, setAlertAge] = useState("");
    const [submitPossible, setSubmitImpossible] = useState(false);

    // check que le 1er mdp est identique à la verif
    const checkMdp1Identique = (mdp: string) => {
        if (mdp !== passwordVerif) {
            setDisplayAlertPassword(true)
        } else {
            setDisplayAlertPassword(false)
        }
    }

    const checkMdp2Identique = (verif: string) => {
        if (password !== verif) {
            setDisplayAlertPassword(true)
        } else {
            setDisplayAlertPassword(false)
        }
    }

    const checkAge = (date: string) => {
        // défini age requis sur true par défaut
        setAgeRequis(true);
        
        // calcul de l'age
        const birthDate = new Date(date);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        // gestion des cas et alertes selon l'age
        if (age < 13) {
            setAgeRequis(false);
            setAlertAge("Vous n'avez pas l'age requis pour vous inscrire")
        } else if ( age > 18) {
            setAlertAge("")
        } else {
            // pour les mineur >13ans: seulement message d'alerte mais n'empeche pas l'inscription
            setAlertAge("Selon les lois de votre pays, la supervision de votre tuteur légal peut être requise pour vous inscrire")
        }
    }

    // Verification de la validité du formulaire (tous les champs remplis + age requis + password identiques) 
    const isFormInvalid = () => {
    return (
        !pseudo ||
        !email ||
        !password ||
        !passwordVerif ||
        !dateOfBirth ||
        displayAlertPassword ||
        !ageRequis
        );
    };

    React.useEffect(() => {
        setSubmitImpossible(!isFormInvalid());
    }, [pseudo, email, password, passwordVerif, dateOfBirth, displayAlertPassword, ageRequis]);

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
                    <input
                        type={"password"}
                        name={"password"}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            checkMdp1Identique(e.target.value)
                            }}/>
                </label>

                <label id="passwordVerif" className="label-connexion-mobile"> <span className="labels">Entrez de nouveau le mot de passe</span>
                    <input
                        type={"password"}
                        name={"passwordVerif"}
                        value={passwordVerif}
                        onChange={(e) => {
                            setPasswordVerif(e.target.value)
                            checkMdp2Identique(e.target.value)
                    }}/>
                    { displayAlertPassword ? <p className='alert-connexion-mobile'>Les mots de passes doivent être identiques</p> : null }
                </label>

                <label id="dateOfBirth" className="label-connexion-mobile"> <span
                    className="labels">Date de naissance</span>
                    <input
                        type={"date"}
                        name={"dateOfBirth"}
                        value={dateOfBirth}
                        onChange={(e) => {
                            setDateOfBirth(e.target.value)
                            checkAge(e.target.value)
                    }}/>
                    { alertAge != "" ? <p className='alert-connexion-mobile'>{alertAge}</p> : null }

                </label>
            </form>
            
            <ButtonRegister pseudo={pseudo} email={email} password={password} submitPossible={submitPossible}/> 
            <p>Déjà inscrit ? <a href="/connexion" className="bold-text">Me connecter</a></p>

        </div>
    )
        ;
};

export default InscriptionPage;
