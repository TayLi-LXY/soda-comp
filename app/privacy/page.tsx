import { Suspense } from "react";
import PrivacyPolicyWrapper from "@/src/xpages/PrivacyPolicy/wrapper";

export default function PrivacyPolicy() {
  return (
    <Suspense fallback={null}>
      <PrivacyPolicyWrapper />
    </Suspense>
  );
}
