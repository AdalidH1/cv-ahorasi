import { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search?query=${query}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar usuarios"
        className='text-black'
      />
      <button className='bg-blue-500 rounded p-2' onClick={handleSearch}>Buscar</button>

      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.nombre} - {result.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;