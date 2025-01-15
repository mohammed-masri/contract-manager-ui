import { IContractComment } from "@/dto/contract";
import { MomentUtils } from "@/utils";
import React from "react";
type Props = {
  contractId: number;
  itemId: number;
  comment: IContractComment;
};
export default function ContractItemComment({
  comment,
  contractId,
  itemId,
}: Props) {
  return (
    <div className="flex gap-2">
      <div className="w-10 h-10 rounded-full bg-gray-400"></div>
      <div className="flex flex-col gap-2">
        <h5 className="text-text-primary">{comment.user.name}</h5>

        <div className="text-text-secondary text-sm">
          <p>{comment.comment}</p>
          <p className="text-text-secondary text-opacity-80">
            {MomentUtils.formatDate(comment.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
}
