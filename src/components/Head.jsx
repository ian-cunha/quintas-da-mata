import logo from "../assets/logo.svg";
import { Offcanvas, Navbar, Nav, Container } from "react-bootstrap";

const Head = () => {
  return (
    <header>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="navbar mb-3"
          data-bs-theme="dark"
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="150"
                className="d-inline-block align-top"
                alt="Quinta das Mata"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="offcanvas-header">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src={logo}
                    width="150"
                    className="d-inline-block align-top"
                    alt="Quinta das Mata"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-bg">
                <Nav className="justify-content-end flex-grow-1 pe-3 fs-5">
                  <Nav.Link className="action-style" href="#action1">
                    Início
                  </Nav.Link>
                  <Nav.Link className="action-style" href="#action2">
                    Galeria
                  </Nav.Link>
                  <Nav.Link className="action-style" href="#action3">
                    Diferenciais
                  </Nav.Link>
                  <Nav.Link className="action-style" href="#action4">
                    Localização
                  </Nav.Link>
                  <Nav.Link className="action-style" href="#action1">
                    Cadastre-se
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
};

export default Head;
