import React from "react";
import { IContractItem } from "@/dto/contract";
import "react-quill-new/dist/quill.snow.css";

type Props = {
  item: IContractItem;
};
export default function ContractItemPreview({ item }: Props) {
  return (
    <div
      className="view ql-editor"
      dangerouslySetInnerHTML={{ __html: item.content }}
    ></div>
  );
}
