import { Suspense } from "react";
import TermsOfServiceWrapper from "@/src/xpages/TermsOfService/wrapper";

export default function TermsOfService() {
  return (
    <Suspense fallback={null}>
      <TermsOfServiceWrapper />
    </Suspense>
  );
}
