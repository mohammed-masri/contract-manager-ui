"use client";
import Input from "@/components/input";
import TextArea from "@/components/textarea";
import { FormikProps, FormikValues } from "formik";
import React from "react";

type Props = {
  formik: FormikProps<FormikValues>;
};
export default function GeneralInfoForm({ formik }: Props) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="col-span-2 md:col-span-1">
        <div className="flex flex-col gap-5">
          <Input
            id="projectName"
            name="projectName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.projectName}
            errorMessage={
              formik.touched.projectName && formik.errors.projectName
                ? formik.errors.projectName?.toString()
                : ""
            }
            label="Project Name"
          />
          <div className="grid grid-cols-2 gap-1">
            <label className="col-span-2 sm:col-span-1">Project Duration</label>

            <div className="col-span-2 sm:col-span-1 flex justify-between gap-2">
              <div className="grid grid-cols-2">
                <label className="col-span-2">Years</label>
                <div className="col-span-2">
                  <Input
                    id="years"
                    name="years"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.years}
                    errorMessage={
                      formik.touched.years && formik.errors.years
                        ? formik.errors.years?.toString()
                        : ""
                    }
                    placeholder="1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <label className="col-span-2">Months</label>
                <div className="col-span-2">
                  <Input
                    id="months"
                    name="months"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.months}
                    errorMessage={
                      formik.touched.months && formik.errors.months
                        ? formik.errors.months?.toString()
                        : ""
                    }
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <label className="col-span-2">Days</label>
                <div className="col-span-2">
                  <Input
                    id="days"
                    name="days"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.days}
                    errorMessage={
                      formik.touched.days && formik.errors.days
                        ? formik.errors.days?.toString()
                        : ""
                    }
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>
          <TextArea
            id="projectGoal"
            name="projectGoal"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.projectGoal}
            errorMessage={
              formik.touched.projectGoal && formik.errors.projectGoal
                ? formik.errors.projectGoal?.toString()
                : ""
            }
            label="Project Goal"
          />
          <TextArea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            errorMessage={
              formik.touched.description && formik.errors.description
                ? formik.errors.description?.toString()
                : ""
            }
            label="Description"
          />
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        <div className="flex flex-col gap-5">
          <Input
            id="budget"
            name="budget"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.budget}
            errorMessage={
              formik.touched.budget && formik.errors.budget
                ? formik.errors.budget.toString()
                : ""
            }
            label="Project Budget (AED)"
          />

          <TextArea
            id="projectScope"
            name="projectScope"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.projectScope}
            errorMessage={
              formik.touched.projectScope && formik.errors.projectScope
                ? formik.errors.projectScope?.toString()
                : ""
            }
            label="Project Scope"
          />
        </div>
      </div>
    </div>
  );
}
