import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Loader from "../../components/Loader";
import YouTube from "react-youtube";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";

const Home = () => {
  const [images, setImages] = useState([
    { src: "https://images5.alphacoders.com/721/721135.jpg", isLoading: true },
    { src: "https://images.alphacoders.com/793/793242.jpg", isLoading: true },
    { src: "https://images4.alphacoders.com/909/909185.jpg", isLoading: true },
    { src: "https://images2.alphacoders.com/869/869847.jpg", isLoading: true },
  ]);

  const handleImageLoad = (index: any ): void => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = { ...newImages[index], isLoading: false };
      return newImages;
    });
  };

  const videoId = "8YQM6VlfiqM";

  useEffect(() => {
    const loadImage = (image: any , index: any ) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => handleImageLoad(index);
    };

    images.forEach((image, index) => {
      if (image.isLoading) {
        loadImage(image, index);
      }
    });
  }, [images]);

  return (
    <main>
      <nav className="navbar-home">
        <h2 className="navbar-home__logo">FilMax</h2>
        <ul className="navbar-home__links">
          <Link to="/browser">
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
              style={{ display: image.isLoading ? "none" : "block" }}
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

     

      <div className="catalogo container mt-5 mb-5">
        <h2 className="catalogo-title">Catalogo</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images7.alphacoders.com/617/617964.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Breaking Bad.</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images8.alphacoders.com/130/1307233.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>The mandalorian.</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images6.alphacoders.com/374/374919.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>The sopranos.</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images6.alphacoders.com/633/633294.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Rick and Morty</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Link to="/browser" className="catalogo-btn">
          Ver mas
        </Link>
      </div>

      <div className="container mt-5 mb-5 info">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿Qué es FilMax?</Accordion.Header>
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
              Claro, todo el contenido es gratis y puedes disfrutarlo cuando tú quieras.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>¿Cuál es el precio de FilMax?</Accordion.Header>
            <Accordion.Body>
              Es totalmente gratuito, ya que tú eres el producto en esta plataforma.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              ¿Qué series y películas puedo ver en FilMax?
            </Accordion.Header>
            <Accordion.Body>
              Todas las películas creadas por la humanidad.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </main>
  );
};

export default Home;
``

