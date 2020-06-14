import React from 'react';

export default ({ name, route }) => {
  return(
    <div>
      <a href={route}>
        <img
          src="/folder-icon.png"
          width="100"
        />
        <figcaption>{name}</figcaption>
      </a>
    </div>
  );
}