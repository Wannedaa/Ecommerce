import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" id='carruselImg'
          src="https://th.bing.com/th/id/R.e95264c3fb699f8ad9d5e1bd615d189e?rik=5cKEmRAfnW2pEA&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>¿Sabias que?</h3>
          <p>La palabra libro proviene de “liber”, así llamaban los romanos a la parte interior de la corteza de los árboles con la que se construía el papel.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" id='carruselImg'
          src="https://strategischlui.nl/wp-content/uploads/mijn-lees-setup-met-kobo-2048x1365.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>¿Sabias que?</h3>
          <p>Los primeros libros no llevaban un título, por lo que eran nombrados de acuerdo con las primeras palabras con las que empezaban el texto.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" id='carruselImg'
          src="http://www.businesscoot.com/uploads/study_main_image/1005.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>¿Sabias que?</h3>
          <p>
          En Egipto a las bibliotecas se les llamaba “el tesoro de los remedios del alma”, porque curaban el peor de los males: la ignorancia.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;