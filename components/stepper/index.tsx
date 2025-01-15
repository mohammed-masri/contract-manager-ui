"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export interface IStep {
  key: string;
  label: string;
}
type Props = {
  steps: IStep[];
  activeStep: number;
  setActiveStep: (step: number) => void;
  queryKey?: string;
};
export default function Stepper({
  steps,
  setActiveStep,
  activeStep,
  queryKey = "step",
}: Props) {
  const router = useRouter();

  useEffect(() => {
    const step = steps[activeStep];
    if (step) {
      router.push(`?${queryKey}=${step.key}`);
    }
  }, [activeStep]);

  return (
    <div className="flex flex-row gap-2 items-center justify-between">
      {steps.map((s, i) => (
        <div key={`step-${i}`}>
          <button
            onClick={() => {
              setActiveStep(i);
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <div
                className={clsx(
                  "w-10 h-10 border-2 rounded-full flex items-center justify-center",
                  activeStep === i ? "border-primary-light" : "border-gray-200"
                )}
              >
                {i + 1}
              </div>
              <p className={clsx(activeStep === i && "text-primary-light")}>
                {s.label}
              </p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
