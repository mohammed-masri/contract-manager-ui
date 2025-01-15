"use client";
import { IContractItem } from "@/dto/contract";
import React, { useState } from "react";
import ContractItemPreview from "../contract-item-preview";
import ContractItemEditor from "../contract-item-editor";
import AnimatedIcon from "../animated-icon";
import { useAppDispatch } from "@/store/hooks";
import ContractActionInstance from "@/store/slices/contract/actions";
import { removeContractItem } from "@/store/slices/contract/slice";
import Button from "../button";
import ContractItemComment from "../contract-item-comment";
import ContractItemCommentInput from "../contract-item-comment-input";

type Props = {
  contractId: number;
  item: IContractItem;
};
export default function ContractItemContainer({ contractId, item }: Props) {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteItem = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      ContractActionInstance.deleteContractItem(contractId, item.id);
      dispatch(removeContractItem(item.id));
    }
  };

  return (
    <div className="flex flex-col gap-5 bg-white rounded-md p-4 transition-all duration-200 ease-in-out">
      <div>
        {isEditing ? (
          <ContractItemEditor item={item} />
        ) : (
          <div className="w-full" onClick={() => setIsEditing(true)}>
            <ContractItemPreview item={item} />
          </div>
        )}
      </div>
      {/* <div onClick={() => setIsEditing(true)}>
        <ContractItemEditor item={item} readonly={isEditing ? false : true} />
      </div> */}

      <div className="w-full h-[2px] bg-background-light"></div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowComments((prev) => !prev)}
            className="text-sm text-primary text-opacity-70 hover:text-opacity-100 transition-all duration-300 ease-in-out"
          >
            {showComments ? (
              <p>Hide comments</p>
            ) : (
              <p>View {item.commentsCount} comments</p>
            )}
          </button>

          {isEditing && (
            <Button className="bg-primary" onClick={() => setIsEditing(false)}>
              Save
            </Button>
          )}
        </div>

        <button onClick={handleDeleteItem}>
          <AnimatedIcon
            icon="material-symbols:delete-outline"
            className="text-red-500"
          />
        </button>
      </div>

      {showComments && (
        <div className="flex flex-col gap-5">
          {item.comments.map((c) => (
            <ContractItemComment
              key={`comment-${c.id}`}
              comment={c}
              contractId={contractId}
              itemId={item.id}
            />
          ))}
        </div>
      )}

      <ContractItemCommentInput contractId={contractId} item={item} />
    </div>
  );
}
