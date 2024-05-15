"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const [resetPassword, setResetPassword] = useState(false);

  //   async function handleFormSubmit(ev) {
  //     ev.preventDefault();
  //     setLoginInProgress(true);
  //     await signIn("credentials", { email, password, callbackUrl: "/" });

  //     setLoginInProgress(false);
  //   }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          disabled={loginInProgress}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <button disabled={loginInProgress} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
