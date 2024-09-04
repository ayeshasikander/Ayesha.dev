import React, { Suspense } from "react";
import Loading from "../components/loading/Loading";

const LazyComponent = ({ path }) => {
  const LazyComponent = React.lazy(() => import(`../pages/${path}`));
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyComponent;