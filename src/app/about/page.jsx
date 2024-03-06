// pages/about.js

import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";

export default function About() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>contohhh</div>
    </Suspense>
  );
}
