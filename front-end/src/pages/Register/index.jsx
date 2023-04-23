import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Container_Formulario,
  Container_Login,
  Footer,
  Row,
} from "./styled";
import { Input } from "../../shared/components/Input";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const Page_Register = () => {
  // VALORES INICIAIS FORMIK
  const initialValues = {
    email: "",
    senha: "",
    confirmar_senha: "",
  };
  //VALIDACAO DE FORMULARIO
  const validationSchema = Yup.object({
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
    confirmar_senha: Yup.string()
      .oneOf([Yup.ref("senha"), null], "Senhas não combinam!")
      .required("Campo obrigatório"),
  });

  //NOTIFY
  const notify = () =>
    toast.success("Cadastrado Realizado!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  //ONSUBMIT
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    //axios

    resetForm();
    setSubmitting(false);
  };

  return (
    <Container_Login>
      <ToastContainer style={{ fontSize: "20px" }} />
      <Container_Formulario>
        <h3>Login</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values, isSubmitting }) => (
            <Form>
              <Row>
                <Input name="email" type="email" required />
                <Input name="senha" label="Senha " type="password" required />
                <Input
                  name="confirmar_senha"
                  label="Confirmar Senha "
                  type="password"
                  required
                />
              </Row>
              <Footer>
                <Button type="submit" disabled={isSubmitting}>
                  Login
                </Button>
              </Footer>
            </Form>
          )}
        </Formik>
      </Container_Formulario>
    </Container_Login>
  );
};
