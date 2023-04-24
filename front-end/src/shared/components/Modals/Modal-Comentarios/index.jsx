import { Input } from "../../Input";
import { Container_Modal, Row } from "./styled";

import { Form, Formik } from "formik";
import * as Yup from "yup";

export const Modal = ({ setOpenModal }) => {
  // Valores iniciais Formik
  const initialValues = {
    instituicao: "",
    cargo: "",
    inicio: "",
    termino: "",
    descricao: "",
  };
  //Validações YUP
  const validationSchema = Yup.object({
    instituicao: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
    inicio: Yup.date()
      .max(new Date(), "Não é possível incluir uma data futura")
      .required("Campo obrigatório"),
    termino: Yup.date()
      .max(new Date(), "Não é possível incluir uma data futura")
      .required("Campo obrigatório"),
    descricao: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .max(150, "O campo deve ter no maximo 150 caracteres")
      .required("Campo obrigatório"),
    cargo: Yup.string()
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
        <div className="title">
          <h1>😜 Inserir</h1>
        </div>
        <div className="body">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            <Form>
              <Row>
                <Input name="instituicao" required />
                <Input name="inicio" type="date" required />
                <Input name="termino" type="date" required />
              </Row>
              <Row height={"textArea"}>
                <Input name="descricao" type="text" required />
              </Row>
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
