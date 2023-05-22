import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import SignIn from "./Pages/signIn/signIn";
import Login from "./Pages/login/login";

// Rotas Items
import ViewItems from "./Pages/item/viewItems/viewItems";

export default function Rotas() {
   return(
       <BrowserRouter>
         <Routes>
            <Route element={ <Login/> }  path="/" exact />
            <Route element={ <SignIn/> }  path="/signin" />
            <Route element={ <ViewItems/> }  path="/viewItems" />
         </Routes>
       </BrowserRouter>
   )
}