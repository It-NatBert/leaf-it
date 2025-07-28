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
    const [displayAlertAge, setDisplayAlertAge] = useState(false);
    const [alertAge, setalertAge] = useState("");
    const [submitPossible, setSubmitImpossible] = useState(false);

    const checkMdpIdentique = (verif: string) => {
        if (password !== verif) {
            setDisplayAlertPassword(true)
        } else {
            setDisplayAlertPassword(false)
        }
    }

    const checkAge = (date: string) => {
        const birthDate = new Date(date);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        if (age < 13) {
            setDisplayAlertAge(true);
            setalertAge("Vous n'avez pas l'age requis pour vous inscrire")
        } else if ( age > 15) {
            setDisplayAlertAge(false)
        } else {
            setDisplayAlertAge(true);
            setalertAge("Selon les lois de votre pays, la supervision de votre tuteur légal peut être requise pour vous inscrire")
        }
    }

    const isFormInvalid = () => {
    return (
        !pseudo ||
        !email ||
        !password ||
        !passwordVerif ||
        !dateOfBirth ||
        displayAlertPassword ||
        displayAlertAge
        );
    };

    React.useEffect(() => {
        setSubmitImpossible(!isFormInvalid());
    }, [pseudo, email, password, passwordVerif, dateOfBirth, displayAlertPassword, displayAlertAge]);

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
                    <input
                        type={"password"}
                        name={"passwordVerif"}
                        value={passwordVerif}
                        onChange={(e) => {
                            setPasswordVerif(e.target.value)
                            checkMdpIdentique(e.target.value)
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
                    { displayAlertAge ? <p className='alert-connexion-mobile'>{alertAge}</p> : null }

                </label>
            </form>
            
            <ButtonRegister pseudo={pseudo} email={email} password={password} submitPossible={submitPossible}/> 
            <p>Déjà inscrit ? <a href="/connexion" className="bold-text">Me connecter</a></p>

        </div>
    )
        ;
};

export default InscriptionPage;
