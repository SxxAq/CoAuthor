"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { createDocument } from "@/lib/actions/room.action";
import { useRouter } from "next/navigation";

const AddDocBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocHandler = async () => {
    try {
      const room = createDocument({ userId, email });
      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="submit"
      onClick={addDocHandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image src="/assets/icons/add.svg" alt="add btn" height={24} width={24} />
      <p className="hidden sm:block">New Document</p>
    </Button>
  );
};

export default AddDocBtn;
