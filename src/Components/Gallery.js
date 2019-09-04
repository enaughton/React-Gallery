import React from "react";
import Image from "./Image";
import apiKey from "../config.js";

const key = apiKey;

const Gallery = ({ match }) => {
  const query = (match && match.params && match.params.query) || "guitar";
  const [images, setImages] = React.useState([]);
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

  console.log(images);

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
