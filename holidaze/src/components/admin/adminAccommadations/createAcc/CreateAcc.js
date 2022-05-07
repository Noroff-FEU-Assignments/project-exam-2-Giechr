import BackButton from "../../../layout/BackButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { accommondationSchema } from "../../../validations/AccomodationValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../common/FormError";
import Heading from "../../../layout/Heading";
import axios from "axios";
import { Row, Container } from "react-bootstrap";
import Ingress from "../../../layout/Ingress";



export default function CreateAcc() {
  const [updated, setUpdated] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(accommondationSchema),
  });

  async function onSubmit(data) {
    setUpdating(true);
    setError(null);
    setUpdated(false);
    console.log(data);

    try {
      const response = await axios.post(
        `http://localhost:1337/api/accommadations/?populate=*`,
        {
          data: {
            name: data.name,
            pricestart: data.pricestart,
            priceend: data.priceend,
            maxguests: data.maxguests,
            rating: data.rating,
            wifi: data.wifi,
            text: data.text,
          },
        }
      );
      console.log("response", response.data);
      setUpdated(true);
    } catch (error) {
      console.log("error", error);
      setError(error.toString());
    } finally {
      setUpdating(false);
    }
  }
  if (updating) return <div>Loading...</div>;
  if (error) return <div>Error loading</div>;
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
        {updated && <div className="success">New accommodation created!</div>}
        {error && <FormError>{error}</FormError>}
        <fieldset disabled={updating}>
          <div>
            <input
              name="name"
              placeholder="Accommodation name"
              ref={register}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}
          </div>
          <div>
            <input
              name="pricestart"
              type="number"
              placeholder="Prices start at.."
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
              placeholder="Prices start at"
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
              placeholder="Max number of guests"
              ref={register}
            />
            {errors.maxguests && (
              <FormError>{errors.maxguests.message}</FormError>
            )}
          </div>
          <div>
            <label>Set the accommodation rating (max five)</label>
            <select name="rating" placeholder="rating" ref={register}>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="four">Four</option>
              <option value="five">Five</option>
            </select>
            {errors.rating && <FormError>{errors.rating.message}</FormError>}
          </div>

          <label>Does the accommodation have wifi?</label>
          <select name="wifi" placeholder="wifi" ref={register}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.wifi && <FormError>{errors.wifi.message}</FormError>}

          <div>
            <textarea name="text" placeholder="About" ref={register} />
            {errors.text && <FormError>{errors.text.message}</FormError>}
          </div>
          <button>Create a new accomadation</button>
        </fieldset>
      </form>
       </Container>
    </>
  );
}
