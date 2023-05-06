import { Input } from "../../Input";
import { Container_Image } from "../Modal-Projetos/styled";
import { Container_Modal, Row } from "./styled";
import Image_defalt from "./../../../../../public/perfil.jpg";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";

import axios from "axios";
import { DataContext } from "../../../contexts/DataContext";

export const Modal_Habilidades = ({ setOpenModal }) => {
  const [image, setImage] = useState("");
  const { setIsFetching } = useContext(DataContext);

  // Valores iniciais Formik
  const initialValues = {
    title: "",
    description: "",
  };
  //Validações YUP
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
    description: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .max(150, "O campo deve ter no maximo 150 caracteres")
      .required("Campo obrigatório"),
  });

  //Notify
  const notify = () =>
    toast.success("Adicionado com Sucesso!", {
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
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", values.title);
    formData.append("description", values.description);

    axios
      .post("https://api-msql.vercel.app/skills", formData)
      .then((res) => {
        setIsFetching(true);
        setOpenModal(false);
      })
      .catch((error) => {
        console.log(error);
      });

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
          <h1>Inserir</h1>
        </div>
        <div className="body">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enctype={"multipart/form-data"}
            enableReinitialize
          >
            {({ values, isSubmitting }) => (
              <Form>
                <Row width={15}>
                  <Container_Image
                    htmlFor="image"
                    bg={image ? URL.createObjectURL(image) : Image_defalt}
                  >
                    <input
                      name="image"
                      className="file"
                      type="file"
                      value=""
                      id="image"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </Container_Image>
                  <Row flex={"column"}>
                    <Input name="title" required />
                    <Input
                      name="description"
                      label={"descricao"}
                      type="text"
                      required
                    />
                  </Row>
                </Row>
                <Row height={"textArea"}></Row>
                <div className="footer">
                  <button
                    onClick={() => {
                      setOpenModal(false);
                    }}
                    id="cancelBtn"
                  >
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting}>
                    Salvar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Container_Modal>
  );
};
