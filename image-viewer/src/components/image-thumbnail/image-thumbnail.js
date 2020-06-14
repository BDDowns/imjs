import React from 'react';

export default ( { url, size, hide, name }) => {
    if (hide) return;

    return ( 
        <div>
            <img src={url} width={size.width} height={size.height} alt={name} />
        </div>
    )
}