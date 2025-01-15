"use client";
import React, { useEffect, useState } from "react";

import ReactQuill from "react-quill-new";

import "react-quill-new/dist/quill.snow.css";

const defaultModules: any = {
  toolbar: [
    [{ header: [1, 2, false] }], // header options
    ["bold", "italic", "underline", "strike"], // formatting options
    [{ list: "ordered" }, { list: "bullet" }], // list options
    ["link", "image", "video"], // media options
    [{ color: [] }, { background: [] }], // color options
    ["clean"], // remove formatting button
    ["formula"], // insert formula
    ["blockquote", "code-block"], // block quote and code block
    [{ align: [] }], // text alignment
  ],
};

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readOnly: boolean;
};
export default function Editor({
  value,
  onChange,
  readOnly,
  placeholder = "Write Here...",
}: Props) {
  return (
    <ReactQuill
      placeholder={placeholder}
      theme="snow"
      value={value}
      onChange={onChange}
      modules={defaultModules}
      readOnly={readOnly}
    />
  );
}
