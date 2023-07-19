import React, { useEffect, useState } from "react";
import { fetchPhotos } from "../../services/apiService";
import Image from "../Image/Image";
import ImagePopup from "../ImagePopup/ImagePopup";

const Images = () => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
  
    useEffect(() => {
      loadPhotos();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const loadPhotos = async () => {
      const newPhotos = await fetchPhotos(page);
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    };
  
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;
  
      if (windowBottom >= docHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };
  
    const deleteImage = (id) => {
      setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id));
    };
  
    const handleImageClick = (imageUrl) => {
      setSelectedImage(imageUrl);
    };
  
    const closeImagePopup = () => {
      setSelectedImage(null);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div className="images-container">
        {photos.slice(0, page * 30).map((photo) => (
          <Image
            key={photo.id}
            id={photo.id}
            title={photo.title}
            url={photo.thumbnailUrl}
            onDelete={deleteImage}
            onClick={() => handleImageClick(photo.url)}
          />
        ))}
        {selectedImage && <ImagePopup imageUrl={selectedImage} title="" onClose={closeImagePopup} />}
      </div>
    );
  };
  
  export default Images;
