import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { contactSchema } from "../validations/ContactValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import axios from "axios";
import { BASE_URL } from "../../constants/api";

const url = BASE_URL + "/api/messages";

export default function AddPost() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(contactSchema),
  });
  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    console.log("inSubmit data", data);
    try {
      const response = await axios.post(url, {
        data: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          description: data.description,
        },
      });

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
      <form onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input name="name" placeholder="name" ref={register} />
            {errors.name && <FormError>{errors.name.message}</FormError>}
          </div>
          <div>
            <input name="email" type="email" placeholder="email" ref={register} />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </div>
          <div>
            <input name="subject" placeholder="subject" ref={register} />
            {errors.subject && <FormError>{errors.subject.message}</FormError>}
          </div>
          <div>
            <textarea
              name="description"
              placeholder="description"
              ref={register}
            />
            {errors.description && (
              <FormError>{errors.description.message}</FormError>
            )}
          </div>

          <button>{submitting ? "Submitting..." : "Submit"}</button>
        </fieldset>
      </form>
    </>
  );
}
