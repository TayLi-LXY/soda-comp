import { Suspense } from "react";
import ComponentTestingPageWrapper from "@/src/xpages/ComponentTestingPage/wrapper";

export default function ComponentTestingPage() {
  return (
    <Suspense fallback={null}>
      <ComponentTestingPageWrapper />
    </Suspense>
  );
}
