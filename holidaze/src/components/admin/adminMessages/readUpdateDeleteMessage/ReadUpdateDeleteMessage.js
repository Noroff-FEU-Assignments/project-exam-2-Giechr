import BackButton from "../../../layout/BackButton";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { contactSchema } from "../../../validations/ContactValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../common/FormError";
import Heading from "../../../layout/Heading";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import Ingress from "../../../layout/Ingress";




export default function EditMessage() {
  const [getresponse, setGetresponse] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [fetchingPut, setFetchingPut] = useState(true);
  const [updatingPut, setUpdatingPut] = useState(false);
  const [error, setError] = useState(null);

  	const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(contactSchema),
  });

  let { id } = useParams();

  useEffect(
    function () {
      async function get() {
        try {
          const response = await axios.get(
            `http://localhost:1337/api/messages/${id}`
          );
          console.log("response", response.data.data);
          setGetresponse(response.data.data);
        } catch (error) {
          console.log(error);
          setError(error.toString());
        } finally {
          setFetchingPut(false);
        }
      }

      get();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  async function onSubmit(data) {
    setUpdatingPut(true);
    setError(null);
    setUpdated(false);

    console.log(data);

    try {
      const response = await axios.put(
        `http://localhost:1337/api/messages/${id}`,
        {
          data: {
            name: data.name,
            subject: data.subject,
            description: data.description,
            email: data.email
          },
        }
      );
      console.log("response", response.data);
      setUpdated(true);
    } catch (error) {
      console.log("error", error);
      setError(error.toString());
    } finally {
      setUpdatingPut(false);
    }
  }

  if (fetchingPut) return <div>Loading...</div>;

  if (error) return <div>Error loading post</div>;



	async function handleDelete() {


    
      try {
        await axios.delete(`http://localhost:1337/api/messages/${id}`);
        history.goBack();
      } catch (error) {
        setError(error);
      }
    
  }

  return (
    <>
      <Container>
        <BackButton />
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Heading content="Edit messages" />
        </Row>
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Ingress content="" />
        </Row>
        <Row xs={1} md={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {updated && <div className="success">The message was updated</div>}

            {error && <FormError>{error}</FormError>}

            <fieldset disabled={updatingPut}>
              <div>
                <input
                  name="name"
                  defaultValue={getresponse.attributes.name}
                  placeholder="name"
                  ref={register}
                />
                {errors.name && <FormError>{errors.name.message}</FormError>}
              </div>
              <div>
                <input
                  name="name"
                  defaultValue={getresponse.attributes.email}
                  placeholder="email"
                  type="email"
                  ref={register}
                />
                {errors.email && <FormError>{errors.email.message}</FormError>}
              </div>
              <div>
                <input
                  name="subject"
                  defaultValue={getresponse.attributes.subject}
                  ref={register}
                />
                {errors.subject && (
                  <FormError>{errors.subject.message}</FormError>
                )}
              </div>

              <div>
                <textarea
                  name="description"
                  defaultValue={getresponse.attributes.description}
                  ref={register}
                />
                {errors.description && (
                  <FormError>{errors.description.message}</FormError>
                )}
              </div>

              <button>Update</button>
              <button type="button" className="delete" onClick={handleDelete}>
                {error ? "Error" : "Delete"}
              </button>
            </fieldset>
          </form>
        </Row>
      </Container>
    </>
  );
}
