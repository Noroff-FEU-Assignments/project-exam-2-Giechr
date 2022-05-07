import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().min(2).required("Please write your name"),
  email: yup.string().required("email is required"),
  subject: yup.string().min(3).required("Subject is required"),
  description: yup.string().min(3).max(1000).required("Min: 3 Max: 1 000"),
});

