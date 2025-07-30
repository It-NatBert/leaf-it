import React, {useState} from 'react';

type ButtonPublishProps = {
    id_user: number;
    date_note: Date;
    flag: boolean;
    content: string;
    status?: string;
};

const ButtonPublish = ({id_user, date_note, flag, content, status = "posted"}: ButtonPublishProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleOnClick = () => {
        setIsLoading(true);
        try {
            // Nathan : 24/07/2025 Changer l'url pour l'API de publication
            const res = fetch('/api/publish', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id_user, date_note, flag, content, status}),
            });
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button className="button-publish button" onClick={handleOnClick}>
            {isLoading ? 'Chargement...' : 'Publier'}
        </button>
    );
};

export default ButtonPublish;
