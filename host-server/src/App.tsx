import React, { Suspense } from "react";
import "./App.css";

const LazyButton = React.lazy(() => import('remoteApp/Button"'));
function App() {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <LazyButton />
    </Suspense>
  );
}

export default App;
