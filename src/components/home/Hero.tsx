type HeroProps = {
  bg1: string;
  bg2: string;
  logo: string;
};

function Hero({ bg1, bg2, logo }: HeroProps) {
  return (
    <section className="smartkp-hero">
      <div className="smartkp-slider" aria-hidden="true">
        <img src={bg1} alt="" />
        <img src={bg2} alt="" />
      </div>

      <div className="smartkp-topbar">
        <div className="smartkp-brand">
          <img src={logo} alt="Gò Dầu Smart KP" />
          <div>
            <h1>Gò Dầu Smart KP</h1>
            <p>Xin chào, Người dùng!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
