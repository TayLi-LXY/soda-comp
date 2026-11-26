import { Suspense } from "react";
import ScanedWrapper from "@/src/xpages/Scaned/wrapper";

export default function Scaned() {
  return (
    <Suspense fallback={null}>
      <ScanedWrapper />
    </Suspense>
  );
}
