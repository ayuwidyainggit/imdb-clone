// pages/about.js

import { Suspense } from "react";

export default function About() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>contohhh</div>
    </Suspense>
  );
}
