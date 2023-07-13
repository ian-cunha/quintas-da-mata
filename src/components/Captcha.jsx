import { Component } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Form } from "react-bootstrap";

class CaptchaTest extends Component {
  componentDidMount() {
    loadCaptchaEnginge(6);
  }

  doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) === true) {
      alert("Enviando, aguarde nosso contato!");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
    } else {
      alert("Captcha não corresponde, tente novamente.");
      document.getElementById("user_captcha_input").value = "";
    }
  };

  render() {
    return (
      <>
        <Form.Group className="mb-3">
          <LoadCanvasTemplate reloadText="Alterar" reloadColor="dark" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Digite o código"
            id="user_captcha_input"
            name="user_captcha_input"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <button className="btn btn-primary" onClick={() => this.doSubmit()}>
            Receber agora!
          </button>
        </Form.Group>
      </>
    );
  }
}

export default CaptchaTest;
