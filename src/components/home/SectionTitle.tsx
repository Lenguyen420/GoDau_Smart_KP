type SectionTitleProps = {
  children: string;
};

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="smartkp-section-title">
      <span />
      <h2>{children}</h2>
    </div>
  );
}

export default SectionTitle;
