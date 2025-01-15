"use client";

import ContractContainer from "@/components/contract-container";
import { useParams } from "next/navigation";
import React from "react";

export default function ContractPage() {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <ContractContainer id={Number(id)} />
    </div>
  );
}
