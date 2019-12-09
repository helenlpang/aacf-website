
import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos2";

function Display() {
//built a hook to keep track of states without a class: currentImage/setCurrentImage tracks which image is clicked and viewerIsOpen/setViewerIsOpen tracks whether the image viewer is open   
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  //openLightbox is called if the user opens the special viewing of the picture
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

//closeLightbox is called if the user closes the special viewing of the picture
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
	{/* makes the photo gallery with openLightbox called if a picture is clicked */}
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
		  
		  {/* creates carousel feature to go through the pictures */}
            <Carousel
              currentIndex={currentImage}
			  //function for photo view
              views={photos.map(x => ({
                ...x
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

class Photos extends React.Component {
	render() {
		return (
		<div><Display />;</div>
		)
	}
}
export default Photos;



