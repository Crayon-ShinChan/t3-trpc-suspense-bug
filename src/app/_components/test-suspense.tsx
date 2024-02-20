"use client";

import { api } from "@/trpc/react";
import { Suspense } from "react";

export default function TestSuspense() {
  return (
    <div>
      <h1>Test Suspense</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SayHi />
      </Suspense>
    </div>
  );
}

function SayHi() {
  const [greet, getGreet] = api.post.hello.useSuspenseQuery({
    text: "Suspense user",
  });

  return <div>{greet.greeting}</div>;
}
