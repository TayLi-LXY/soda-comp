import { Suspense } from "react";
import IndexWrapper from "@/src/xpages/Index/wrapper";

export default function Index() {
  return (
    <Suspense fallback={null}>
      <IndexWrapper />
    </Suspense>
  );
}
