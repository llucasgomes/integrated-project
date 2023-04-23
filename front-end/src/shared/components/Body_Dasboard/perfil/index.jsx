import { Form, Formik } from "formik";
import Foto from "../../../../assets/images/foto_perfil.png";
import { Input } from "../../Input";
import {
  Button,
  Container_Form,
  Container_Perfil,
  Footer,
  Row,
  RowImage,
} from "./styled";

import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pencil } from "phosphor-react";
import { useState } from "react";

export const D_Perfil = () => {
  const [job, setJob] = useState(["CLT", "Freelance"]);

  // Valores iniciais Formik
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    subject: "",
    birthday: "",
    phone: "",
    job: "",
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
    subject: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
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

  //Envio do Email
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // notify();
    // resetForm();
    setSubmitting(false);
  };
  return (
    <Container_Perfil>
      <h2 className="title">Editar Perfil</h2>
      <Container_Form>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          <Form>
            <RowImage>
              <img className="foto-perfil" src={Foto} alt="Foto de Perfil" />{" "}
              <div className="btn-editar">
                <Pencil size={20} weight="bold" />
              </div>
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
              <Button type="submit">Salvar</Button>
            </Footer>
          </Form>
        </Formik>
      </Container_Form>
    </Container_Perfil>
  );
};
