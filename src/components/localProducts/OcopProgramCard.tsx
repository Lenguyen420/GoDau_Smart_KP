import OcopStars from "@/components/localProducts/OcopStars";
import { localProductSummary } from "@/datas/localProducts";

function OcopProgramCard() {
  return (
    <section className="ocop-program-card">
      <span className="ocop-ribbon" aria-hidden="true" />
      <div>
        <h2>{localProductSummary.programTitle}</h2>
        <p>{localProductSummary.programDescription}</p>
      </div>
      <OcopStars compact value={5} />
    </section>
  );
}

export default OcopProgramCard;
