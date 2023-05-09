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

import { Link, useNavigate } from "react-router-dom";

export const Page_Login = () => {
  // VALORES INICIAIS FORMIK
  const initialValues = {
    email: "",
    senha: "",
  };
  //VALIDACAO DE FORMULARIO
  const validationSchema = Yup.object({
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
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

  const navigate = useNavigate();

  //ONSUBMIT
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    //axios
    //direcionando para a pagina de adm

    if (
      values.email == "lucas.gomes.manaus@gmail.com" &&
      values.senha == "fada123"
    ) {
      navigate("/dashboard");
    } else {
      toast.error("Email ou Senha invaliudos!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setSubmitting(false);
    }
  };

  const dashboard = () => {};

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
                <Input name="senha" label="Senha" type="password" required />
              </Row>
              <Footer>
                <Button type="submit" disabled={isSubmitting}>
                  Login
                </Button>
                {/* <Row>
                  <p>
                    Esqueceu sua Senha?{" "}
                    <Link to={"/password-recovery"}>Clique aqui</Link>
                  </p>
                  <p>
                    <Link to={"/register"}>Criar conta</Link>
                  </p>
                </Row> */}
              </Footer>
            </Form>
          )}
        </Formik>
      </Container_Formulario>
    </Container_Login>
  );
};
