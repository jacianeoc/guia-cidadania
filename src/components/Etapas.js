import  descobrir  from "../assets/img/descobrir.svg";
import analisar from "../assets/img/analisar.svg";
import construir from "../assets/img/construir.svg";
import compartilhar from "../assets/img/compartilhar.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
export const Etapas = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Etapas</h2>
                        <p>Serão 10 módulos dividos em 4 etapas, são elas:</p>
                        <Carousel responsive={responsive} className="owl-carousel owl-theme skill-slider">
                            
                            <Link to="/descobrir">
                            <Button  className="item">
                                <img src={descobrir} alt="Descobrir" />
                                <h5>Descobrir</h5>
                            </Button>
                            </Link>
                            
                            <Button className="item">
                                <img src={analisar} alt="Analisar" />
                                <h5>Analisar</h5>
                            </Button>
                            <Button className="item">
                                <img src={construir} alt="Contruir" />
                                <h5>Construir</h5>
                            </Button>
                            <Button className="item">
                                <img src={compartilhar} alt="Compartilhar" />
                                <h5>Compartilhar</h5>
                            </Button>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
