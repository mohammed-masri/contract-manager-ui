"use client";
import React, { useEffect, useState } from "react";
import Stepper, { IStep } from "@/components/stepper";
import { useSearchParams } from "next/navigation";
import Typography from "@/components/typography";
import GeneralInfoForm from "./general-info-form";
import { FormikValues, useFormik } from "formik";
import { FormValidationUtils } from "@/utils";
import Button from "@/components/button";

const steps: IStep[] = [
  {
    key: "general-info",
    label: "General Info",
  },
  {
    key: "product-selection",
    label: "Product Selection",
  },
  {
    key: "products-info",
    label: "Products Info",
  },
];

export default function CreateContractForm() {
  const searchParams = useSearchParams();
  const stepKey = searchParams.get("step");

  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    let index = steps.findIndex((s) => s.key === stepKey);
    if (index === -1) index = 0;

    setActiveStep(index);
  }, [stepKey]);

  const initialValues: FormikValues = {
    projectName: "",
    years: "",
    months: "",
    days: "",
    projectGoal: "",
    description: "",
    budget: "",
    projectScope: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: FormValidationUtils.createContractFormValidation,
    onSubmit: (values) => {
      console.log("Form Data", values);
    },
  });

  useEffect(() => {
    formik.setErrors({});
    formik.setTouched({});
    formik.validateForm();
  }, [activeStep]);

  const handleClickBack = () => {
    let nextStep = Number(activeStep) - 1;
    if (nextStep < 0) nextStep = 0;

    setActiveStep(nextStep);
  };

  const handleClickNext = async () => {
    let nextStep = Number(activeStep) + 1;
    if (nextStep > steps.length) nextStep = steps.length - 1;

    setActiveStep(nextStep);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-5">
        <Typography content="Create Contract" />
        <Stepper
          activeStep={Number(activeStep)}
          setActiveStep={setActiveStep}
          steps={steps}
        />

        {steps[activeStep || 0].key === "general-info" && (
          <GeneralInfoForm formik={formik} />
        )}

        <div className="flex justify-between gap-3">
          <Button
            className="bg-purple-500"
            disabled={activeStep == 0}
            onClick={handleClickBack}
          >
            Back
          </Button>

          {activeStep === steps.length - 1 ? (
            <Button type="submit" disabled={Boolean(formik.errors)}>
              Submit
            </Button>
          ) : (
            <Button
              className="bg-purple-500"
              disabled={activeStep == steps.length - 1}
              onClick={handleClickNext}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
