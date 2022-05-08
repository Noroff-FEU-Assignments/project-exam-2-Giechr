import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import { BookingSchema } from "../validations/BookingValidation";
import { BASE_URL } from "../../constants/api";

const url = BASE_URL + "/api/accommadations?populate=*";

export default function OffcanvasContact() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(BookingSchema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    console.log("inSubmit data", data);
    try {
      const response = await axios.post(
        url,
        {
          data: {
            name: data.name,
            email: data.email,
            number: data.number,
            startdate: data.startdate,
            enddate: data.enddate,
            text: data.text,
          },
        }
      );

      console.log("response", response.data);
      history.push("/");
    } catch (error) {
      console.log("ERROR", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Button 
        variant="outline-dark btn-lg"
        onClick={handleShow}
      >
        Contact for booking
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Booking message</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            {serverError && <FormError>{serverError}</FormError>}
            <fieldset disabled={submitting}>
              <div>
                <input
                  name="name"
                  placeholder="name"
                  type="text"
                  ref={register}
                />
                {errors.name && <FormError>{errors.name.message}</FormError>}
              </div>
              <div>
                <input
                  name="email"
                  placeholder="email"
                  type="email"
                  ref={register}
                />
                {errors.email && <FormError>{errors.email.message}</FormError>}
              </div>
              <div>
                <input
                  name="number"
                  placeholder="number"
                  type="number"
                  ref={register}
                />
                {errors.number && (
                  <FormError>{errors.number.message}</FormError>
                )}
              </div>
              <div>
                <input
                  name="startdate"
                  type="date"
                  placeholder="startdate"
                  ref={register}
                />
                {errors.startdate && (
                  <FormError>{errors.startdate.message}</FormError>
                )}
              </div>
              <div>
                <input
                  name="enddate"
                  type="date"
                  placeholder="enddate"
                  ref={register}
                />
                {errors.enddate && (
                  <FormError>{errors.enddate.message}</FormError>
                )}
              </div>
              <div>
                <textarea
                  name="text"
                  placeholder="text"
                  type="text"
                  ref={register}
                />
                {errors.text && <FormError>{errors.text.message}</FormError>}
              </div>

              <button>{submitting ? "Submitting..." : "Submit"}</button>
            </fieldset>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
