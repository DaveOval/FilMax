import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Loader from "../Loader";
import YouTube from "react-youtube";

import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";

const Home = () => {
  const [images, setImages] = useState([
    { src: "./img/home/dc.webp", isLoading: true },
    { src: "./img/home/logan.webp", isLoading: true },
    { src: "./img/home/marvel.webp", isLoading: true },
    { src: "./img/home/spiderman2.webp", isLoading: true },
    { src: "./img/home/titanic.webp", isLoading: true },
    { src: "./img/home/starwars.webp", isLoading: true },
  ]);

  const handleImageLoad = (index: number) => {
    const newImages = [...images];
    newImages[index].isLoading = false;
    setImages(newImages);
  };
  const videoId = "8YQM6VlfiqM";

  const acordion = {
    color: "white",
    backgroundColor: "black",
  };
  return (
    <main>
      <nav className="navbar-home">
        <h2 className="navbar-home__logo">FilMax</h2>
        <ul className="navbar-home__links">
          <Link to="/main">
            <li className="navbar-home__link">Continuar</li>
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

      <div className="catalogo container mt-5 mb-5 ">
        <h2 className="catalogo-title">Catalogo</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/home/breaking-bad.webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Breaking Bad.</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/home/mandalorian.webp"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>The mandalorian.</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/home/sopranos.webp"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>The sopranos.</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/home/rick-and-morty.webp"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Rick and Morty</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Link to="/main" className="catalogo-btn">
          Ver mas
        </Link>
      </div>

      <div className="container mt-5 mb-5 info">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿Ques FilMax?</Accordion.Header>
            <Accordion.Body>
              FilMax es una plataforma de streaming en línea que te permite
              acceder a una gran variedad de películas y series de televisión.
              ¡No hay necesidad de salir de casa para encontrar la diversión que
              buscas! Con FilMax, puedes disfrutar de una amplia selección de
              contenidos en cualquier momento y lugar. Además, su interfaz es
              fácil de usar y su calidad de video es excepcional, lo que te
              brinda una experiencia de visualización sin igual. Con FilMax,
              nunca te faltarán opciones para disfrutar en tu tiempo libre.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              ¿FilMax tiene una prueba gratis?
            </Accordion.Header>
            <Accordion.Body>
              Claro, todo el contendio es gratis y puedes disfrutarlo cuando tu quieras.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>¿Cual es el precio de FilMax?</Accordion.Header>
            <Accordion.Body>
              Es totalmente ya que tu eres el produco en esta plataforma.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              ¿QUe series y peliculas puedo ver en FilMax?
            </Accordion.Header>
            <Accordion.Body>
              Todas las peliculas creadas por la humanidad.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </main>
  );
};

export default Home;
