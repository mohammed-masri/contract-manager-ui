"use client";
import React, { useState } from "react";
import { IContractItem } from "@/dto/contract";
import TextArea from "../textarea";
import AnimatedIcon from "../animated-icon";
import ContractActionInstance from "@/store/slices/contract/actions";
import { useAppDispatch } from "@/store/hooks";
import { pushNewContractItemComment } from "@/store/slices/contract/slice";

type Props = {
  contractId: number;
  item: IContractItem;
};
export default function ContractItemCommentInput({ contractId, item }: Props) {
  const dispatch = useAppDispatch();

  const [content, setContent] = useState("");

  const handleSubmitComment = () => {
    ContractActionInstance.createNewContractItemComment(
      contractId,
      item.id,
      content
    ).then((res) => {
      setContent("");
      dispatch(
        pushNewContractItemComment({
          comment: res,
          itemId: item.id,
        })
      );
    });
  };

  return (
    <div className="flex items-center gap-5">
      <TextArea value={content} onChange={(e) => setContent(e.target.value)} />
      <button
        onClick={handleSubmitComment}
        className="bg-primary rounded-full p-1 hover:bg-opacity-70 transition-all duration-300 ease-in-out"
      >
        <AnimatedIcon
          icon="mingcute:send-fill"
          className="text-white w-5 h-5 text-opacity-100"
        />
      </button>
    </div>
  );
}
