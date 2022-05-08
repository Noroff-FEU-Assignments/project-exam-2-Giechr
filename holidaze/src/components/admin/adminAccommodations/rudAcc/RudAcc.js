import BackButton from "../../../layout/BackButton";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { accommondationSchema } from "../../../validations/AccomodationValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../common/FormError";
import Heading from "../../../layout/Heading";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Row, Container} from "react-bootstrap"
import Ingress from "../../../layout/Ingress";
import { BASE_URL } from "../../../../constants/api";
import AuthContext from "../../../../context/AuthContext";

export default function EditAcc() {
  const [getresponse, setResponse] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [fetchingPut, setFetchingPut] = useState(true);
  const [updatingPut, setUpdatingPut] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(accommondationSchema),
  });

  let { id } = useParams();
  const url = BASE_URL + `/api/accommadations/${id}?populate=*`;
  const [auth] = useContext(AuthContext);

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
          setResponse(response.data.data);
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
            pricestart: data.pricestart,
            priceend: data.priceend,
            maxguests: data.maxguests,
            rating: data.rating,
            wifi: data.wifi,
            text: data.text,
            cardtext: data.cardtext,
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

  if (fetchingPut) return <div>Loading...</div>;

  if (error) return <div>Error loading post</div>;

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

  return (
    <>
      <Container>
        <BackButton />
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Heading content="Admin Accommodations" />
        </Row>
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Ingress content="" />
        </Row>

        <form onSubmit={handleSubmit(onSubmit)}>
          {updated && <div>Accommodation was updated</div>}

          {error && <FormError>{error}</FormError>}

          <fieldset disabled={updatingPut}>
            <Row className="justify-content-md-center text-center"></Row>
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
                name="pricestart"
                type="number"
                defaultValue={getresponse.attributes.pricestart}
                placeholder="pricestart"
                ref={register}
              />
              {errors.pricestart && (
                <FormError>{errors.pricestart.message}</FormError>
              )}
            </div>
            <div>
              <input
                name="priceend"
                type="number"
                defaultValue={getresponse.attributes.priceend}
                placeholder="priceend"
                ref={register}
              />
              {errors.priceend && (
                <FormError>{errors.priceend.message}</FormError>
              )}
            </div>
            <div>
              <input
                name="maxguests"
                type="number"
                defaultValue={getresponse.attributes.maxguests}
                placeholder="maxguests"
                ref={register}
              />
              {errors.maxguests && (
                <FormError>{errors.maxguests.message}</FormError>
              )}
            </div>
            <div>
              <select
                name="rating"
                defaultValue={getresponse.attributes.rating}
                placeholder="rating"
                ref={register}
              >
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="four">Four</option>
                <option value="five">Five</option>
              </select>
              {errors.rating && <FormError>{errors.rating.message}</FormError>}
            </div>
            <div>
              <select
                name="wifi"
                defaultValue={getresponse.attributes.wifi}
                placeholder="wifi"
                ref={register}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.wifi && <FormError>{errors.wifi.message}</FormError>}
            </div>
            <div>
              <textarea
                name="cardtext"
                placeholder="Card info text"
                ref={register}
              />
              {errors.cardtext && (
                <FormError>{errors.cardtext.message}</FormError>
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

            <button>Update</button>
            <button type="button" className="delete" onClick={handleDelete}>
              {error ? "Error" : "Delete"}
            </button>
          </fieldset>
        </form>
      </Container>
    </>
  );
}
