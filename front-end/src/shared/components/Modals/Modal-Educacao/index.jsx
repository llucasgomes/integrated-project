import { useContext } from "react";
import { API } from "../../../services/api";
import { Input } from "../../Input";
import { Container_Modal, Row } from "./styled";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { DataContext } from "../../../contexts/DataContext";
import { newData } from "../../../functions";

export const Modal_Educacao = ({ setOpenModal, editar, setEditar, id }) => {
  const { setIsFetching } = useContext(DataContext);
  // Valores iniciais Formik
  const initialValues = {
    instituicao: "",
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

    descricao: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .max(150, "O campo deve ter no maximo 150 caracteres")
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
    if (!editar) {
      API.post("/education", {
        course: values.instituicao,
        start_date: newData(values.inicio),
        end_date: values.termino ? newData(values.termino) : "Atual",
        description: values.descricao,
      })
        .then((res) => {
          // console.log(res);
          setEditar(false);
          setIsFetching(true);
          setOpenModal(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      API.put(`/education/${id}`, {
        course: values.instituicao,
        start_date: newData(values.inicio),
        end_date: values.termino ? newData(values.termino) : "Atual",
        description: values.descricao,
      })
        .then((res) => {
          // console.log(res);
          setEditar(false);
          setIsFetching(true);
          setOpenModal(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setSubmitting(false);
  };
  return (
    <Container_Modal>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setEditar(false);
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          {editar ? <h1>Editar</h1> : <h1>Inserir</h1>}
          <br />
        </div>
        <div className="body">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ values, isSubmitting }) => (
              <Form>
                <Row>
                  <Input name="instituicao" required />
                </Row>
                <Row>
                  <Input name="inicio" type="date" required />
                  <Input name="termino" type="date" required />
                </Row>
                <Row height={"textArea"}>
                  <Input name="descricao" type="text" required />
                </Row>
                <div className="footer">
                  {/* <button
                    onClick={() => {
                      setOpenModal(false);
                    }}
                    id="cancelBtn"
                  >
                    Cancel
                  </button> */}
                  <button type="submit" disabled={isSubmitting}>
                    {editar ? "Salvar Edição" : "Criar um novo"}
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
