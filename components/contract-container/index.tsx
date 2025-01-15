"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ContractActionInstance from "@/store/slices/contract/actions";
import {
  pushNewContractItem,
  setContract,
  setError,
  setLoading,
} from "@/store/slices/contract/slice";
import ContractItemContainer from "../contract-item-container";
import AnimatedIcon from "../animated-icon";
import Button from "../button";

type Props = {
  id: number;
};
export default function ContractContainer({ id }: Props) {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.contract.loading);
  const contract = useAppSelector((state) => state.contract.contract);
  const error = useAppSelector((state) => state.contract.error);

  useEffect(() => {
    dispatch(setLoading(true));
    ContractActionInstance.fetchContract(id)
      .then((res) => {
        dispatch(setContract(res));
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [dispatch, id]);

  if (loading) return <p className="text-accent">loading...</p>;
  if (error) return <p className="text-error">{error}</p>;

  const handleCreateNewItem = () => {
    ContractActionInstance.createNewItem(id).then((res) => {
      console.log(res);
      dispatch(pushNewContractItem(res));
    });
  };

  return (
    <div className="px-10 py-5">
      <div className="flex flex-col gap-10">
        <h1>
          Contract Preview:{" "}
          <span className="text-primary">{contract?.title}</span>
        </h1>
        <div className="flex flex-col gap-5">
          {contract?.items.map((item) => (
            <ContractItemContainer
              key={`item-${item.id}`}
              contractId={id}
              item={item}
            />
          ))}

          <div className="p-4">
            <Button className="bg-primary" onClick={handleCreateNewItem}>
              <div className="flex gap-2 items-center">
                <AnimatedIcon icon="mdi:plus" />
                <p>Add new</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
