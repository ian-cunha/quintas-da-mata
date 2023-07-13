import { Container, Row } from "react-bootstrap";
import Fancybox from "./FancyBox";
import img1 from "../assets/images/img (1).jpg";
import img2 from "../assets/images/img (2).jpg";
import img3 from "../assets/images/img (3).jpg";
import img4 from "../assets/images/img (4).jpg";
import img5 from "../assets/images/img (5).jpg";
import img6 from "../assets/images/img (6).jpg";
import img7 from "../assets/images/img (7).jpg";
import img8 from "../assets/images/img (8).jpg";
import img9 from "../assets/images/img (9).jpg";
import img10 from "../assets/images/img (10).jpg";
import img11 from "../assets/images/img (11).jpg";
import img12 from "../assets/images/img (12).jpg";

const ImageBox = () => {
  return (
    <>
      <Container className="bg-imgbox pb-2 pt-2 text-center" id="action2">
        <Row className="mt-5 mb-5">
          <h2 className="text-img fs-5 mb-5">
            Aqui você terá uma visão privilegiada de cada detalhe e aspecto que
            tornam este lugar verdadeiramente especial.
          </h2>

          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <a data-fancybox="gallery" href={img1}>
              <img alt="" src={img1} width="200" height="150" />
            </a>
            <a data-fancybox="gallery" href={img2}>
              <img alt="" src={img2} width="200" height="150" />
            </a>
            <a data-fancybox="gallery" href={img3}>
              <img alt="" src={img3} width="200" height="150" />
            </a>
            <a data-fancybox="gallery" href={img4}>
              <img alt="" src={img4} width="200" height="150" />
            </a>
            <a data-fancybox="gallery" href={img5}>
              <img alt="" src={img5} width="200" height="150" />
            </a>
            <a data-fancybox="gallery" href={img6}>
              <img alt="" src={img6} width="200" height="150" />
            </a>
            <a data-fancybox="gallery" href={img7}>
              <img alt="" src={img7} width="200" height="150" />
            </a>
            <a data-fancybox="gallery" href={img8}>
              <img alt="" src={img8} width="200" height="150" />
            </a>
            <a data-fancybox="gallery" href={img9}>
              <img alt="" src={img9} width="200" height="150" />
            </a>
            <a data-fancybox="gallery" href={img10}>
              <img alt="" src={img10} width="200" height="150" />
            </a>
            <a data-fancybox="gallery" href={img11}>
              <img alt="" src={img11} width="200" height="150" />
            </a>
            <a data-fancybox="gallery" href={img12}>
              <img alt="" src={img12} width="200" height="150" />
            </a>
          </Fancybox>
        </Row>
      </Container>
    </>
  );
};

export default ImageBox;
