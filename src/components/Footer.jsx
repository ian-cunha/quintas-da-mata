import { Container, Row, Col, Image, Figure } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <Container className="p-3">
        <Col className="text-center mt-2 mb-3">
          <Image
            src="https://deixacommarta.com.br/assets/logoMartaWhite.8dd31f72.svg"
            fluid
            width="200"
          />
        </Col>
        <p className="text-center text-white">
          Marta é uma aceleradora de vendas transacionais, 100% digital, que usa
          inteligência de dados para fazer o encontro de lançamentos do mercado
          com seus perfis ideais de compradores.
        </p>
        <p className="text-center mt-5 text-white fw-bold">Siga-nos:</p>
        <Row>
          <Col className="text-center">
            <a
              target="_blank"
              href="https://www.instagram.com/bairroquintasdamata/"
              rel="noreferrer"
            >
              <Figure.Image
                width={50}
                alt="171x180"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkFwcGxlIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjTmVwb2ptZW5vdmFuw71fcMWZZWNob2RfMjcpO30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9Ik5lcG9qbWVub3ZhbsO9X3DFmWVjaG9kXzI3IiB4MT0iMzI4LjI3IiB4Mj0iMTgzLjczIiB5MT0iNTA4LjA1IiB5Mj0iMy45NSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZkYjczIi8+PHN0b3Agb2Zmc2V0PSIwLjA4IiBzdG9wLWNvbG9yPSIjZmRhZDRlIi8+PHN0b3Agb2Zmc2V0PSIwLjE1IiBzdG9wLWNvbG9yPSIjZmI4MzJlIi8+PHN0b3Agb2Zmc2V0PSIwLjE5IiBzdG9wLWNvbG9yPSIjZmE3MzIxIi8+PHN0b3Agb2Zmc2V0PSIwLjIzIiBzdG9wLWNvbG9yPSIjZjY2OTJmIi8+PHN0b3Agb2Zmc2V0PSIwLjM3IiBzdG9wLWNvbG9yPSIjZTg0YTVhIi8+PHN0b3Agb2Zmc2V0PSIwLjQ4IiBzdG9wLWNvbG9yPSIjZTAzNjc1Ii8+PHN0b3Agb2Zmc2V0PSIwLjU1IiBzdG9wLWNvbG9yPSIjZGQyZjdmIi8+PHN0b3Agb2Zmc2V0PSIwLjY4IiBzdG9wLWNvbG9yPSIjYjQzZDk3Ii8+PHN0b3Agb2Zmc2V0PSIwLjk3IiBzdG9wLWNvbG9yPSIjNGQ2MGQ0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDI2NGRiIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlLz48cmVjdCBjbGFzcz0iY2xzLTEiIGhlaWdodD0iNDY1LjA2IiByeD0iMTA3LjIzIiByeT0iMTA3LjIzIiB3aWR0aD0iNDY1LjA2IiB4PSIyMy40NyIgeT0iMjMuNDciLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zMzEsMTE1LjIyYTY2LjkyLDY2LjkyLDAsMCwxLDY2LjY1LDY2LjY1VjMzMC4xM0E2Ni45Miw2Ni45MiwwLDAsMSwzMzEsMzk2Ljc4SDE4MWE2Ni45Miw2Ni45MiwwLDAsMS02Ni42NS02Ni42NVYxODEuODdBNjYuOTIsNjYuOTIsMCwwLDEsMTgxLDExNS4yMkgzMzFtMC0zMUgxODFjLTUzLjcxLDAtOTcuNjYsNDQtOTcuNjYsOTcuNjZWMzMwLjEzYzAsNTMuNzEsNDQsOTcuNjYsOTcuNjYsOTcuNjZIMzMxYzUzLjcxLDAsOTcuNjYtNDQsOTcuNjYtOTcuNjZWMTgxLjg3YzAtNTMuNzEtNDMuOTUtOTcuNjYtOTcuNjYtOTcuNjZaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjU2LDE5OC4xM0E1Ny44Nyw1Ny44NywwLDEsMSwxOTguMTMsMjU2LDU3Ljk0LDU3Ljk0LDAsMCwxLDI1NiwxOTguMTNtMC0zMUE4OC44Nyw4OC44NywwLDEsMCwzNDQuODcsMjU2LDg4Ljg3LDg4Ljg3LDAsMCwwLDI1NiwxNjcuMTNaIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIzNDYuODEiIGN5PSIxNjMuMjMiIHI9IjIxLjA3Ii8+PC9zdmc+"
              />
            </a>
          </Col>
          <Col className="text-center">
            <a
              target="_blank"
              href="https://www.facebook.com/bairroquintasdamata/"
              rel="noreferrer"
            >
              <Figure.Image
                width={50}
                alt="171x180"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmMWYyZjI7fS5jbHMtMntmaWxsOiM0OWFhZWU7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZS8+PGcgZGF0YS1uYW1lPSI0LUZhY2Vib29rIiBpZD0iXzQtRmFjZWJvb2siPjxnIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyIgaWQ9Il9Hcm91cF8iPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM1LDIzbC0yLDdIMjdWNDdIMTlWMzBIMTNWMjNoNlYxMWEyLjkzOCwyLjkzOCwwLDAsMSwzLTNIMzR2N0gyN3Y4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQ3LDlWMzlhOCw4LDAsMCwxLTgsOEgyN1YzMGg2bDItN0gyN1YxNWg3VjhIMjJhMi45MzgsMi45MzgsMCwwLDAtMywzVjIzSDEzdjdoNlY0N0g5YTgsOCwwLDAsMS04LThWOUE4LDgsMCwwLDEsOSwxSDM5QTgsOCwwLDAsMSw0Nyw5WiIvPjwvZz48L2c+PC9zdmc+"
              />
            </a>
          </Col>
        </Row>
        <p className="text-center text-white small-text mt-4">
          *Atendendo a lei de nº 8078/90, informamos que as imagens presentes no
          site são meramente ilustrativas, podendo ter variações de cor,
          tonalidade e especificações. Os móveis, equipamentos, adornos,
          decorações presentes na ambientação e nas plantas não fazem parte do
          bem adquirido. Reservamo-nos o direito de corrigir possíveis erros de
          digitação. Número do protocolo do memorial de incorporação 236.415
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
