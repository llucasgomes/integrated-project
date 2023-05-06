import { useContext, useState } from "react";
import { Input } from "../../Input";
import { Container_Image, Container_Modal, Row } from "./styled";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import Image_defalt from "./../../../../../public/perfil.jpg";

import { DataContext } from "../../../contexts/DataContext";
import { API } from "../../../services/api";

export const Modal_Projetos = ({ setOpenModal }) => {
  const [image, setImage] = useState("");
  const { setIsFetching } = useContext(DataContext);

  // Valores iniciais Formik
  const initialValues = {
    title: "",
    description: "",
    github: "",
    page: "",
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
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("github", values.github);
    formData.append("page", values.page);

    API.post("/project", formData)
      .then((res) => {
        console.log(res);
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
        {/* <div className="title">
          <h1>😜 Inserir</h1>
        </div> */}
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
                    <Input name="github" required />
                    <Input name="page" required />
                  </Row>
                </Row>
                <Row height={"textArea"}>
                  <Input
                    name="description"
                    label={"descrição"}
                    type="text"
                    required
                  />
                </Row>
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
