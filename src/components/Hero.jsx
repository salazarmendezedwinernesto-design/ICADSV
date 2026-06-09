import "../components/Hero.css";
import videoBg from "../assets/Iglesia.mp4";
import logoCentral from "../assets/iglesia.png";

function Hero() {
  return (
    <section className="hero">
      {/* Video de fondo */}
      <video className="video-bg" autoPlay muted loop playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Oscurecer video */}
      <div className="overlay"></div>

      {/* Contenido */}
      <div className="hero-content">
        <span className="bienvenidos">BIENVENIDOS</span>

        <img
          href="#inicio"
          src={logoCentral}
          alt="Logo Iglesia"
          className="hero-logo"
        />

        <a href="#conocenos" className="hero-btn">
          CONÓCENOS
        </a>
      </div>
    </section>
  );
}

export default Hero;
