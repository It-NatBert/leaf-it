import React, {useState} from 'react';

type ButtonRegisterProps = {
    pseudo: string;
    email: string;
    password: string;
    submitPossible: boolean;

}

const ButtonRegister = ({pseudo, email, password, submitPossible}: ButtonRegisterProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [messageButton, setMessageButton] = useState("S'inscrire");

    const handleOnClick = async () => {
            setIsLoading(true);
            
            try {
                const res = await fetch('/api/inscription', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({pseudo, email, password}),
                })
            } catch (error) {
                console.error('Error:', error);
            } finally {

                // Clemence: gérer la redirection une fois inscrit?
                setMessageButton("Inscrit!")
                setIsLoading(false);
            }
    }

    return (
        <button className="button" onClick={() => {
            if (!submitPossible) return;
            handleOnClick();
        }} disabled={!submitPossible}>
            {isLoading ? 'Chargement...' : messageButton}
        </button>
    );
}

export default ButtonRegister;
