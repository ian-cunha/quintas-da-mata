import { Col, Container, Row } from "react-bootstrap";

const Map = () => {
  return (
    <>
      <Container className="mt-5 mb-5" id="action4">
        <Row className="justify-content-center align-items-center">
          <Col sm={5}>
            <h2 className="fs-1 text-light fw-bold">Localização</h2>
            <h3 className="fs-5 fw-normal text-light mb-5">
              São José da Mata é um local privilegiado, cercado pela natureza
              exuberante da região. Com uma localização estratégica, o
              empreendimento oferece fácil acesso a áreas urbanas, como centros
              comerciais, escolas, hospitais e demais serviços essenciais.
            </h3>
          </Col>
          <Col sm={7}>
            <iframe
              className="border"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15834.043880663898!2d-35.9762784!3d-7.182384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aea16ae1168925%3A0xad908eff60f83259!2sLoteamento%20Quintas%20da%20Mata!5e0!3m2!1spt-BR!2sbr!4v1689192432065!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Map;
