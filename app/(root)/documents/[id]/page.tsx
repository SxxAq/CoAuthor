import { Editor } from "@/components/editor/Editor";
import Header from "@/components/header/Header";
import React from "react";

const Document = () => {
  return (
    <div>
      <Header>
        <p>Hello</p>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
