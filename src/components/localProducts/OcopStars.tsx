type OcopStarsProps = {
  value: number;
  total?: number;
  compact?: boolean;
};

function OcopStars({ value, total = 5, compact = false }: OcopStarsProps) {
  return (
    <span className={compact ? "ocop-stars ocop-stars--compact" : "ocop-stars"} aria-label={`${value}/${total} sao`}>
      {Array.from({ length: total }).map((_, index) => (
        <span className={index < value ? "active" : ""} key={index}>
          {index < value ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

export default OcopStars;
