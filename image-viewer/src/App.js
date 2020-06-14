import React, { useEffect, useState } from 'react';
import {
  useLocation
} from 'react-router-dom';
import ImageThumbnail from './components/image-thumbnail/image-thumbnail';
import DirectoryIcon from './components/directory-icon';
import './App.css';

function App() {
  const [directoryInfo, setDirectoryInfo] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    //todo change to a constant base path
    fetchDirectoryInfo();
  }, []);

  const fetchDirectoryInfo = () => {
    const route = pathname != '/images/'
      ? `/directoryInfo/route?route=${pathname}`
      : '/directoryInfo';

    fetch(route)
      .then(res => res.json())
      .then(res => setDirectoryInfo(res))
      .catch((err) => console.error(err));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src='/android-chrome-192x192.png' width="75px" />
      </header>
      <div>
        <h2>{directoryInfo.route}</h2>
        <div className="Directory-Container">
          {directoryInfo && directoryInfo.directories &&
            directoryInfo.directories.map(directory => (
              <DirectoryIcon 
                name={directory}
                route={`${directoryInfo.route}${directory}`}
              />
            ))
          }
        </div>
        <div className="Image-Container">
          {directoryInfo && directoryInfo.images && directoryInfo.images.map(name => (
            <ImageThumbnail
              key={name}
              url={`${directoryInfo.route}/${name}`}
              name={name}
              hide={false}
              size={{ width: 250 }}
            />
          ))}
        </div>
        <div className="Inline-Container">
          <button className="Page-Button Page-Button-Disabled">prev</button>
          <p>1 of 1</p>
          <button className="Page-Button">next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
