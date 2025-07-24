import React, {useState} from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    // Nathan : 24/07/2025: Mettre la loupe sous format SVG comme dans le design
    /* Faire l'animation du du milieu à en haut de la page  */
    return (
        <form className="user-form search-button" onSubmit={handleSearch}>
            <label className="label" htmlFor="search">Rechercher un utilisateur</label>
            <div className='search-container'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Entrer un nom d'utilisateur"
                    className='search-input'
                />
                <button className="submit-search" type="submit">
                    🔍
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
