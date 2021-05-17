import React from 'react';

import ImageCard from "../ImageCard"

import '../../styles/ImageGallery/styles.css'

function ImageGallery({ data=[] }) {

  const arr = data

  return (
    <div className='image-gallery-container'>
      {
        arr.map((image) => 
          <ImageCard key={image.url} image={image}/>)
      }
    </div>
  )
}

export default ImageGallery