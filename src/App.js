import React from "react";
import { ToastContainer } from "react-toastify";
import Login from "./component/Login/Login";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import Profile from "./component/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
     
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"Login"} element={<Login />} />
        <Route path={"/Profile"} element={<Profile />} />
        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
