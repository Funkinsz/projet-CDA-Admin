import { Suspense } from "react";
import styles from "./app.module.scss";
import { Outlet } from "react-router-dom";
import AuthProvider from "./components/Provider/AuthProvider";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <AuthProvider>
        <>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
      </AuthProvider>
    </div>
  );
}

export default App;
