import React, {useState} from 'react';

type ButtonRegisterProps = {
    pseudo: string;
    email: string;
    password: string;

}

const ButtonRegister = ({ pseudo, email, password }: ButtonRegisterProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleOnClick = () => {
        setIsLoading(true);
        try {
            // Nathan : 24/07/2025 Changer l'url pour l'API d'enregistrement
            const res = fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pseudo, email, password }),
            })
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button className="button-new-leaf button" onClick={handleOnClick}>
            {isLoading ? 'Chargement...' : 'Enregistrer'}
        </button>
    );
}

export default ButtonRegister;
