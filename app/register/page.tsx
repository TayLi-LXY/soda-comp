import { Suspense } from "react";
import RegisterWrapper from "@/src/xpages/Register/wrapper";

export default function Register() {
  return (
    <Suspense fallback={null}>
      <RegisterWrapper />
    </Suspense>
  );
}
