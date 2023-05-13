import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import SignIn from "./Pages/signIn/signIn";
import Login from "./Pages/login/login";

export default function Rotas() {
   return(
       <BrowserRouter>
         <Routes>
            <Route element={ <Login/> }  path="/" exact />
            <Route element={ <SignIn/> }  path="/signin" />
            <Route element={ <SignIn/> }  path="/signin" />
         </Routes>
       </BrowserRouter>
   )
}