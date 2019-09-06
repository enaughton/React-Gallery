//Imports

import React from "react";
import Image from "./Image";
import apiKey from "../config.js";
//Variables
const key = apiKey;

// Gallery takes match as an argument.

const Gallery = ({ match }) => {
  const query = match && match.params && match.params.query;
  // This is a State Hook. It creates a State Varible (images). Which we call and map over down in the return statement.
  // setImages in the Fetch API Call stores the data into the images array.
  const [images, setImages] = React.useState([]);
  //React.useEffect is an Effect Hook which takes the place of ComponentDidMount() and ComponentDidUpdate
  React.useEffect(() => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {
        setImages(responseData.photos.photo);
      })
      .catch(error => {
        console.log("error fetching and parsing data", error);
      });
  }, [query]);

  return (
    <ul className="gif-list">
      {images.map(image => (
        <Image
          url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
          key={image.id}
        />
      ))}
    </ul>
  );
};

export default Gallery;
