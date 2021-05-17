import React from 'react';

import '../../styles/ImageCard/styles.css'

function ImageCard({ image }) {
  const url = image.url;

  return (
    <img
      src={url}
      alt='image'
    />
  )
}

export default ImageCard