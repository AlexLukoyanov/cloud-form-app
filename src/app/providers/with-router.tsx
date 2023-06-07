import { Suspense } from "react";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </>
  );
