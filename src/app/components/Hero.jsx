export default function Hero() {
    return (
      <>
        <video className="video-background" autoPlay muted loop playsInline>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Bienvenido a mi App</h1>
          <p>Este es un ejemplo de video de fondo.</p>
        </div>
      </>
    );
  }