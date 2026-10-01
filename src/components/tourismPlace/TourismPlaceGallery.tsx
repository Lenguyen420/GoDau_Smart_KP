type TourismPlaceGalleryProps = {
  images: string[];
  title: string;
};

function TourismPlaceGallery({ images, title }: TourismPlaceGalleryProps) {
  return (
    <section className="tourism-place-gallery">
      <h2>Thư viện ảnh</h2>
      <div>
        {images.map((image, index) => (
          <img alt={`${title} ${index + 1}`} key={`${image}-${index}`} src={image} />
        ))}
      </div>
    </section>
  );
}

export default TourismPlaceGallery;
