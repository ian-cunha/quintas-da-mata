/* eslint-disable no-unused-vars */
import { Form } from "react-bootstrap";
import CaptchaTest from "./Captcha";
import axios from "axios";
import React, { useState } from "react";

function Send() {
  const [nome_contato, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      url: "https://app.smart.youdigital.com.br/atendimento/cadastrarContatosOnline",
      data: {
        nome_contato,
        email,
        telefone,
        id_empreendimento: 0,
        url_origem: "https://quintasdamata.com.br/",
        id_empresa: 5878,
        tipo_origem: 3,
        id_outra_origem: 5,
        id_detalhe_outra_origem: 820,
        tipo_de_interesse: 0,
        idAcao: 0,
        mensagem: "Tenho interesse no Quintas da Mata.",
      },
    }).then(function (response) {
      console.log(
        "Nome:",
        nome_contato,
        "/",
        "Email:",
        email,
        "/",
        "Telefone:",
        telefone
      );
    });
  };

  return (
    <>
      <Form
        name="formContato"
        onSubmit={handleSubmit}
        className="background-form p-3"
      >
        <h3 className="fs-4 text-form">
          Preencha o formulário para receber mais informações.
        </h3>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome Completo:</Form.Label>
          <Form.Control
            onChange={(e) => setNome(e.target.value)}
            type="name"
            placeholder="Patricia J. Hurt"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="patrihurt@mail.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Whatsapp:</Form.Label>
          <Form.Control
            maxLength="12"
            onChange={(e) => setTelefone(e.target.value)}
            type="tel"
            placeholder="(81)98888-7557"
          />
        </Form.Group>

        <CaptchaTest />
      </Form>
    </>
  );
}

export default Send;
