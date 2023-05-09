import { Form, Formik } from "formik";
import { Input } from "../../Input";
import {
  Button,
  Container_Form,
  Container_Perfil,
  Footer,
  Row,
  RowImage,
  Container_Image,
} from "./styled";

import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pencil } from "phosphor-react";
import { useContext, useState } from "react";
import { DataContext } from "../../../contexts/DataContext";
import { API } from "../../../services/api";

export const D_Perfil = () => {
  const { profile } = useContext(DataContext);
  const [job, setJob] = useState(["CLT", "Freelance"]);
  const [image, setImage] = useState(profile[0].image);
  const [previwImage, setPreviwImage] = useState("");

  // Valores iniciais Formik
  const initialValues = {
    firstName: profile[0].name,
    middleName: profile[0].middle_name,
    lastName: profile[0].last_name,
    email: profile[0].email,
    birthday: profile[0].birthday.slice(0, 10),
    phone: profile[0].phone,
    job: profile[0].job,
  };
  //Validações YUP
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
    middleName: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
    lastName: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    birthday: Yup.date()
      .max(new Date(), "Não é possível incluir uma data futura")
      .required("Campo obrigatório"),
    phone: Yup.string().required("Campo obrigatório"),
    job: Yup.string().required("Campo obrigatório"),
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

  //Edição de dados do perfil
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();

      formData.append("image", previwImage);
      formData.append("name", values.firstName);
      formData.append("middle_name", values.middleName);
      formData.append("last_name", values.lastName);
      formData.append("birthday", values.birthday);
      formData.append("job", values.job);
      formData.append("phone", values.phone);
      formData.append("email", values.email);

      await API.put("/profile/1", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Edição realizada com sucesso com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);
    }

    setSubmitting(false);
  };
  return (
    <Container_Perfil>
      <h2 className="title">Editar Perfil</h2>
      <Container_Form>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enctype={"multipart/form-data"}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values, isSubmitting }) => (
            <Form>
              <RowImage>
                <img
                  className="foto-perfil"
                  src={
                    previwImage
                      ? URL.createObjectURL(previwImage)
                      : `data:image/png;base64,${image}`
                  }
                  alt="Foto de Perfil"
                />{" "}
                <Container_Image htmlFor="image">
                  <input
                    name="image"
                    className="file"
                    type="file"
                    value=""
                    onChange={(e) => setPreviwImage(e.target.files[0])}
                    id="image"
                  />
                  <Pencil />
                </Container_Image>
              </RowImage>
              <Row>
                <Input name="firstName" label="Nome" required />
                <Input name="middleName" label="Nome do Meio" required />
                <Input name="lastName" label="Ultimo Nome" required />
              </Row>
              <Row>
                <Input name="birthday" type="date" required />
                <Input name="job" label={"Job"} dataList={job} required />
                <Input name="phone" required />
              </Row>
              <Row>
                <Input name="email" required />
              </Row>

              <Footer>
                <Button type="submit" disabled={isSubmitting}>
                  Salvar
                </Button>
              </Footer>
            </Form>
          )}
        </Formik>
      </Container_Form>
    </Container_Perfil>
  );
};
