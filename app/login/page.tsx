import { Suspense } from "react";
import LogInWrapper from "@/src/xpages/LogIn/wrapper";

export default function LogIn() {
  return (
    <Suspense fallback={null}>
      <LogInWrapper />
    </Suspense>
  );
}
