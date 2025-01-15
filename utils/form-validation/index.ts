import * as Yup from "yup";

export const createContractFormValidation = () => {
  return Yup.object({
    projectName: Yup.string().required("Required"),
    years: Yup.number()
      .required("Required")
      .min(0, "Must be 0 or more")
      .integer("Must be an integer"),
    months: Yup.number()
      .required("Required")
      .min(0, "Must be 0 or more")
      .max(11, "Must be less than 12"),
    days: Yup.number()
      .required("Required")
      .min(0, "Must be 0 or more")
      .max(30, "Must be less than 31"),
    projectGoal: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    budget: Yup.number()
      .required("Required")
      .positive("Must be a positive number"),
    projectScope: Yup.string().required("Required"),
  });
};
