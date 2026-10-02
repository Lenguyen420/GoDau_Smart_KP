type LocalProductGalleryProps = {
  images: string[];
  title: string;
};

function LocalProductGallery({ images, title }: LocalProductGalleryProps) {
  return (
    <section className="local-product-gallery">
      <h2>Hình ảnh liên quan</h2>
      <div>
        {images.map((image, index) => (
          <img alt={`${title} ${index + 1}`} key={`${image}-${index}`} src={image} />
        ))}
      </div>
    </section>
  );
}

export default LocalProductGallery;
