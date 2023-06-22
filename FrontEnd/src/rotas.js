import React, { useState, useContext } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

import SignIn from "./Pages/signIn/signIn";
import Login from "./Pages/login/login";
import Dashboard from "./Pages/dashboard/dashboard";

import { AuthProvider, AuthContext } from "./Contexts/auth";

import ViewItems from "./Pages/item/viewItems/viewItems";
import ViewCategories from "./Pages/category/viewCategories/viewCategories";
import NewCategory from "./Pages/category/newCategory/newCategory";
import ViewEmployees from "./Pages/employee/viewEmployees/viewEmployees";
import NewEmployee from "./Pages/employee/newEmployee/newEmployee";

export default function Rotas() {


   const Private = ({ children }) => {

      const { loading, user } = useContext(AuthContext);

      // console.log(context);

      if (loading) {
         return <div className="loading">Carregando...</div>
      }

      if (!user){
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
               <Route element={ <Private> <Dashboard/> </Private> }  path="/dashboard" />
               <Route element={ <Private> <ViewCategories/> </Private>} path="/viewCategories" />
               <Route element={ <Private> <NewCategory/> </Private>} path="/newCategory"/>
               <Route element={ <Private> <ViewEmployees/> </Private>} path="/viewEmployees"/>
               <Route element={ <Private> <NewEmployee/> </Private>} path="/newEmployee"/>
            </Routes>
         </AuthProvider>
       </Router>
   )
}
