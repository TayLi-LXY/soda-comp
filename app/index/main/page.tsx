import { Suspense } from "react";
import MainWrapper from "@/src/xpages/Main/wrapper";

export default function Main() {
  return (
    <Suspense fallback={null}>
      <MainWrapper />
    </Suspense>
  );
}
