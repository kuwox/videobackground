"use client"
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const video = document.getElementById('background-video');
    // Intento de reproducir el video en iOS
    if (video) {
      video.play().catch((error) => {
        console.log('Reproducción automática no permitida: ', error);
      });
    }

    // Añadir listener para toque
    const handleTouch = () => {
      video.play();
    };

    document.addEventListener('touchstart', handleTouch);

    return () => {
      document.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <>
      <video
        id="background-video"
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        controls // Agregar controles para prueba
      >
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