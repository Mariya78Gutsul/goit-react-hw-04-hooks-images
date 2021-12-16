import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ tags, largeImageURL, webformatURL, id }) => (
        <ImageGalleryItem
          openModal={() => openModal(largeImageURL)}
          key={id}
          image={webformatURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
