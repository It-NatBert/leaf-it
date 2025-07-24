import React, {useState} from "react";

type ButtonConnexionProps = {
  email: string;
  password: string;
};

const ButtonConnexion = ({ email, password }: ButtonConnexionProps) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleOnClick = () => {
        setIsLoading(true);
        try {
            // Nathan : 24/07/2025 Changer l'url pour l'API de connexion
            const res = fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button className="button" onClick={handleOnClick}>
            {isLoading ? 'Chargement...' : 'Se connecter'}
        </button>
    );
};

export default ButtonConnexion;
