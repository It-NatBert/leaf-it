import React, {useState} from 'react';

type ButtonRegisterProps = {
    pseudo: string;
    email: string;
    password: string;
    submitPossible: boolean;

}

const ButtonRegister = ({pseudo, email, password, submitPossible}: ButtonRegisterProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleOnClick = async () => {
        setIsLoading(true);
        setErrorMessage('');
        
        try {
            const res = await fetch('/api/inscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({pseudo, email, password}),
            });
            
            if (!res.ok) {
                const errorData = await res.json();
                const message = errorData.error || 'Erreur inconnue';
                setErrorMessage(message);
                console.error('Error:', message);
                return;
            } else {
                // Redirection en cas de succès
                window.location.href = '/inscription-confirm';
            }

        } catch (error) {
            setErrorMessage('Erreur réseau ou serveur');
            console.error('Error:', errorMessage);
        } finally {

            // Clemence: gérer la redirection une fois inscrit?
            setIsLoading(false);
        }
    }

    return (
        <>
            <button className="button" onClick={() => {
                if (!submitPossible) return;
                handleOnClick();
            }} disabled={!submitPossible}>
                {isLoading ? 'Chargement...' : 'S\'inscrire'}
            </button>
            {errorMessage && <p>{errorMessage}</p>}
        </>
    );
}

export default ButtonRegister;
