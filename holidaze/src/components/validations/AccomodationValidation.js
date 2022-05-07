import * as yup from "yup";

export const accommondationSchema = yup.object().shape({
  name: yup.string().required("Accommodation name is required"),
  pricestart: yup.string().required("Price start is required"),
  priceend: yup.string().required("Price end is required"),
  maxguests: yup.string().required("Max allowed guests is required"),
  text: yup.string().required("There has to be a discription"),
});