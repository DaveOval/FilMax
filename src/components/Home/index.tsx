import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Loader from "../Loader";
import YouTube from 'react-youtube';

const Home = () => {
  const [images, setImages] = useState([
    { src: "./img/home/dc.webp", isLoading: true },
    { src: "./img/home/logan.webp", isLoading: true },
    { src: "./img/home/marvel.webp", isLoading: true },
    { src: "./img/home/spiderman2.webp", isLoading: true },
    { src: "./img/home/titanic.webp", isLoading: true },
  ]);
  const handleImageLoad = (index: number) => {
    const newImages = [...images];
    newImages[index].isLoading = false;
    setImages(newImages);
  };
  const videoId = "8YQM6VlfiqM"
  return (
    <main>
      <nav className="navbar-home">
        <h2 className="navbar-home__logo">FilMax</h2>
        <ul className="navbar-home__links">
          <Link to="/sign-in">
            <li className="navbar-home__link">Ingresar</li>
          </Link>
          <Link to="/sign-up">
            <li className="navbar-home__link">Suscribete ahora</li>
          </Link>
        </ul>
      </nav>

      <section className="images">
        {images.map((image, index) => (
          <React.Fragment key={index}>
            {image.isLoading && <Loader />}
            <img
              src={image.src}
              alt=""
              onLoad={() => handleImageLoad(index)}
              /* style={{ display: image.isLoading ? "none" : "block" }} */
            />
          </React.Fragment>
        ))}

        <div className="images__modal">
          <h1>DISFRUTA</h1>
          <h2>TODO LO QUE QUIERAS</h2>
          <p>*Es mentira esta pagina no funciona.</p>
        </div>
      </section>

      <section className="features">
        <video src="./video/home.mp4" autoPlay muted loop></video>
        <div className="features__container">
          <h2>La mejor experiencia de cine</h2>
          <ol>
            <li>Contenido 8k.</li>
            <li>HDR10+.</li>
            <li>Dolby atmos.</li>
            <li>Dolby Vision.</li>
            <li>Formato IMAX.</li>
          </ol>
        </div>
      </section>

    <section className="videos-series">
      <div className="videos-series-text">
        <h2>Las peliculas y series mas nuevas</h2>
        <p>Las mejores peliculas y series.</p>
      </div>
      <div className="video-container">
        <YouTube videoId={videoId} className="video-player" />
      </div>
    </section>
  
    </main>
  );
};

export default Home;
