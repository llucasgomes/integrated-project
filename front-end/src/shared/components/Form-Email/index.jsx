import { Form, Formik } from "formik";
import * as Yup from "yup";

import { Input } from "../Input";
import { Button, Container_Form, Footer, Row } from "./styled";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form_Email = () => {
  // Valores iniciais Formik
  const initialValues = {
    name: "",
    email: "",
    subject: "",
  };
  //Validações YUP
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    subject: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
  });

  //Notify
  const notify = () =>
    toast.success("Email enviado com Sucesso!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  //Envio do Email
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // notify();
    // resetForm();
    setSubmitting(false);
  };

  return (
    <Container_Form>
      <ToastContainer style={{ fontSize: "20px" }} />
      <h2 className="title">Informações para Contato</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form>
          <Row>
            <Input name="name" label="Nome" required />
            <Input name="email" type="email" required />
          </Row>
          <Row height={"textArea"}>
            <Input name="subject" label={"texto"} type="text" required />
          </Row>
          <Footer>
            <Button type="submit">Enviar</Button>
          </Footer>
        </Form>
      </Formik>
    </Container_Form>
  );
};
