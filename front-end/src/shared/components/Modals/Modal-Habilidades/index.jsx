import { Input } from "../../Input";
import { Container_Modal, Row } from "./styled";

import { Form, Formik } from "formik";
import * as Yup from "yup";

export const Modal_Habilidades = ({ setOpenModal }) => {
  // Valores iniciais Formik
  const initialValues = {
    title: "",
    descricao: "",
  };
  //Validações YUP
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
    descricao: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .max(70, "O campo deve ter no maximo 150 caracteres")
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

  //Envio do formulario
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // notify();
    // resetForm();
    setSubmitting(false);
  };
  return (
    <Container_Modal>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        {/* <div className="title">
          <h1>😜 Inserir</h1>
        </div> */}
        <div className="body">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            <Form>
              <Row width={15}>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg"
                  alt=""
                />
                <Row flex={"column"}>
                  <Input name="title" required />
                  <Input name="descricao" type="text" required />
                </Row>
              </Row>
              <Row height={"textArea"}></Row>
            </Form>
          </Formik>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </Container_Modal>
  );
};
