import CollabRoom from "@/components/CollabRoom";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/header/Header";
import React from "react";

const Document = () => {
  return (
    <main className="flex w-full flex-col items-center">
      <CollabRoom />;
    </main>
  );
};

export default Document;
