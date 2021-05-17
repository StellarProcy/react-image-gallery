import React, { useState } from 'react';

import ImageGallery from '../ImageGallery'

import '../../styles/ImageMainPage/styles.css'

function ImageMainPage() {
  const [link, setLink] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    fetch(link)
    .then(res => res.json())
    .then((data) => {
      setData(data)
    }).catch(err => console.error(err));
  }

  const arr = data.galleryImages;

  return (
    <div className='container'>
      <div className='image-gallery-container'>
        <ImageGallery data={arr}/>
      </div>
      <div className='image-load-container'>
        <div className='image-load-form-container'>
          <form className='image-load-form-container_form' onSubmit={handleSubmit}>
            <label>
              Please, type the link here:
              <input 
                type='text'
                value={link}
                onInput={e => setLink(e.target.value)}
              />
            </label>
            <input type='submit' value='Загрузить' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImageMainPage