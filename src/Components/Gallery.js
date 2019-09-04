import React from 'react';
import Image from './Image';


const Gallery = props => { 

  const results = props.data
  
  

  let images = results.map(image => 

    
    <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />
  
    
    )
  
  
  return(
    
    <ul className="gif-list">
      { images }
    </ul> 
  );
}

export default Gallery;
