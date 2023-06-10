import { Suspense } from "react";
import styles from "./app.module.scss";
import { NavLink, Outlet } from "react-router-dom";
import AuthProvider from "./components/Provider/AuthProvider";
import s from "./pages/HomePage/homepage.module.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <AuthProvider>
        <>
          <Suspense>
            <div className={`${s.content}`}>
              <Header />
              <div className={`${s.container} d-flex flex-fill`}>
                <Sidebar />
                <div className={`${s.contain}`}>
                  <NavLink to="/">
                    <h2 className={`${s.title}`}>HOMEPAGE</h2>
                  </NavLink>
                  <Outlet />
                </div>
              </div>
            </div>
          </Suspense>
        </>
      </AuthProvider>
    </div>
  );
}

export default App;
