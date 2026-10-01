type TourismPlaceIntroProps = {
  description: string[];
  title: string;
};

function TourismPlaceIntro({ description, title }: TourismPlaceIntroProps) {
  return (
    <section className="tourism-place-intro">
      <div className="tourism-place-sheet-handle" />
      <h2>Giới thiệu</h2>
      <h3>{title}</h3>
      {description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}

export default TourismPlaceIntro;
