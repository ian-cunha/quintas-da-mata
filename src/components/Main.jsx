import { Container, Row, Col } from "react-bootstrap";
import Send from "./Send";
import ImageBox from "./ImageBox";
import GridMain from "./GridMain";
import Map from "./Map";

const Main = () => {
  return (
    <>
      <Container className="mb-5 main" id="action1">
        <Row className="justify-content-center align-items-center">
          <Col sm={8}>
            <h1 className="fs-1 text-light mt-5 fw-bold">Quintas da Mata</h1>
            <h2 className="fs-5 fw-normal text-light">
              O lugar ideal para investir! Infraestrutura completa com rede de
              água, energia, ruas 100% calçadas e rede de esgoto. Localizado em
              São José da Mata.
            </h2>
            <h4 className="text-light mb-5 mt-4">
              Parcelas a partir de <b className="valor">R$199,00</b>
            </h4>
          </Col>
          <Col sm={4}>
            <Send />
          </Col>
        </Row>
      </Container>
      <ImageBox />
      <GridMain />
      <Map />
    </>
  );
};

export default Main;
