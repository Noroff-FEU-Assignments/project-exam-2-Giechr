import BackButton from "../../../layout/BackButton";
import { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../common/FormError";
import Heading from "../../../layout/Heading";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BookingSchema } from "../../../validations/BookingValidation";
import Ingress from "../../../layout/Ingress";
import { Row, Container } from "react-bootstrap";
import { BASE_URL } from "../../../../constants/api";
import AuthContext from "../../../../context/AuthContext";

export default function EditBooking() {
  const [getresponse, setGetresponse] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [fetchingPut, setFetchingPut] = useState(true);
  const [updatingPut, setUpdatingPut] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();
  const [auth] = useContext(AuthContext);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(BookingSchema),
  });

  let { id } = useParams();
  const url = BASE_URL + `/api/bookings/${id}`;

  useEffect(
    function () {
      async function get() {
        try {
          const response = await axios.get(
            url,

            {
              headers: {
                Authorization: `Bearer ${auth}`,
              },
            }
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
        },
        {
          headers: {
            Authorization: `Bearer ${auth}`,
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

  async function handleDelete() {
    try {
      await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      history.goBack();
    } catch (error) {
      setError(error);
    }
  }


  if (fetchingPut) return <div>Loading...</div>;

  if (error) return <div>Error loading...</div>;

  return (
    <>
      <Container>
        
        <BackButton />
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Heading content="Edit Booking" />
        </Row>
        <Row xs={1} md={2} className="justify-content-md-center  text-center">
          <Ingress content="" />
        </Row>
        <Row xs={1} md={2} className="justify-content-md-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            {updated && <div className="success">Booking updated successfully </div>}

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
                  name="email"
                  defaultValue={getresponse.attributes.email}
                  placeholder="email"
                  ref={register}
                />
                {errors.email && <FormError>{errors.email.message}</FormError>}
              </div>
              <div>
                <input
                  name="number"
                  defaultValue={getresponse.attributes.number}
                  placeholder="number"
                  ref={register}
                />
                {errors.number && (
                  <FormError>{errors.number.message}</FormError>
                )}
              </div>
              <div>
                <input
                  name="startdate"
                  defaultValue={getresponse.attributes.startdate}
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
                  defaultValue={getresponse.attributes.enddate}
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
                  defaultValue={getresponse.attributes.text}
                  placeholder="text"
                  ref={register}
                />
                {errors.text && <FormError>{errors.text.message}</FormError>}
              </div>

              <button>{updatingPut ? "Updating..." : "Update"}</button>
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
