import * as yup from "yup";

export const loginSchema = yup.object().shape({
	identifier: yup.string().required("Please enter your username"),
	password: yup.string().min(8,"Password must be minimum 8 characters"),
});