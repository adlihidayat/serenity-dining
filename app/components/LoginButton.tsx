"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const session = useSession();
  return session.data ? (
    <button
      className="button px-5 py-1 border border-[#b3ac33]"
      onClick={() => signOut()}
    >
      SignOut
    </button>
  ) : (
    <button
      className="button mt-40 px-5 py-1 border border-[b3ac33]"
      onClick={() => signIn()}
    >
      SignIn
    </button>
  );
};

export default LoginButton;
