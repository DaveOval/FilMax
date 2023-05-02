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
            <li className="navbar-home__link">See more</li>
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
          <h1>ENJOY</h1>
          <h2>all you want</h2>
          <p>*It's a lie this page doesn't work.</p>
        </div>
      </section>

      <section className="features">
        <video src="./video/home.mp4" autoPlay muted loop></video>
        <div className="features__container">
          <h2>The best cinema experience</h2>
          <ol>
            <li>8K content.</li>
            <li>HDR10+.</li>
            <li>Dolby atmos.</li>
            <li>Dolby Vision.</li>
            <li>IMAX.</li>
          </ol>
        </div>
      </section>

     

      <div className="catalogo container mt-5 mb-5">
        <h2 className="catalogo-title">Catalogue</h2>
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
          See more
        </Link>
      </div>

      <div className="container mt-5 mb-5 info">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is FilMax?</Accordion.Header>
            <Accordion.Body>
              FilMax is an online streaming platform that allows you to
              Access a wide variety of movies and TV series.
              There's no need to leave home to find the fun you
              you seek! With FilMax, you can enjoy a wide selection of
              content at any time and place. Also, its interface is
              easy to use and its video quality is exceptional, which
              provides an unparalleled viewing experience. With FileMax,
              You will never run out of options to enjoy in your free time.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Does FilMax have a free trial?
            </Accordion.Header>
            <Accordion.Body>
              Sure, all the content is free and you can enjoy it whenever you want.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is the price of FilMax?</Accordion.Header>
            <Accordion.Body>
              It is completely free, since you are the product on this platform.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What series and movies can I watch on FilMax?
            </Accordion.Header>
            <Accordion.Body>
              All the movies created by humanity.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </main>
  );
};

export default Home;
``

