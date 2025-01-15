"use client";
import { IContractItem } from "@/dto/contract";
import React from "react";
import Editor from "../editor";
import { useAppDispatch } from "@/store/hooks";
import { updateContentOfITem } from "@/store/slices/contract/slice";

type Props = {
  item: IContractItem;
  readonly?: boolean;
};
export default function ContractItemEditor({ item, readonly = false }: Props) {
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(updateContentOfITem({ id: item.id, content: value }));
  };
  return (
    <Editor value={item.content} onChange={onChange} readOnly={readonly} />
  );
}
