import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import debounce from 'lodash.debounce';
import ImageThumbnail from './components/image-thumbnail/image-thumbnail';
import './App.css';

function App() {
  const [fileNames, setFileNames] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [numberToFetch, setNumberToFetch] = useState(5);

  useEffect(() => {
    //todo change to a constant base path
    fetch('/api/image-names')
      .then(res => res.json())
      .then(res => setFileNames(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {fileNames.map(name => (
          <ImageThumbnail 
            url={`/api/image/${name}`}
            name={name}
            hide={false}
            size={{ height: 100 }}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
