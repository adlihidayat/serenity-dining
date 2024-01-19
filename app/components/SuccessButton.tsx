"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SuccessButton = ({ session }: any) => {
  const router = useRouter();

  const id =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("id")
      : null;

  const success = async () => {
    const responseOrder = await fetch(`/api/order/${id}`, {
      method: "PATCH",
    });

    const responseCart = await fetch(`api/cart/email/${session.user.email}`, {
      method: "DELETE",
    });

    if (responseCart.ok || responseOrder.ok) {
      router.push(`/invoice/${id}`);
    }
  };

  return (
    <button
      onClick={success}
      className="link text-sm font-light border border-[#eec800] px-4 py-[6px] rounded"
    >
      Continue
    </button>
  );
};

export default SuccessButton;
