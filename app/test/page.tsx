import { Suspense } from "react";
import TestPageWrapper from "@/src/xpages/TestPage/wrapper";

export default function TestPage() {
  return (
    <Suspense fallback={null}>
      <TestPageWrapper />
    </Suspense>
  );
}
