import { useState } from "react";
import { Input } from "../../Input";
import { Container_Image, Container_Modal, Row } from "./styled";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import Image_defalt from "./../../../../../public/perfil.jpg";

export const Modal_Projetos = ({ setOpenModal }) => {
  const [image, setImage] = useState("");

  // Valores iniciais Formik
  const initialValues = {
    title: "",
    descricao: "",
    github: "",
    page: "",
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
    github: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
    page: Yup.string()
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
              <Row>
                <Container_Image
                  htmlFor="image"
                  bg={image ? URL.createObjectURL(image) : Image_defalt}
                >
                  <input
                    name="image"
                    className="file"
                    type="file"
                    value=""
                    onChange={(e) => setImage(e.target.files[0])}
                    id="image"
                  />
                </Container_Image>
                <Row flex={""}>
                  <Input name="title" required />
                  <Input name="gitHub" required />
                  <Input name="page" required />
                </Row>
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
