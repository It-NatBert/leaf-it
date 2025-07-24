import React, {useState} from 'react'

type ButtonUpdatedUserProps = {
    id: number;
    pseudo: string;
    email: string;
    password: string;
}

const ButtonUpdatedUser = ({id, pseudo, email, password}: ButtonUpdatedUserProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleOnClick = () => {
    setIsLoading(true);
    try {
      // Nathan : 24/07/2025 Changer l'url pour l'API de mise à jour utilisateur
       const res = fetch('/api/update-user', {
        method: 'UPDATE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, pseudo, email, password }),
    })
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <button className="button-new-leaf button" onClick={handleOnClick}>
        {isLoading ? 'Chargement...' : 'Enregistrer'}
      </button>
    </div>
  )
}

export default ButtonUpdatedUser
