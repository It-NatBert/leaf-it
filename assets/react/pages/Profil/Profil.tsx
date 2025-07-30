import React, { useEffect, useState } from 'react';
import NoteComponent from '../../components/Note';
import fakeNotes from '../Feed/fakeNotes';

type User = {
    id: number;
}

const Profil = ({user}: {user: User | null}) => {
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);
// Nathan: 29/07/2025 Fetch pour récupérer les notes de l'utilisateur
console.log("user", user);
  useEffect(() => {
    fetch('/api/notes')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched notes:', data);
      });
      console.log('Fetching notes...');
  }, []);


  const selectedNote = fakeNotes.find((n) => n.id === selectedNoteId);

  return (
    <div className="profil-container">
      <h1>Mon profil</h1>

      <button
        onClick={() => setSelectedNoteId(1)}
        className="btn-open"
      >
        Voir la note 1
      </button>

      {selectedNoteId && selectedNote && (
        <div className="modal-overlay">
          <h2 className='modal-date'>{selectedNote.dateNote}</h2>
          <p className='modal-p'>Vous avez dit : </p>
          <div className="modal">
            <button
              onClick={() => setSelectedNoteId(null)}
              className="modal-close"
            >
              ✕
            </button>

            <NoteComponent note={selectedNote} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
