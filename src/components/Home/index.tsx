import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Loader from "../Loader";

const Home = () => {
  const [images, setImages] = useState([
    { src: "./img/home/dc.webp", isLoading: true },
    { src: "./img/home/logan.webp", isLoading: true },
    { src: "./img/home/marvel.webp", isLoading: true },
    { src: "./img/home/starwars.webp", isLoading: true },
    { src: "./img/home/spiderman2.webp", isLoading: true },
    { src: "./img/home/titanic.webp", isLoading: true },
  ]);
    const handleImageLoad = (index:number) => {
        const newImages = [...images];
        newImages[index].isLoading = false;
        setImages(newImages);
    };
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
          <h1>EN CONTSTRUCCION</h1>
          <img src="../../../public/working.gif" alt="" />
      </section>
    </main>
  );
};

export default Home;