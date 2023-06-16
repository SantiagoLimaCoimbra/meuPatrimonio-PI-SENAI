import React, { useState, useContext } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

import SignIn from "./Pages/signIn/signIn";
import Login from "./Pages/login/login";

import { AuthProvider, AuthContext } from "./Contexts/auth";

import ViewItems from "./Pages/item/viewItems/viewItems";

export default function Rotas() {


   const Private = ({ children }) => {

      const { authenticated, loading } = useContext(AuthContext);

      if (loading) {
         return <div className="loading">Carregando...</div>
      }

      if (!authenticated){
         return <Navigate to="/login "/>;
      }

      return children;

   }  
   
   return(
       <Router>
       <AuthProvider>
            <Routes>
               <Route element={ <Login/> }  path="/login" exact />
               <Route element={ <SignIn/> }  path="/signin" />
               <Route element={ <Private> <ViewItems/> </Private> }  path="/" />
            </Routes>
         </AuthProvider>
       </Router>
   )
}
