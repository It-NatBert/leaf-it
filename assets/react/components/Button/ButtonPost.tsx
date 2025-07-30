import React, { useState } from 'react';

type ButtonPostProps = {
    id_user: number;
    date_note: Date;
    is_on_tree: boolean;
    content: string;
    status: string;
};

const ButtonPost = ({ id_user, date_note, is_on_tree, content, status = "posted" }: ButtonPostProps) => {
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
                body: JSON.stringify({ id_user, date_note, is_on_tree, content, status }),
            });
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button className="button-new-leaf button" onClick={handleOnClick}>
            {isLoading ? 'Chargement...' : 'Publier'}
        </button>
    );
};

export default ButtonPost;
