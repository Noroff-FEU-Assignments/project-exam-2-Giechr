import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema } from "../validations/LoginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import AuthContext from "../../context/AuthContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Heading from "../layout/Heading";
import Ingress from "../layout/Ingress";

export default function LoginForm() {
  const [, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",

        {
          identifier: data.identifier,
          password: data.password,
        }
      );

      console.log("response", response);
      setAuth(response.data.jwt);
      history.push("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError("Login failed, check your username and password");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Container>
        <Row xs={1} md={3} className="justify-content-md-center text-center">
          <Heading content="Login" />
        </Row>
        <Row xs={1} md={3} className="justify-content-md-center text-center">
          <Ingress content="Login page for admins. Type username and password." />
        </Row>
        <Row xs={1} md={3}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {loginError && <FormError>{loginError}</FormError>}

            <Form.Group className="mb-3">
              <input name="identifier" placeholder="Username" ref={register} />
              {errors.identifier && (
                <FormError>{errors.identifier.message}</FormError>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <input
                name="password"
                placeholder="Password"
                ref={register}
                type="password"
              />
              {errors.password && (
                <FormError>{errors.password.message}</FormError>
              )}
            </Form.Group>

            <Button variant="outline-dark btn-lg" type="submit">
              Login
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}
