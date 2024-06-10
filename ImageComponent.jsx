function ImagesComponent() {
    return (
      <div>
        {imagesList.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} />
        ))}
      </div>
    );
  }
  
  export default ImagesComponent;