import React, {useState, useEffect} from 'react'
import ButtonUpdatedUser from "../../components/Button/ButtonUpdatedUser";

type GestionProps = {
    pseudo: string;
    email: string;
    password: string;
}

const Gestion = (props: GestionProps) => {
    const {pseudo, email, password} = props;

    const [formData, setFormData] = useState({
        userName: pseudo,
        mail: email,
        password: password,
        passwordVerif: '',
        dateOfBirth: ''
    });

    const [passwordTrue, setPasswordTrue] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

        if(name === 'password' || name === 'passwordVerif') {
            setPasswordTouched(true);
        }
    };

    const validatePassword = () => {
        if (formData.password === formData.passwordVerif) {
            setPasswordTrue(true);
        } else {
            setPasswordTrue(false);
        }
    }

    useEffect(() => {
        validatePassword();
    }, [formData.password, formData.passwordVerif]);

  return (
    <div>
      <div className="inscription-page-container-mobile">
            <h1 className="title">Modifier mes informations</h1>
            <form className="credential-form">
                <label id="userName" className="label-connexion-mobile"> <span
                    className="labels">Nom d'utilisateur</span>
                    <input type={"text"} name={"userName"} value={formData.userName} onChange={handleChange}/>
                </label>

                <label id="mail" className="label-connexion-mobile"> <span className="labels">Adresse mail</span>
                    <input type={"email"} name={"mail"} value={formData.mail} onChange={handleChange}/>
                </label>

                <label id="password" className="label-connexion-mobile"> <span className="labels">Mot de passe</span>
                    <input type={"password"} name={"password"} value={formData.password} onChange={handleChange}/>
                </label>

                <label id="passwordVerif" className="label-connexion-mobile"> <span className="labels">Entrez de nouveau le mot de passe</span>
                    <input type={"password"} name={"passwordVerif"} value={formData.passwordVerif} onChange={handleChange}/>
                </label>
                
                {passwordTouched && (
                    <p className='password-verification'>
                        {passwordTrue ? 'Les mots de passe correspondent.' : 'Les mots de passe ne correspondent pas.'}
                    </p>
                )}

                <label id="dateOfBirth" className="label-connexion-mobile"> <span
                    className="labels">Date de naissance</span>
                    <input type={"date"} name={"dateOfBirth"} value={formData.dateOfBirth} onChange={handleChange}/>
                </label>
            </form>

            <ButtonUpdatedUser id={1} pseudo={formData.userName} email={formData.mail} password={formData.password}/>
        </div>
    </div>
  )
}

export default Gestion
