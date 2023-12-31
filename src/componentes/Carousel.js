import React, { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      productos: [],
    };
  }

  componentDidMount() {
    this.fetchProductos();
    this.startCarousel();
  }

  componentWillUnmount() {
    this.stopCarousel();
  }

  fetchProductos = async () => {
    try {
      const response = await fetch("http://localhost:3000/listar-productos");

      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa.");
      }

      const data = await response.json();
      this.setState({ productos: data });
    } catch (error) {
      console.error("Error al obtener la lista de productos:", error);
    }
  };

  startCarousel = () => {
    this.timer = setInterval(this.goToNextSlide, 3000);
  };

  stopCarousel = () => {
    clearInterval(this.timer);
  };

  goToNextSlide = () => {
    const { currentIndex, productos } = this.state;
    const newIndex = (currentIndex + 1) % productos.length;
    this.setState({ currentIndex: newIndex });
  };

  // Dentro del método goToSlide
  goToSlide = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { currentIndex, productos } = this.state;
    const currentProduct = productos[currentIndex];

    return (
      <div className="carousel">
        <div className="carousel-content">
          <div className="carousel-image">
            <img
              src={currentProduct ? currentProduct.imagen : ""}
              alt={currentProduct ? currentProduct.nombre : ""}
            />
          </div>
          <div className="carousel-buttons">
            {productos.map((producto, index) => (
              <button
                key={index}
                className={`carousel-button ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => this.goToSlide(index)}
              >
                {/* {index + 1}*/}
              </button>
            ))}
          </div>
        </div>
        <div className="carousel-info">
          {currentProduct && (
            <>
              <div id="Card" className="Card" key={currentProduct.id}>
                <h1>{currentProduct.name}</h1>
                <p>Precio: ${currentProduct.price}</p>
                <p>Categoría: {currentProduct.type}</p>
                <p>Material: {currentProduct.material}</p>
                <p>Descripción: {currentProduct.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Carousel;
