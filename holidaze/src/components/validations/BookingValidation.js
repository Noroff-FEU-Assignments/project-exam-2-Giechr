import * as yup from "yup";

export const BookingSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().required(),
  number: yup.string().min(8).required(),
  startdate: yup.string().required(),
  enddate: yup.string().required(),
  text: yup.string().required(),
});