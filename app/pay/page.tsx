import { Suspense } from "react";
import PaymentWrapper from "@/src/xpages/Payment/wrapper";

export default function Payment() {
  return (
    <Suspense fallback={null}>
      <PaymentWrapper />
    </Suspense>
  );
}
